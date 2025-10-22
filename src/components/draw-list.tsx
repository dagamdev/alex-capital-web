'use client'

import { getDraws } from "@/services/draws"
import { Draw } from "@/types/draw"
import { Trophy } from "lucide-react"
import { useEffect, useState } from "react"
import { DrawCard } from "./draw-card"

export function DrawList () {
  const [draws, setDraws] = useState<Draw[]>([])

  useEffect(() => {
    getDraws().then(data => {
      setDraws(data)
    })
  }, [])


  return (
    <section className="container mx-auto px-4 pb-16">
      {draws.length === 0 ? (
        <div className="text-center py-16">
          <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No hay sorteos activos</h3>
          <p className="text-muted-foreground">Vuelve pronto para ver nuevos sorteos disponibles</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {draws.map((draw) => (
            <DrawCard key={draw.id} draw={draw} />
          ))}
        </div>
      )}
    </section>
  )
}