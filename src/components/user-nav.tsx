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
import { LogIn, LayoutDashboard, LogOut } from "lucide-react"
import { useUserSession } from "@/stores/user-session"
import { LoginDialog } from "./login-dialog"
import { useEffect, useState } from "react"
import { getSessionUser } from "@/services/auth"

export function UserNav() {
  const { user, logout, setUser } = useUserSession()
  const loading = false
  const router = useRouter()
  const [showLoginDialog, setShowLoginDialog] = useState(false)

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

  return (
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
        {user.role === "ADMIN" && (
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
  )
}
