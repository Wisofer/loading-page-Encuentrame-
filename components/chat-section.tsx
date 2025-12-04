"use client"

import Image from "next/image"
import { MessageCircle, Send } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ChatSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-muted/30 py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <div className="mx-auto max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3">
                  <div className="h-10 w-10 rounded-full bg-primary-foreground/20" />
                  <div>
                    <p className="font-medium text-primary-foreground">María García</p>
                    <p className="text-xs text-primary-foreground/70">Electricista certificada</p>
                  </div>
                  <div className="ml-auto h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="space-y-4 p-4">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2">
                      <p className="text-sm text-foreground">
                        ¡Hola! Vi tu perfil y necesito ayuda con la instalación eléctrica.
                      </p>
                      <span className="mt-1 block text-xs text-muted-foreground">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2">
                      <p className="text-sm text-primary-foreground">
                        ¡Hola! Claro, cuéntame más sobre el proyecto. ¿Es residencial o comercial?
                      </p>
                      <span className="mt-1 block text-xs text-primary-foreground/70">10:32 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2">
                      <p className="text-sm text-foreground">
                        Es para mi casa, son 3 habitaciones. ¿Cuándo podrías visitarme?
                      </p>
                      <span className="mt-1 block text-xs text-muted-foreground">10:33 AM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-border p-3">
                  <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    className="flex-1 rounded-full bg-muted px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Comunicación directa
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Conexiones directas, sin intermediarios
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Usá nuestro chat en tiempo real para coordinar trabajos, resolver dudas y concretar servicios sin intermediarios. Directo, transparente y sencillo.
            </p>

            <div className={`mt-8 grid gap-4 sm:grid-cols-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Chat en tiempo real</p>
                  <p className="text-sm text-muted-foreground">Respuestas instantáneas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Estado en línea</p>
                  <p className="text-sm text-muted-foreground">Sabe quién está disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
