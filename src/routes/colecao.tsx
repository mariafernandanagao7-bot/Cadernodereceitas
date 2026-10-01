import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CakeSlice, Star } from "lucide-react";
import { AppHeader, Badge, images, RecipeCard } from "@/components/atelier";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/colecao")({
  head: () => ({ meta: [{ title: "Tartes & Frutas — Velvet Atelier" }, { name: "description", content: "Coleção de tartes e frutas da estação." }, { property: "og:title", content: "Tartes & Frutas — Velvet Atelier" }, { property: "og:description", content: "Coleção de tartes e frutas da estação." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Collection,
});

function Collection() {
  return <div className="min-h-screen pb-24"><AppHeader title="Detalhe da Coleção" back /><main className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
    <section className="rounded-lg bg-card p-5 shadow-card"><Badge><CakeSlice className="size-3.5" /> Coleção gourmet</Badge><h1 className="mt-3 font-display text-4xl font-semibold">Tartes & Frutas da Estação</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Pâtes sablées amanteigadas, frangipane aromático e o brilho delicado das frutas vermelhas frescas colhidas no ponto perfeito.</p><div className="mt-4 flex flex-wrap gap-2"><Badge>5 obras registradas</Badge><Badge>3 testadas</Badge><Badge><Star className="size-3 fill-current" /> 4.95 média</Badge></div></section>
    <div className="my-5 flex gap-2 overflow-x-auto no-scrollbar">{["Todas (5)", "Pâtes sablées (3)", "Frutas vermelhas (4)", "Técnica avançada (1)"].map((label, i) => <Button key={label} size="sm" variant={i === 0 ? "primary" : "white"}>{label}</Button>)}</div>
    <div className="grid gap-5 md:grid-cols-2"><RecipeCard image={images.tart} tag="Alta pâtisserie" title="Torta Rústica de Morango & Pistache Siciliano" description="Pâte sablée finamente assada com frangipane cremoso de pistache de Bronte." meta="50 min · 6 fatias" action="Cozinhar" /><RecipeCard image={images.lemon} tag="Cítrico & refrescante" title="Torta Delicada de Framboesa & Limão Siciliano" description="Curd aveludado de limão sob coroa simétrica de framboesas frescas." meta="45 min · 8 fatias" action="Cozinhar" /></div>
    <section className="mt-5 rounded-lg bg-secondary p-5"><div className="flex items-center gap-2"><BookOpen className="size-5 text-primary" /><h2 className="font-display text-xl font-semibold">Caderno de Técnicas do Atelier</h2></div><h3 className="mt-3 text-sm font-bold text-primary">O segredo da pâte sablée perfeita</h3><ol className="mt-3 grid gap-3 text-sm leading-6 text-muted-foreground md:grid-cols-3"><li><strong className="text-foreground">1. Manteiga fria:</strong> incorpore à farinha sem aquecer.</li><li><strong className="text-foreground">2. Descanso térmico:</strong> refrigere por pelo menos 2 horas.</li><li><strong className="text-foreground">3. Furação suave:</strong> perfure o fundo antes de assar.</li></ol></section>
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/92 p-3 backdrop-blur"><Button asChild className="mx-auto flex max-w-md"><Link to="/cozinha">Cozinhar receita desta pasta</Link></Button></div>
  </main></div>;
}
