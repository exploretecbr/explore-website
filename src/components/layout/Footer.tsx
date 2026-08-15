import { Mail, Globe, Send } from "lucide-react"
import { DownloadAppButton } from "@/components/shared/DownloadAppButton"

const footerLinks = {
  produto: [
    { label: "Experiências", href: "#conheca" },
    { label: "Conheça a Solê", href: "#sole" },
    { label: "Para prestadores", href: "#parceiros" },
    { label: "Para cidades", href: "#gestores" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Contato", href: "mailto:contato@explore.tec.br" },
    { label: "Imprensa", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
  ],
}

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight text-white mb-6 block">
              Explore
            </span>
            <p className="text-neutral-400 text-base leading-relaxed mb-16 max-w-sm">
              O marketplace de experiências do Rio Grande do Norte — conectando turistas a prestadores locais, com a Solê para achar o passeio perfeito.
            </p>
            <div className="mt-10">
              <DownloadAppButton />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              Produto
            </h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 Explore · Feito com carinho no Rio Grande do Norte
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
