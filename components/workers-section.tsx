"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Hammer,
  Truck,
  Sparkles,
  Zap,
  Wrench,
  Baby,
  PaintBucket,
  Scissors,
  UtensilsCrossed,
  Laptop,
  Camera,
  Heart,
} from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  { icon: Hammer, label: "Carpintería" },
  { icon: PaintBucket, label: "Albañilería" },
  { icon: Truck, label: "Transporte" },
  { icon: Sparkles, label: "Limpieza" },
  { icon: Zap, label: "Electricidad" },
  { icon: Wrench, label: "Plomería" },
  { icon: Baby, label: "Cuido de niños" },
  { icon: Scissors, label: "Estilismo" },
  { icon: UtensilsCrossed, label: "Cocina" },
  { icon: Laptop, label: "Tecnología" },
  { icon: Camera, label: "Fotografía" },
  { icon: Heart, label: "Cuidado personal" },
]

export function WorkersSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section 
      id="trabajadores" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Para profesionales
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Para trabajadores y profesionales
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Creá tu perfil y ofrecé tus servicios en lo que hacés mejor:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-2">
              <span className="text-primary">🪚</span>
              <span className="text-muted-foreground">Carpintería</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">👶</span>
              <span className="text-muted-foreground">Cuido de niños</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🧱</span>
              <span className="text-muted-foreground">Albañilería</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🚚</span>
              <span className="text-muted-foreground">Transporte</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🔧</span>
              <span className="text-muted-foreground">Plomería</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">💡</span>
              <span className="text-muted-foreground">Electricidad</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">🧹</span>
              <span className="text-muted-foreground">Limpieza</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">…</span>
              <span className="text-muted-foreground">y mucho más!</span>
            </div>
          </div>
          <p className="mt-6 text-pretty text-base text-muted-foreground">
            Las personas cerca de vos podrán encontrarte, ver tu información y contactarte al instante.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {services.map((service, index) => (
            <Card
              key={service.label}
              className={`group cursor-pointer border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-center text-sm font-medium text-foreground">{service.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/ilustraci-n-digital-moderna-que-muestra-a-varias-p.png"
              alt="Trabajadores y profesionales en Encuentrame"
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
