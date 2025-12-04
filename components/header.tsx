"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, Briefcase, Sparkles, Mail, Download } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/logoremove.png"
            alt="Encuentrame"
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
          />
          <span className="text-xl font-bold text-foreground">Encuentrame</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#trabajadores"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Users className="h-4 w-4" />
            Trabajadores
          </a>
          <a
            href="#empleadores"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Briefcase className="h-4 w-4" />
            Empleadores
          </a>
          <a
            href="#caracteristicas"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Sparkles className="h-4 w-4" />
            Características
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Contacto
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button 
            size="sm" 
            className="gap-2"
            asChild
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.cowib.ni&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Descargar app
            </a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#trabajadores" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Users className="h-4 w-4" />
              Trabajadores
            </a>
            <a href="#empleadores" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              Empleadores
            </a>
            <a href="#caracteristicas" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              Características
            </a>
            <a href="#contacto" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Mail className="h-4 w-4" />
              Contacto
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                size="sm" 
                className="gap-2 justify-start"
                asChild
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cowib.ni&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Descargar app
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
