import Image from "next/image"
import { Users, Briefcase, Sparkles, Mail, FileText, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
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
            <p className="mt-4 max-w-sm text-muted-foreground">
              La App que conecta trabajadores, profesionales, empleadores y comunidades locales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Enlaces</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#trabajadores"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users className="h-4 w-4" />
                  Trabajadores
                </a>
              </li>
              <li>
                <a
                  href="#empleadores"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Briefcase className="h-4 w-4" />
                  Empleadores
                </a>
              </li>
              <li>
                <a
                  href="#caracteristicas"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Sparkles className="h-4 w-4" />
                  Características
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <FileText className="h-4 w-4" />
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Shield className="h-4 w-4" />
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Encuentrame. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center sm:text-right">
              POWERED BY{" "}
              <a
                href="https://www.cowib.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline transition-colors"
              >
                COWIB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
