import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";
import { LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin - CliqueFácil Digital" },
      { name: "description", content: "Painel administrativo para gerenciar páginas de negócios" },
      { property: "og:title", content: "Painel Admin - CliqueFácil Digital" },
      { property: "og:description", content: "Painel administrativo para gerenciar páginas de negócios" },
    ],
  }),
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({ to: "/login", search: { redirect: "/admin" } });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1F2937] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#22C55E] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Clique Fácil</h1>
              <p className="text-xs text-gray-400 tracking-wider">DIGITAL</p>
            </div>
          </Link>
        </div>

        <Separator className="bg-gray-700" />

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            activeProps={{ className: "bg-[#22C55E] hover:bg-[#22C55E]" }}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/admin/pages"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            activeProps={{ className: "bg-[#22C55E] hover:bg-[#22C55E]" }}
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium">Páginas</span>
          </Link>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-gray-700">
          {user && (
            <div className="mb-3 px-4 py-2">
              <p className="text-xs text-gray-400">Logado como</p>
              <p className="text-sm font-medium truncate">{user.email}</p>
            </div>
          )}
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sair</span>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
