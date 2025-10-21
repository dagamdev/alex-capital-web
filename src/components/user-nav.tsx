"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogIn, LayoutDashboard, LogOut, Check, Copy, Edit } from "lucide-react"
import { useUserSession } from "@/stores/user-session"
import { LoginDialog } from "./login-dialog"
import { useEffect, useState } from "react"
import { getSessionUser } from "@/services/auth"
import { toast } from "sonner"
import { updatePocketId } from "@/services/users"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from './ui/label'

export function UserNav() {
  const { user, logout, setUser } = useUserSession()
  const loading = false
  const router = useRouter()
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [pocketOptionId, setPocketOptionId] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [copiedTelegram, setCopiedTelegram] = useState(false)
  const [copiedPocket, setCopiedPocket] = useState(false)

  useEffect(() => {
    if (typeof localStorage === 'undefined') return
    const accessToken = localStorage.getItem("access-token")
    if (!accessToken) return
    if (user) {
      return
    }

    getSessionUser().then(data => {
      if(data) {
        setUser(data)
      }
    })
  }, [user, setUser])

  const handleLogout = async () => {
    await logout()
    router.push("/")
    router.refresh()
  }

  const copyToClipboard = async (id: number, type: 'telegramId' | 'pocketOptionId') => {
    try {
      await navigator.clipboard.writeText(id.toString())
      if (type === "telegramId") {
        setCopiedTelegram(true)
        setTimeout(() => setCopiedTelegram(false), 2000)
      } else {
        setCopiedPocket(true)
        setTimeout(() => setCopiedPocket(false), 2000)
      }
      toast('Copiado', {
        description: `${type === "telegramId" ? "Telegram ID" : "PocketOption ID"} copiado al portapapeles`,
      })
    } catch (error) {
      console.error(error)
      toast.error('Error', {
        description: 'No se pudo copiar al portapapeles'
      })
    }
  }

  const handleEditPocketOption = () => {
    setPocketOptionId(user?.pocketOptionId ? user.pocketOptionId.toString() : '')
    setShowEditDialog(true)
  }

  const handleSavePocketOption = async () => {
    setIsSaving(true)
    try {
      const updatedUser = await updatePocketId(+pocketOptionId || null)
      setUser(updatedUser)

      // await refreshAuth()
      setShowEditDialog(false)
      toast.success('Actualizado', {
        description: "PocketOption ID actualizado correctamente",
      })
    } catch (error) {
      console.error(error)
      toast.error('Error', {
        description: "No se pudo actualizar el PocketOption ID",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (loading) {
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
  }

  if (!user) {
    return (
      <>
        <Button variant="default" size="sm" onClick={() => setShowLoginDialog(true)} className="gap-2">
          <LogIn className="h-4 w-4" />
          Iniciar sesión
        </Button>
        <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
      </>
    )
  }

  const displayName = user.firstName + (user.lastName ? ` ${user.lastName}` : "")
  const initials = user.firstName[0] + (user.lastName?.[0] || "")

  return (<>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.photoUrl || "/placeholder.svg"} alt={displayName} />
            <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            {user.username && <p className="text-xs leading-none text-muted-foreground">@{user.username}</p>}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-2 py-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Telegram ID</p>
                <p className="text-sm font-mono">{user.telegramId}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(user.telegramId, "telegramId")}
                className="h-8 w-8 p-0"
              >
                {copiedTelegram ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className="px-2 py-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-1 flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground">PocketOption ID</p>
                <p className="text-sm font-mono truncate">{user.pocketOptionId || "No configurado"}</p>
              </div>
              <div className="flex gap-1">
                {user.pocketOptionId && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(user.pocketOptionId!, "pocketOptionId")}
                    className="h-8 w-8 p-0"
                  >
                    {copiedPocket ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleEditPocketOption} className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          {user.role === "OWNER" && (
            <>
              <DropdownMenuItem onClick={() => router.push("/admin")}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Panel Admin
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar sesión
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar PocketOption ID</DialogTitle>
          <DialogDescription>Ingresa tu ID de cuenta de PocketOption</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="pocketoption">PocketOption ID</Label>
            <Input
              id="pocketoption"
              value={pocketOptionId}
              onChange={(e) => {
                const value = e.target.value
                if (value === "" || (/^\d+$/.test(value) && value.length <= 16)) {
                  setPocketOptionId(value)
                }
              }}
              placeholder="Ingresa tu ID de PocketOption"
            />
            <p className="text-xs text-muted-foreground">
              Solo números, máximo 20 caracteres. Deja vacío para eliminar.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowEditDialog(false)} disabled={isSaving}>
            Cancelar
          </Button>
          <Button onClick={handleSavePocketOption} disabled={isSaving}>
            {isSaving ? "Guardando..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>)
}
