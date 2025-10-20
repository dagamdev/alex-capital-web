import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, Award, Users, ArrowRight, Target, Trophy, Youtube, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Trader Profesional</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-primary">Alex Capital</span>: Dominando los mercados con estrategia y disciplina
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Especializado en análisis técnico y gestión de riesgo. Comparto mi experiencia en trading de forex y
              criptomonedas, ayudando a traders a desarrollar estrategias rentables y sostenibles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@AlexCapital04" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                  <Youtube className="h-5 w-5" />
                  Canal de YouTube
                </Button>
              </a>
              <a href="https://web.telegram.org/k/#@AlexCapital04" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                  <Send className="h-5 w-5" />
                  Telegram
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/alex-capital-logo.png"
              alt="Alex Capital Trading Academy"
              width={400}
              height={400}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Años de Experiencia</CardDescription>
              <CardTitle className="text-4xl text-primary">8+</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>ROI Promedio Anual</CardDescription>
              <CardTitle className="text-4xl text-primary">45%</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Operaciones Exitosas</CardDescription>
              <CardTitle className="text-4xl text-primary">2,500+</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription>Estudiantes</CardDescription>
              <CardTitle className="text-4xl text-primary">1,200+</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy Alex Capital, y comencé mi carrera en trading en 2016, enfocándome inicialmente en el mercado forex.
                A través de años de práctica disciplinada y aprendizaje continuo, desarrollé un sistema de trading
                basado en análisis técnico avanzado y gestión estricta del riesgo.
              </p>
              <p>
                Mi enfoque se centra en la consistencia sobre las ganancias rápidas. Creo firmemente en la importancia
                de la psicología del trading, la gestión del capital y el desarrollo de estrategias probadas que
                funcionen en diferentes condiciones de mercado.
              </p>
              <p>
                Actualmente, además de operar en los mercados, dedico tiempo a educar a otros traders a través de mi
                canal de YouTube, cursos, mentoría personalizada y análisis de mercado en tiempo real.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Especialización</CardTitle>
                    <CardDescription>Áreas de expertise</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Trading de Forex (EUR/USD, GBP/USD)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Criptomonedas (BTC, ETH, Altcoins)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Análisis Técnico Avanzado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Gestión de Riesgo y Capital
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Logros</CardTitle>
                    <CardDescription>Hitos destacados</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ganador Trading Cup 2022
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    +1,200 estudiantes certificados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Colaborador en TradingView
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Mentor certificado FTMO
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Análisis de Mercado</CardTitle>
              <CardDescription>Análisis técnico diario y señales de trading en tiempo real</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Análisis técnico detallado</li>
                <li>• Señales de entrada y salida</li>
                <li>• Niveles de soporte y resistencia</li>
                <li>• Actualizaciones en tiempo real</li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Más información
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Mentoría Personalizada</CardTitle>
              <CardDescription>Sesiones 1-on-1 para desarrollar tu estrategia de trading</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Sesiones individuales</li>
                <li>• Plan de trading personalizado</li>
                <li>• Revisión de operaciones</li>
                <li>• Soporte continuo</li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Más información
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Curso Completo</CardTitle>
              <CardDescription>Programa integral desde principiante hasta avanzado</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 50+ horas de contenido</li>
                <li>• Estrategias probadas</li>
                <li>• Ejercicios prácticos</li>
                <li>• Certificado de finalización</li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Más información
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary/10 border-primary/30 border-2 glow-primary">
          <CardContent className="p-12 text-center">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Participa en Nuestros <span className="text-primary">Sorteos</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Como agradecimiento a la comunidad, realizamos sorteos mensuales de cursos, sesiones de mentoría y
              herramientas de trading premium. ¡No te pierdas la oportunidad de ganar!
            </p>
            <Link href="/sorteos">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                Ver Sorteos Activos <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 <span className="text-primary font-semibold">Alex Capital</span>. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
