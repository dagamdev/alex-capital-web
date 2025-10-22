"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TrendingUp } from "lucide-react"
import { LoginButton } from "@telegram-auth/react"
import { useUserSession } from "@/stores/user-session"
import { login } from "@/services/auth"
import { BOT_USERNAME } from "@/utils/constants"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const { setUser } = useUserSession()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <DialogTitle className="text-2xl">Alex Capital</DialogTitle>
          </div>
          <DialogDescription className="text-center">
            Inicia sesión con tu cuenta de Telegram para acceder a funciones exclusivas
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <LoginButton
            botUsername={BOT_USERNAME}
            onAuthCallback={(user) => {
              login(user).then(data => {
                setUser(data.user)
                onOpenChange(false)

                if (typeof localStorage === 'undefined') return
                localStorage.setItem('access-token', data.accessToken)
              })
            }}
          />
        </div>
        {/* <p className="text-center text-xs text-muted-foreground">
          Al iniciar sesión, aceptas nuestros términos y condiciones
        </p> */}
      </DialogContent>
    </Dialog>
  )
}
