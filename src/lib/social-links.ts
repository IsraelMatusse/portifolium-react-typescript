import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/IsraelMatusse", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/israel-matusse-0828a3239/",
    icon: FaLinkedin,
  },
  { name: "Twitter", href: "https://twitter.com/Israel_matusse", icon: FaTwitter },
] as const

export const CONTACT_EMAIL = "dev.matusse@gmail.com"
