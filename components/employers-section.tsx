"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, FileText, BarChart3 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const features = [
  {
    icon: FileText,
    title: "Publica vacantes",
    description: "Crea ofertas de trabajo detalladas y alcanza a candidatos calificados en tu área.",
  },
  {
    icon: Users,
    title: "Encuentra talento",
    description: "Accede a una base de trabajadores y profesionales listos para unirse a tu equipo.",
  },
  {
    icon: BarChart3,
    title: "Gestiona postulaciones",
    description: "Publicá vacantes, encontrá talento y gestioná postulaciones desde un solo lugar.",
  },
]

const benefits = [
  "Conexión directa con trabajadores locales",
  "Perfiles verificados y recomendaciones",
  "Sin intermediarios ni comisiones",
  "Chat integrado para comunicación rápida",
]

export function EmployersSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section 
      id="empleadores" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-background py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Para empresas
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Para empresas y empleadores
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Publicá vacantes, encontrá talento y gestioná postulaciones desde un solo lugar. Rápido, ordenado y sin complicaciones.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`grid gap-4 sm:grid-cols-1 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="mt-4 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/escena-moderna-mostrando-a-dos-personas---un-emple.png"
                alt="Empleadores usando Encuentrame"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
