"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/alex-capital-logo.png"
            alt="Alex Capital Trading Academy"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Alex Capital</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/sorteos"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname?.startsWith("/sorteos") || pathname?.startsWith("/sorteo")
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Sorteos
          </Link>
          <Link
            href="/mentorias"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname?.startsWith("/mentorias") || pathname?.startsWith("/mentoria")
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Mentorías
          </Link>
          <ThemeToggle />
          <UserNav />
        </nav>
      </div>
    </header>
  )
}
