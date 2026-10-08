import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/salao/beleza-maria")({
  head: () => ({
    meta: [
      { title: "Beleza maria" },
      { name: "description", content: "Beleza maria" },
      { property: "og:title", content: "Beleza maria" },
      { property: "og:description", content: "Beleza maria" },
    ],
  }),
  component: BelezamariaPage,
});

function BelezamariaPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold">Beleza maria</h1>
    </main>
  );
}
