import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, TrendingUp, Clock } from "lucide-react";

export const Route = createFileRoute("/admin/")({  
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();

  const handleCreatePage = (type: string) => {
    navigate({ to: '/admin/criar', search: { tipo: type } });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Visão geral do seu painel administrativo</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-[#22C55E]">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2 text-gray-600">
              <FileText className="w-4 h-4" />
              Páginas Ativas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-1">Nenhuma página criada ainda</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              Clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-1">Aguardando primeiros clientes</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-4 h-4" />
              Visualizações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-1">Últimos 30 dias</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              Tempo Médio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0s</p>
            <p className="text-sm text-gray-500 mt-1">Permanência nas páginas</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Começar Agora</CardTitle>
          <CardDescription>Crie sua primeira página de negócio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button onClick={() => handleCreatePage('salao')} className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-all group">
              <div className="text-4xl mb-3">💇</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#22C55E]">Salão de Beleza</h3>
              <p className="text-sm text-gray-500 mt-1">Agendamentos e serviços</p>
            </button>

            <button onClick={() => handleCreatePage('pizzaria')} className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-all group">
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#22C55E]">Pizzaria</h3>
              <p className="text-sm text-gray-500 mt-1">Cardápio digital</p>
            </button>

            <button onClick={() => handleCreatePage('restaurante')} className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-all group">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#22C55E]">Restaurante</h3>
              <p className="text-sm text-gray-500 mt-1">Menu completo</p>
            </button>

            <button onClick={() => handleCreatePage('barbearia')} className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-all group">
              <div className="text-4xl mb-3">✂️</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#22C55E]">Barbearia</h3>
              <p className="text-sm text-gray-500 mt-1">Cortes e agendamentos</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}