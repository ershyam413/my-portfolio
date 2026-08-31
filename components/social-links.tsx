import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { socials } from "@/lib/content";

const icons = {
  email: MailIcon,
  whatsapp: WhatsAppIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

type Variant = "icons" | "cards";

export function SocialLinks({
  variant = "icons",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "cards") {
    return (
      <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {socials.map((item) => {
          const Icon = icons[item.id];
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="social-card"
              >
                <span className="social-card-icon">
                  <Icon />
                </span>
                <span>
                  <span className="block text-[11px] tracking-[0.16em] text-[var(--faint)] uppercase">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-[var(--fg)]">
                    {item.id === "email"
                      ? "er.shyam413@gmail.com"
                      : item.id === "phone"
                        ? "+91 84270 45734"
                        : item.id === "whatsapp"
                          ? "Chat on WhatsApp"
                          : item.label}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map((item) => {
        const Icon = icons[item.id];
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              aria-label={item.label}
              title={item.label}
              className="social-icon"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
