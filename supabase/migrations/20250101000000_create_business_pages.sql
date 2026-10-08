-- Criar tabela de páginas de negócios
CREATE TABLE IF NOT EXISTS public.business_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('salão', 'pizzaria', 'restaurante', 'barbearia')),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  banner_image TEXT,
  description TEXT NOT NULL,
  services TEXT[] NOT NULL DEFAULT '{}',
  phone TEXT NOT NULL,
  instagram TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX idx_business_pages_owner_id ON public.business_pages(owner_id);
CREATE INDEX idx_business_pages_slug ON public.business_pages(slug);
CREATE INDEX idx_business_pages_type ON public.business_pages(type);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.business_pages ENABLE ROW LEVEL SECURITY;

-- Política: usuários autenticados podem ver todas as páginas
CREATE POLICY "Páginas são visíveis para todos autenticados"
  ON public.business_pages
  FOR SELECT
  TO authenticated
  USING (true);

-- Política: usuários podem criar suas próprias páginas
CREATE POLICY "Usuários podem criar suas páginas"
  ON public.business_pages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

-- Política: usuários podem atualizar apenas suas páginas
CREATE POLICY "Usuários podem atualizar suas páginas"
  ON public.business_pages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- Política: usuários podem deletar apenas suas páginas
CREATE POLICY "Usuários podem deletar suas páginas"
  ON public.business_pages
  FOR DELETE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.business_pages
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
