"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function CtaSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden bg-primary py-12 sm:py-16 md:py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-balance text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Descarga la app y empieza hoy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base sm:text-lg text-primary-foreground/80">
          Únete a miles de trabajadores, profesionales y empleadores que ya están conectando a través de Encuentrame. Tu comunidad, más conectada. Tu trabajo, más visible. Tu vida, más simple.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="default"
            variant="secondary"
            className="group gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-5 py-4 h-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.cowib.ni&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Image
                  src="/assets/images/playstore-svgrepo-com.svg"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-70 mb-0.5">Disponible en</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </Button>
          <Button
            size="default"
            variant="secondary"
            className="group gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 opacity-60 cursor-not-allowed px-5 py-4 h-auto rounded-lg shadow-md"
            disabled
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Image
                  src="/assets/images/app-store-svgrepo-com.svg"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-70 mb-0.5">Próximamente</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <span>100% seguro</span>
        </div>
      </div>
    </section>
  )
}
