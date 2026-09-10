import { Mail, Globe, Send } from "lucide-react"
import { DownloadAppButton } from "@/components/shared/DownloadAppButton"

const CONTACT_EMAIL = "contato@explore.tec.br"
const TERMS_HREF = "#"
const PRIVACY_HREF = "#"

/* Selo oficial "Servicos financeiros Asaas" (versao negativa/branca) */
const ASAAS_SEAL_URL =
  "https://baas.asaas.com/selos/Servicos_financeiros_Asaas-Reduzida-Negativo-Branco.svg?id=76c13365-416e-418d-8ad4-a73bdd7cae92"
const ASAAS_SITE_URL = "https://asaas.com"
const ASAAS_SUPPORT_PHONE = "0800 009 0037"
const ASAAS_SUPPORT_PHONE_HREF = "tel:08000090037"
const ASAAS_SUPPORT_EMAIL = "contato@asaas.com.br"

const footerLinks = {
  produto: [
    { label: "Experiências", href: "#conheca" },
    { label: "Conheça a Solê", href: "#sole" },
    { label: "Para prestadores", href: "#parceiros" },
    { label: "Para cidades", href: "#gestores" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Contato", href: `mailto:${CONTACT_EMAIL}` },
    { label: "Imprensa", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: PRIVACY_HREF },
    { label: "Termos de uso", href: TERMS_HREF },
  ],
}

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
]

const disclosureLinkClass =
  "text-neutral-200 underline underline-offset-2 hover:text-white transition-colors"

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
              O marketplace de experiências da sua cidade — conectando turistas a prestadores locais, com a Solê para achar o passeio perfeito.
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

        {/* Divulgação de serviços financeiros — Asaas */}
        <div className="mt-12 flex flex-wrap items-start gap-4 border-t border-white/10 pt-6 text-xs leading-relaxed text-neutral-400">
          <a
            href={ASAAS_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Serviços financeiros Asaas (abre em nova aba)"
            className="shrink-0"
          >
            <img
              src={ASAAS_SEAL_URL}
              width={112}
              height={41}
              alt="Serviços financeiros Asaas"
              loading="lazy"
              decoding="async"
              className="block opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="min-w-0 flex-1 basis-[17.5rem] space-y-1">
            <p>
              Os serviços financeiros e de pagamentos (conta, Pix, transferências e saques)
              são prestados por{" "}
              <strong className="font-medium text-neutral-200">
                Asaas Gestão Financeira Instituição de Pagamento S.A.
              </strong>
              , instituição de pagamento autorizada a funcionar pelo Banco Central do Brasil.
              A Explore atua exclusivamente como integradora tecnológica, não sendo
              instituição financeira ou de pagamento. Os detalhes estão nos{" "}
              <a href={TERMS_HREF} className={disclosureLinkClass}>
                Termos de uso
              </a>
              .
            </p>
            <p>
              <strong className="font-medium text-neutral-200">Contato e suporte:</strong>{" "}
              dúvidas sobre a plataforma pelo e-mail{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={disclosureLinkClass}>
                {CONTACT_EMAIL}
              </a>
              . O suporte de operações financeiras (conta, Pix, saque) é prestado pelo
              Asaas:{" "}
              <a href={ASAAS_SUPPORT_PHONE_HREF} className={disclosureLinkClass}>
                {ASAAS_SUPPORT_PHONE}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${ASAAS_SUPPORT_EMAIL}`} className={disclosureLinkClass}>
                {ASAAS_SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-400 text-sm text-center sm:text-left">
            <p>© 2026 EXPLORE INOVA SIMPLES (I.S.)</p>
            <p className="text-xs mt-1">
              Todos os direitos reservados · Feito com carinho para todo turista
            </p>
          </div>
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
