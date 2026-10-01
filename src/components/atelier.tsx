import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Bell, Bookmark, ChevronRight, Heart, Search, Share2, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LOGO = "https://lh3.googleusercontent.com/aida/AEtjO1U_vPkJCPN2xdGS1Ff5Chta113x-7fcUT2382mo9p1p91djlLXhYrKPHkbqp0parEQebdInBAXdmQFTbpxxZMd9KARRkMnF6U_Rvf55G_rSOv2D7kmiPQQrqg2h9i7TWODoaAOPVdRXqICT2HQHXHscbDv0xeD5O7hrXpzhZV6fPWqXha_myKGa_fOHOrxH9FDaevEN0KAHizrYSSGUR-wvvuySQoQlAbaZ6xQwON-S2nYhIal0h1Map4E";

export const images = {
  chiffon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwK9VLLGdgxKTKylX5Q5rg1okxj0OJCNboCCGcdtIWLCjJn-Z5uOv7_faviCk2p4FCix-ang1mRwKhNNnjrzjnY9P_RCZsAXGnn6d-2TSP4LIvvHW7F7VCBw0DnRE8B0Zhlu6xZEQnwACTRD5kbtX8sA14Rv7lw4-p_hpc8IuvlLMq-t5YLxokINcWZNWNVIrL9C7sAEYkP9dcceCCa4XdWNmmRoUBOs8SgcLtdUP-FLjXdDMGs9kq",
  tart: "https://lh3.googleusercontent.com/aida/AEtjO1UBc6bYflWGVs_qqv6ciUwKDQtlCjx5rTGJCdPLk-KWPFh1Vko2BoWbcX9gbXdBU5uL3bFFUcNOFn2g7oy5hf-hPQ3aE_EaipXmRr1VsC89rAflGnhmnerwabdWJ6_PaySumAl7hIDTLutt-rfWazn4_Pg45blAobp-5Qi_3pXk-HtkH0bYgk_rgRMfYYAdCtT9kjDp-dFK_hcY7raIUUzMPzaDiZA240klIHoagApRqdRLMjMbFDlWAvA",
  lemon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeWMPikpxJFvrLh239pYa6mSSlDtqKEkAoAo_5_i8GpsJUrIYP_CFzvsvWdupO7X4OQQUQMkCEEwfnrIF9m-E8oTLcv7__WFGI3lnGb4SnCnrhp2rMyJwYKmSwHUtM-2FDKGloqvtvX80sadMKXKdxHlIydRPHqw-szyNnFYh7e_XGmSv0mdOfWWJliruh1_iTkV8KHy07hYW5QvauCOGTG3lWsGuqMCQA4t1NHalUUEcM5CreSfA",
  chocolate: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZSUNZZMJLNS11luDO7fQHrVkVN0t9V7v2v3AF78fu5-fi9ITfF6fgqJA2vA9M0ZIvdtg_-xnGj1pl4_2juTKcO2u2gPtLV0U06iJRCAFEXgP85RqLHOEc9UUkUOTd9_VsU-DZss6qVU6e4X8XZ3n1EJY86IGsaowgBH-hMcVYUC0SGGrO4XJIlW_eNe-lbAcfpEbobVTHLwEGzPGQ2r_JA31flK8dyOln0QD8PpgFQqrH78zYqdg",
  meringue: "https://lh3.googleusercontent.com/aida-public/AB6AXuACmWgVDJAVKoPWYb9lZlQKA7vWV-nlxQcJ_1-WLHCjZvhvi7zyugUnYHbMV5vwHFukdBcqNvYgPBcSvZ64BrlP1yIVpXm4656b36JelYapcnqNhgSfdkKvHFKjP9R_Rx8KjWwkXQokLLAo_uNfLQrI4VWNmNC0kRTE9dLiEGNXgKN-yNGFM3xmm7CnOmpQop1A40rF8MUTcmC6Xz_oCwbalpI_PzPPbkQ53_a6J9MITZL7-5wI4Z52",
  finished: "https://lh3.googleusercontent.com/aida/AEtjO1W2bawkuw2mzwXOb9nHlmzCpzQIcxKWg9WWAuTfdWqpwYuYqGuBhZPt2k8f3lGshSQl9lgp5X2Knvzf20PeiIo1o8BZM7Tm__V9Qk_dRYpF52pGFpkSwkcBGE9VWmQeWti8oFEMk0OdgAQWhlJDCHrFb4avdWekliFf83pC8lSB6qPEspjM11bxCKvfzBr7fRrLGOe4WUL29IPS8DHXIa_dvcu6WzzhDdsX6UEfs0lIEMPxMwYqkokSltE",
};

export function AppHeader({ title = "Meu Caderno de Receitas", back = false }: { title?: string; back?: boolean }) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2">
          {back && <Button aria-label="Voltar" variant="ghost" size="icon" onClick={() => router.history.back()}><ArrowLeft className="size-5" /></Button>}
          <img src={LOGO} alt="Símbolo Velvet Atelier" className="h-8 w-auto" />
          <div className="min-w-0">
            <div className="font-display text-lg font-semibold leading-none text-primary">Velvet Atelier</div>
            <div className="mt-1 truncate text-[10px] font-bold uppercase text-muted-foreground">{title}</div>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          {back ? <><Button aria-label="Favoritar" variant="ghost" size="icon"><Heart className="size-5" /></Button><Button aria-label="Compartilhar" variant="ghost" size="icon"><Share2 className="size-5" /></Button></> : <><Button aria-label="Buscar" variant="ghost" size="icon"><Search className="size-5" /></Button><Button aria-label="Notificações" variant="ghost" size="icon" className="relative"><Bell className="size-5" /><span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary" /></Button></>}
          <span className="ml-1 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground"><UserRound className="size-4" /></span>
        </div>
      </div>
    </header>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-primary">{children}</span>;
}

export function RecipeCard({ image, tag, title, description, meta, action = "Cozinhar novamente", to = "/cozinha" }: { image: string; tag: string; title: string; description: string; meta: string; action?: string; to?: "/cozinha" }) {
  return (
    <article className="overflow-hidden rounded-lg bg-card shadow-card">
      <div className="group relative h-56 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-image-scrim" />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-[10px] font-bold uppercase text-primary backdrop-blur">{tag}</span>
        <Button aria-label="Receita salva" variant="white" size="icon" className="absolute right-3 top-3 size-8"><Bookmark className="size-4 fill-current" /></Button>
        <span className="absolute bottom-3 left-3 rounded-full bg-inverse/55 px-2.5 py-1 text-[10px] font-bold text-inverse-foreground backdrop-blur">★ 5.0 · {meta}</span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground"><Sparkles className="size-4 text-primary" /> Técnica dominada</span>
          <Button asChild size="sm"><Link to={to}>{action}<ChevronRight className="size-4" /></Link></Button>
        </div>
      </div>
    </article>
  );
}