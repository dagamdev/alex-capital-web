import type { Draw } from "@/types/draw"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Gift, Trophy } from "lucide-react"
import Link from "next/link"

interface DrawCardProps {
  draw: Draw
}

export function DrawCard({ draw }: DrawCardProps) {
  const endDate = draw.endAt ? new Date(draw.endAt) : null
  const daysLeft = endDate ? Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : null
  const spotsLeft = draw.maxParticipants ? draw.maxParticipants - draw.currentParticipants : null
  const percentageFilled = draw.maxParticipants ? (draw.currentParticipants / draw.maxParticipants) * 100 : 0

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pt-6">
        <CardTitle className="text-xl">{draw.title}</CardTitle>
        <CardDescription className="line-clamp-2">{draw.description}</CardDescription>
        {daysLeft !== null && daysLeft <= 3 && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">¡Últimos días!</Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Gift className="h-4 w-4 text-primary" />
          <span className="font-semibold">Premio:</span>
          <span className="text-muted-foreground">{draw.description}</span>
        </div>

        {endDate && (
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="font-semibold">Finaliza:</span>
            <span className="text-muted-foreground">
              {endDate.toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-semibold">Participantes:</span>
            </div>
            <span className="text-muted-foreground">
              {draw.maxParticipants
                ? `${draw.currentParticipants} / ${draw.maxParticipants}`
                : draw.currentParticipants}
            </span>
          </div>

          {draw.maxParticipants && (
            <>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full transition-all" style={{ width: `${percentageFilled}%` }} />
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {spotsLeft && spotsLeft > 0 ? `${spotsLeft} lugares disponibles` : "Sorteo completo"}
              </p>
            </>
          )}
        </div>

        {draw.numberOfWinners > 1 && (
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="font-semibold">Ganadores:</span>
            <span className="text-muted-foreground">{draw.numberOfWinners}</span>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Link href={`/sorteo/${draw.id}`} className="w-full">
          <Button className="w-full" disabled={spotsLeft !== null && spotsLeft === 0}>
            {spotsLeft !== null && spotsLeft === 0 ? "Sorteo Completo" : "Participar Ahora"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
