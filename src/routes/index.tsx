import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Award, BookOpen, CakeSlice, ChefHat, FolderPlus, Search, SlidersHorizontal, Sparkles, Star, Utensils } from "lucide-react";
import { AppHeader, Badge, images, RecipeCard } from "@/components/atelier";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Meu Caderno Gourmet — Velvet Atelier" },
    { name: "description", content: "Receitas autorais, coleções e técnicas de alta confeitaria." },
    { property: "og:title", content: "Meu Caderno Gourmet — Velvet Atelier" },
    { property: "og:description", content: "Receitas autorais, coleções e técnicas de alta confeitaria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Notebook,
});

const recipes = [
  { image: images.chiffon, tag: "Autoral · Confeitaria fina", title: "Bolo Chiffon de Framboesa & Baunilha", description: "Massa aveludada, chantilly aromatizado com fava de Bourbon e coulis fresco.", meta: "4 porções" },
  { image: images.tart, tag: "Alta pâtisserie", title: "Torta Rústica de Morango & Pistache", description: "Pâte sablée amanteigada com frangipane de pistache siciliano e morangos frescos.", meta: "50 min" },
  { image: images.chocolate, tag: "Gourmet especial", title: "Domo de Chocolate Noir & Framboesa", description: "Mousse de chocolate 70%, insert de framboesas silvestres e base crocante de avelãs.", meta: "1h 15min" },
];

const metrics: Array<{ value: string; label: string; icon: LucideIcon }> = [
  { value: "8", label: "Criadas & feitas", icon: CakeSlice },
  { value: "100%", label: "Taxa de êxito", icon: Award },
  { value: "4.9", label: "Avaliação média", icon: Star },
  { value: "Pleno", label: "Grau Pâtissier", icon: ChefHat },
];

function Notebook() {
  const [filter, setFilter] = useState("Todas");
  const [query, setQuery] = useState("");
  const shown = useMemo(() => recipes.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="min-h-screen pb-24"><AppHeader />
    <main className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[300px_1fr] lg:items-start">
        <aside className="space-y-4 lg:sticky lg:top-20">
          <section><div className="flex items-center justify-between"><Badge><BookOpen className="size-3.5" /> Acervo exclusivo</Badge><span className="text-xs font-semibold text-primary">● Sincronizado</span></div>
            <h1 className="mt-4 font-display text-4xl font-semibold">Meu Caderno Gourmet</h1><p className="mt-2 text-sm text-muted-foreground"><strong className="text-primary">14 receitas guardadas</strong> · 8 obras finalizadas</p>
          </section>
          <div className="relative"><Search className="absolute left-4 top-3.5 size-4 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 w-full rounded-full bg-card pl-11 pr-4 text-sm shadow-card outline-none focus:ring-2 focus:ring-ring" placeholder="Buscar em minhas receitas..." /></div>
          <section className="grid grid-cols-2 gap-2">
            {metrics.map(({ value, label, icon: Icon }) => <div key={label} className="rounded-lg bg-card p-3 shadow-card"><div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground"><span>{label}</span><Icon className="size-4 text-primary" /></div><div className="mt-2 font-display text-xl font-semibold">{value}</div></div>)}
          </section>
          <Button asChild className="hidden w-full lg:flex"><Link to="/colecao"><Sparkles className="size-4" /> Abrir coleção em destaque</Link></Button>
        </aside>
        <div className="min-w-0 space-y-5">
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">{["Todas", "Autoria própria", "Alta confeitaria", "Favoritas"].map((label) => <Button key={label} size="sm" variant={filter === label ? "primary" : "white"} onClick={() => setFilter(label)}>{label}</Button>)}<Button aria-label="Mais filtros" variant="soft" size="icon" className="size-9"><SlidersHorizontal className="size-4" /></Button></div>
          <section><div className="mb-3 flex items-center justify-between"><h2 className="font-display text-xl font-semibold">Minhas Pastas & Coleções</h2><Link to="/colecao" className="text-sm font-bold text-primary">Ver todas</Link></div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3"><Link to="/colecao" className="rounded-lg bg-card p-4 shadow-card transition hover:-translate-y-0.5"><CakeSlice className="size-6 text-primary" /><h3 className="mt-5 font-bold">Tartes & Frutas</h3><p className="mt-1 text-xs text-muted-foreground">5 receitas da estação</p></Link><div className="rounded-lg bg-card p-4 shadow-card"><Utensils className="size-6 text-primary" /><h3 className="mt-5 font-bold">Choux & Chiffons</h3><p className="mt-1 text-xs text-muted-foreground">3 massas arejadas</p></div><div className="hidden rounded-lg bg-secondary p-4 sm:block"><FolderPlus className="size-6 text-primary" /><h3 className="mt-5 font-bold text-primary">Nova pasta</h3><p className="mt-1 text-xs text-muted-foreground">Organize suas criações</p></div></div>
          </section>
          <section><div className="mb-3 flex items-center justify-between"><h2 className="font-display text-xl font-semibold">Criações em destaque</h2><span className="text-xs text-muted-foreground">{shown.length} resultados</span></div><div className="grid gap-5 md:grid-cols-2">{shown.map((recipe) => <RecipeCard key={recipe.title} {...recipe} />)}</div></section>
        </div>
      </div>
    </main>
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-background/92 backdrop-blur-xl"><div className="mx-auto flex h-17 max-w-lg items-center justify-around"><Link to="/" className="flex flex-col items-center gap-1 text-[10px] font-bold text-primary"><BookOpen className="size-5" />Caderno</Link><Link to="/colecao" className="flex flex-col items-center gap-1 text-[10px] font-bold text-muted-foreground"><CakeSlice className="size-5" />Coleções</Link><Link to="/cozinha" className="flex flex-col items-center gap-1 text-[10px] font-bold text-muted-foreground"><ChefHat className="size-5" />Em preparo</Link><span className="flex flex-col items-center gap-1 text-[10px] font-bold text-muted-foreground"><Star className="size-5" />Favoritas</span></div></nav>
  </div>;
}