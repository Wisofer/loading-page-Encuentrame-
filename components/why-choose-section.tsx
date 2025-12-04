"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Shield, Megaphone, MessageSquare, Zap, Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const features = [
  {
    icon: MapPin,
    title: "Búsqueda de empleos y servicios locales",
    description: "Encontrá trabajadores y oportunidades cerca de vos, en tu comunidad.",
  },
  {
    icon: Shield,
    title: "Perfiles de profesionales y oficios",
    description: "Accedé a perfiles completos de trabajadores y sus especialidades.",
  },
  {
    icon: Megaphone,
    title: "Publicación de trabajos y ofertas",
    description: "Publicá tus vacantes y ofertas de trabajo de forma rápida y sencilla.",
  },
  {
    icon: MessageSquare,
    title: "Chat integrado entre usuarios",
    description: "Comunicate directamente con trabajadores y empleadores sin intermediarios.",
  },
  {
    icon: Zap,
    title: "Conexiones claras, rápidas y 100% directas",
    description: "Encontrá lo que buscás en minutos, sin complicaciones ni rodeos.",
  },
]

export function WhyChooseSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section 
      id="caracteristicas" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-background py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Nuestras ventajas
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            ¿Qué hace única a Encuentrame?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Encuentrame es el puente que une necesidades con soluciones, personas con oportunidades y talento con quienes lo están buscando.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-base text-muted-foreground">
            <span className="font-medium text-foreground">Tu comunidad, más conectada.</span>
            <span className="font-medium text-foreground">Tu trabajo, más visible.</span>
            <span className="font-medium text-foreground">Tu vida, más simple.</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/ilustraci-n-art-stica-que-muestra-un-gran-mapa-urb.png"
              alt="Mapa de conexiones en Encuentrame"
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
