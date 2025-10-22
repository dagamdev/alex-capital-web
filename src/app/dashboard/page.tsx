// import { getSupabaseServerClient } from "@/lib/supabase/server"
// import type { Draw } from "@/lib/types"
// import { DrawsTable } from "@/components/admin/draws-table"
// import { CreateDrawDialog } from "@/components/admin/create-draw-dialog"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Trophy, TrendingUp, Users, Gift } from "lucide-react"
// import Link from "next/link"
// import { requireAdminAuth } from "@/lib/auth"
// import { redirect } from "next/navigation"
// import { LogoutButton } from "@/components/admin/logout-button"

// export const dynamic = "force-dynamic"

// async function getDraws(): Promise<Draw[]> {
//   const supabase = await getSupabaseServerClient()

//   const { data, error } = await supabase.from("draws").select("*").order("created_at", { ascending: false })

//   if (error) {
//     console.error("[v0] Error fetching draws:", error)
//     return []
//   }

//   return data || []
// }

// async function getStats() {
//   const supabase = await getSupabaseServerClient()

//   const [{ count: totalDraws }, { count: activeDraws }, { count: totalParticipants }] = await Promise.all([
//     supabase.from("draws").select("*", { count: "exact", head: true }),
//     supabase.from("draws").select("*", { count: "exact", head: true }).eq("status", "active"),
//     supabase.from("participants").select("*", { count: "exact", head: true }),
//   ])

//   return {
//     totalDraws: totalDraws || 0,
//     activeDraws: activeDraws || 0,
//     totalParticipants: totalParticipants || 0,
//   }
// }

// export default async function DashboardPage() {
//   const admin = await requireAdminAuth()

//   if (!admin) {
//     redirect("/admin/login")
//   }

//   const draws = await getDraws()
//   const stats = await getStats()

//   const activeDraws = draws.filter((d) => d.status === "active")
//   const closedDraws = draws.filter((d) => d.status === "closed")
//   const completedDraws = draws.filter((d) => d.status === "completed")

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Trophy className="h-8 w-8 text-primary" />
//             <div>
//               <h1 className="text-2xl font-bold">Panel de Administrador</h1>
//               <p className="text-sm text-muted-foreground">{admin.name}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link href="/">
//               <Button variant="outline" size="sm">
//                 Ver Sitio
//               </Button>
//             </Link>
//             <Link href="/sorteos">
//               <Button variant="outline" size="sm">
//                 Ver Sorteos
//               </Button>
//             </Link>
//             <LogoutButton />
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Total Sorteos</CardTitle>
//               <Gift className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalDraws}</div>
//               <p className="text-xs text-muted-foreground">Todos los sorteos creados</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Sorteos Activos</CardTitle>
//               <TrendingUp className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.activeDraws}</div>
//               <p className="text-xs text-muted-foreground">Sorteos en curso</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Total Participantes</CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stats.totalParticipants}</div>
//               <p className="text-xs text-muted-foreground">Registros totales</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Draws Management */}
//         <Card>
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <div>
//                 <CardTitle>Gestión de Sorteos</CardTitle>
//                 <CardDescription>Administra todos tus sorteos desde aquí</CardDescription>
//               </div>
//               <CreateDrawDialog />
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="active" className="w-full">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="active">Activos ({activeDraws.length})</TabsTrigger>
//                 <TabsTrigger value="closed">Cerrados ({closedDraws.length})</TabsTrigger>
//                 <TabsTrigger value="completed">Completados ({completedDraws.length})</TabsTrigger>
//               </TabsList>

//               <TabsContent value="active" className="mt-6">
//                 <DrawsTable draws={activeDraws} />
//               </TabsContent>

//               <TabsContent value="closed" className="mt-6">
//                 <DrawsTable draws={closedDraws} />
//               </TabsContent>

//               <TabsContent value="completed" className="mt-6">
//                 <DrawsTable draws={completedDraws} />
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
