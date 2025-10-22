import { Header } from "@/components/header"
import { Sparkles } from "lucide-react"
import { DrawList } from "@/components/draw-list"

export default async function SorteosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Sorteos Activos</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Participa y Gana Premios Increíbles</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Regístrate en nuestros sorteos y ten la oportunidad de ganar fondeos de cuenta. ¡La suerte está de tu lado!
        </p>
      </section>

      {/* Draws Grid */}
      <DrawList />
    </div>
  )
}
