"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Home, Briefcase, MessageCircle, Settings, Heart, Bookmark, Hammer, Zap, Wrench, FileText, Share2, Search, Image as ImageIcon, Moon, Bell, Baby, Scissors, UtensilsCrossed, Laptop, Camera, Wifi, Signal, Battery, ChevronLeft, Square, Menu } from "lucide-react"

const mainServices = [
  { icon: Baby, label: "Cuido de niños" },
  { icon: Scissors, label: "Estilismo" },
  { icon: UtensilsCrossed, label: "Cocina" },
  { icon: Laptop, label: "Tecnología" },
  { icon: Camera, label: "Fotografía" },
  { icon: Heart, label: "Cuidado personal" },
]

// Componente compartido para el contenido de la app (feed y navegación)
function AppContent() {
  return (
    <>
      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto bg-[#F5F5F5] p-3">
        {/* Card 1 - Con tags */}
        <div className="mb-3 animate-slide-up rounded-2xl bg-white p-4 shadow-sm" style={{ animationDelay: '0ms' }}>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1976D2] to-[#42A5F5]">
              <Hammer className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="mb-2 flex gap-2">
            <span className="rounded-lg bg-[#FFEBEE] px-2 py-0.5 text-[10px] font-medium text-[#E53E3E]">Urgente</span>
            <span className="rounded-lg bg-[#E3F2FD] px-2 py-0.5 text-[10px] font-medium text-[#1976D2]">Carpintería</span>
          </div>
          <div className="mb-3 flex items-center gap-4 text-[10px] text-[#666666]">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-[#FF6B35]" />
              <span>Hace 2h</span>
            </div>
            <span>📍 Managua</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-[#E0E0E0] pt-2.5">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#1976D2] px-3 py-2 text-[10px] font-semibold text-white shadow-sm transition-all hover:bg-[#1565C0]">
              <MessageCircle className="h-3 w-3" />
              <span>Contactar</span>
            </button>
            <div className="flex gap-1">
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Heart className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <FileText className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Share2 className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Bookmark className="h-2.5 w-2.5 text-[#666666]" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-3 animate-slide-up rounded-2xl bg-white p-4 shadow-sm" style={{ animationDelay: '100ms' }}>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#28A745] to-[#5CB85C]">
              <Zap className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="mb-2 flex gap-2">
            <span className="rounded-lg bg-[#E3F2FD] px-2 py-0.5 text-[10px] font-medium text-[#1976D2]">Electricidad</span>
          </div>
          <div className="mb-3 flex items-center gap-4 text-[10px] text-[#666666]">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-[#FF6B35]" />
              <span>Hace 5h</span>
            </div>
            <span>📍 León</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-[#E0E0E0] pt-2.5">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#1976D2] px-3 py-2 text-[10px] font-semibold text-white shadow-sm transition-all hover:bg-[#1565C0]">
              <MessageCircle className="h-3 w-3" />
              <span>Contactar</span>
            </button>
            <div className="flex gap-1">
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Heart className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <FileText className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Share2 className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Bookmark className="h-2.5 w-2.5 text-[#666666]" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mb-3 animate-slide-up rounded-2xl bg-white p-4 shadow-sm" style={{ animationDelay: '200ms' }}>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8A65]">
              <Wrench className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="mb-2 flex gap-2">
            <span className="rounded-lg bg-[#E3F2FD] px-2 py-0.5 text-[10px] font-medium text-[#1976D2]">Plomería</span>
          </div>
          <div className="mb-3 flex items-center gap-4 text-[10px] text-[#666666]">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-[#FF6B35]" />
              <span>Hace 1d</span>
            </div>
            <span>📍 Granada</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-[#E0E0E0] pt-2.5">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#1976D2] px-3 py-2 text-[10px] font-semibold text-white shadow-sm transition-all hover:bg-[#1565C0]">
              <MessageCircle className="h-3 w-3" />
              <span>Contactar</span>
            </button>
            <div className="flex gap-1">
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Heart className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <FileText className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Share2 className="h-2.5 w-2.5 text-[#666666]" />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-[#E0E0E0] shadow-sm transition-all hover:bg-[#F5F5F5]">
                <Bookmark className="h-2.5 w-2.5 text-[#666666]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Componente para teléfono Android
function AndroidPhone() {
  return (
    <>
      {/* Status Bar Android */}
      <div className="flex items-center justify-between bg-white px-4 py-1.5 text-[10px] font-medium text-[#1A1A1A]">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal className="h-3 w-3 text-[#666666]" />
          <Wifi className="h-3 w-3 text-[#666666]" />
          <div className="flex items-center gap-0.5">
            <div className="h-2 w-4 border border-[#666666] rounded-sm">
              <div className="h-full w-3/4 bg-[#666666] rounded-sm" />
            </div>
          </div>
          <Battery className="h-3 w-3 text-[#666666]" />
        </div>
      </div>

      {/* App Header */}
      <div className="flex items-center justify-between border-b border-[#E0E0E0] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#1976D2] to-[#FF6B35] flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-sm font-semibold text-[#1976D2]">Encuentrame</span>
        </div>
        <div className="flex items-center gap-0.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors">
            <Search className="h-4 w-4 text-[#666666]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors relative">
            <ImageIcon className="h-4 w-4 text-[#666666]" />
            <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors">
            <Moon className="h-4 w-4 text-[#666666]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors relative">
            <Bell className="h-4 w-4 text-[#666666]" />
            <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#E53E3E]" />
          </button>
        </div>
      </div>

      <AppContent />

      {/* Bottom Navigation Bar Android */}
      <div className="flex items-center justify-around border-t border-[#E0E0E0] bg-white px-2 py-3">
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1976D2]">
            <Home className="h-4 w-4 text-white" />
          </div>
          <span className="text-[8px] font-semibold text-[#1976D2]">Inicio</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Briefcase className="h-5 w-5 text-[#666666]" />
          <span className="text-[8px] text-[#666666]">Trabajos</span>
        </div>
        <div className="relative flex flex-col items-center gap-1">
          <MessageCircle className="h-5 w-5 text-[#666666]" />
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#E53E3E] to-[#C53030] text-[8px] font-bold text-white shadow-sm">
            3
          </div>
          <span className="text-[8px] text-[#666666]">Mensajes</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Settings className="h-5 w-5 text-[#666666]" />
          <span className="text-[8px] text-[#666666]">Config</span>
        </div>
      </div>

      {/* Android Navigation Buttons */}
      <div className="flex items-center justify-center gap-8 border-t border-[#E0E0E0] bg-[#F5F5F5] px-4 py-2">
        <div className="h-1 w-12 rounded-full bg-[#CCCCCC]" />
        <ChevronLeft className="h-4 w-4 text-[#666666]" />
        <div className="h-8 w-8 rounded-full bg-[#E0E0E0] flex items-center justify-center">
          <Home className="h-4 w-4 text-[#666666]" />
        </div>
        <Square className="h-4 w-4 text-[#666666]" />
      </div>
    </>
  )
}

// Componente para teléfono iOS
function IOSPhone() {
  return (
    <>
      {/* Status Bar iOS con notch simulado */}
      <div className="relative bg-white">
        {/* Notch simulado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-[#1A1A1A] rounded-b-2xl z-10" />
        <div className="flex items-center justify-between px-4 pt-6 pb-1.5 text-[10px] font-semibold text-[#1A1A1A]">
          <div className="flex items-center gap-1">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
          </div>
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[9px]">100%</span>
            <Battery className="h-4 w-6" />
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="flex items-center justify-between border-b border-[#E0E0E0] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#1976D2] to-[#FF6B35] flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-sm font-semibold text-[#1976D2]">Encuentrame</span>
        </div>
        <div className="flex items-center gap-0.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors">
            <Search className="h-4 w-4 text-[#666666]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors relative">
            <ImageIcon className="h-4 w-4 text-[#666666]" />
            <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors">
            <Moon className="h-4 w-4 text-[#666666]" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors relative">
            <Bell className="h-4 w-4 text-[#666666]" />
            <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#E53E3E]" />
          </button>
        </div>
      </div>

      <AppContent />

      {/* Bottom Navigation Bar iOS */}
      <div className="flex items-center justify-around border-t border-[#E0E0E0] bg-white px-2 py-3">
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1976D2]">
            <Home className="h-4 w-4 text-white" />
          </div>
          <span className="text-[8px] font-semibold text-[#1976D2]">Inicio</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Briefcase className="h-5 w-5 text-[#666666]" />
          <span className="text-[8px] text-[#666666]">Trabajos</span>
        </div>
        <div className="relative flex flex-col items-center gap-1">
          <MessageCircle className="h-5 w-5 text-[#666666]" />
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#E53E3E] to-[#C53030] text-[8px] font-bold text-white shadow-sm">
            3
          </div>
          <span className="text-[8px] text-[#666666]">Mensajes</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Settings className="h-5 w-5 text-[#666666]" />
          <span className="text-[8px] text-[#666666]">Config</span>
        </div>
      </div>

      {/* iOS Home Indicator */}
      <div className="flex items-center justify-center bg-white pb-2">
        <div className="h-1 w-32 rounded-full bg-[#CCCCCC]" />
      </div>
    </>
  )
}


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/assets/images/banner-horizontal-1024x500-px-para-una-app-llamada.png"
            alt="Encuentrame"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Encuentrame: donde el talento y las oportunidades se conectan
            </h1>
            <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Encuentrame es la app que une a personas, profesionales y negocios dentro de su comunidad. Si buscás trabajo, querés ofrecer tus servicios o necesitás contratar a alguien de confianza, acá lo encontrás rápido, fácil y sin rodeos.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button 
                size="lg" 
                className="gap-2 bg-[#1976D2] text-white hover:bg-[#1565C0] shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cowib.ni&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Smartphone className="h-5 w-5" />
                  Descargar app
                </a>
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-start gap-2 text-sm text-[#666666]">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#1976D2]" />
              <span className="font-medium">100% gratuito</span>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200 flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-end">
            {/* Teléfono Android: Forma rectangular/vertical */}
            <div className="group relative w-full max-w-[280px] sm:max-w-[320px] sm:w-[320px] cursor-pointer">
              <div className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-[#1976D2]/20 blur-3xl animate-pulse group-hover:bg-[#1976D2]/30 transition-all duration-300" />
              <div className="relative h-[550px] sm:h-[600px] md:h-[650px] lg:h-[680px] w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border-[6px] sm:border-[8px] md:border-[12px] border-foreground/20 bg-[#F5F5F5] shadow-2xl flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-[#1976D2]/30">
                <AndroidPhone />
              </div>
            </div>

            {/* Teléfono iOS: Forma curva/orgánica */}
            <div className="group relative -mt-2 sm:-mt-4 md:-mt-8 lg:mt-0 w-full max-w-[280px] sm:max-w-[320px] sm:w-[320px] cursor-pointer">
              <div className="absolute -inset-2 sm:-inset-4 rounded-[3rem] bg-[#FF6B35]/20 blur-3xl animate-pulse group-hover:bg-[#FF6B35]/30 transition-all duration-300" style={{ animationDelay: '0.5s' }} />
              <div 
                className="relative h-[550px] sm:h-[600px] md:h-[650px] lg:h-[680px] w-full overflow-hidden bg-[#F5F5F5] shadow-2xl flex flex-col transition-all duration-300 group-hover:shadow-3xl group-hover:border-[#FF6B35]/30"
                style={{
                  borderRadius: '40px 40px 25px 25px / 35px 35px 15px 15px',
                  border: '6px solid rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(-2deg)',
                  transformOrigin: 'center center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(-2deg) scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(-2deg) scale(1)'
                }}
              >
                <IOSPhone />
              </div>
            </div>
          </div>
        </div>

        {/* Categorías de servicios */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-6">
            {mainServices.map((service, index) => (
              <Card
                key={service.label}
                className="group cursor-pointer border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <span className="text-center text-xs font-medium text-foreground sm:text-sm">{service.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ilustración grande con mapa urbano */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/ilustraci-n-art-stica-que-muestra-un-gran-mapa-urb.png"
              alt="Mapa urbano con conexiones en Encuentrame"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
