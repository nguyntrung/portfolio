import { Mail, Globe, Instagram, Linkedin, Facebook, Github } from "lucide-react"

export const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/nguyen.trung.587064/", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "https://instagram.com/ntrung203/", label: "Instagram", color: "#E1306C" },
  { icon: Linkedin, href: "https://linkedin.com/in/nguyentrung203", label: "LinkedIn", color: "#0077B5" },
  { icon: Github, href: "https://github.com/nguyntrung", label: "GitHub" },
]

export const contactLinks = [
  {
    href: "https://nguyentrung.com",
    label: "nguyentrung.com",
    icon: Globe,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "mailto:nguyentrung060503@gmail.com",
    label: "nguyentrung060503@gmail.com",
    icon: Mail,
  }
]
