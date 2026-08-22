import { SiReact, SiPython, SiTailwindcss, SiMongodb, SiFastapi, SiPostgresql, SiNodedotjs, SiWireshark, SiJavascript, SiLinux } from 'react-icons/si'
import { Radar, ShieldAlert, ShieldCheck, Globe, Code2 } from 'lucide-react'

export const skills = [
  // Ring 1 (inner) — core/most-used
  { name: "React", icon: SiReact, ring: 1, category: "frontend", learning: false, usedIn: ["CyberPilot AI", "MoonMuse", "Personal SOC Dashboard"] },
  { name: "Python", icon: SiPython, ring: 1, category: "backend", learning: false, usedIn: ["CyberPilot AI", "Port Scanner", "Password Analyzer"] },
  { name: "Tailwind CSS", icon: SiTailwindcss, ring: 1, category: "frontend", learning: false, usedIn: ["CyberPilot AI", "MoonMuse"] },
  { name: "MongoDB", icon: SiMongodb, ring: 1, category: "database", learning: false, usedIn: ["CyberPilot AI", "MoonMuse"] },
  { name: "Network Scanning", icon: Radar, ring: 1, category: "security", learning: false, usedIn: ["Port Scanner", "Ping Sweeper"] },

  // Ring 2 (outer) — supporting / broader
  { name: "FastAPI", icon: SiFastapi, ring: 2, category: "backend", learning: false, usedIn: ["CyberPilot AI"] },
  { name: "Node.js / Express", icon: SiNodedotjs, ring: 2, category: "backend", learning: false, usedIn: ["MoonMuse"] },
  { name: "PostgreSQL", icon: SiPostgresql, ring: 2, category: "database", learning: false, usedIn: ["Personal SOC Dashboard"] },
  { name: "CVE & Threat Intel", icon: ShieldAlert, ring: 2, category: "security", learning: false, usedIn: ["Personal SOC Dashboard"] },
  { name: "SOC Tools", icon: ShieldCheck, ring: 2, category: "security", learning: false, usedIn: ["Personal SOC Dashboard", "CyberPilot AI"] },
  { name: "WHOIS / DNS", icon: Globe, ring: 2, category: "security", learning: false, usedIn: ["Personal SOC Dashboard"] },
  { name: "Wireshark", icon: SiWireshark, ring: 2, category: "security", learning: false, usedIn: ["Personal learning"] },
  { name: "Java", icon: Code2, ring: 2, category: "learning", learning: true, usedIn: [] },
  { name: "Linux / CLI", icon: SiLinux, ring: 2, category: "learning", learning: true, usedIn: [] },
]

export const categoryColors = {
  frontend: "var(--color-lavender)",
  backend: "var(--color-icy-blue)",
  database: "var(--color-icy-blue)",
  security: "var(--color-soft-pink)",
  tools: "var(--color-lavender)",
  learning: "var(--color-muted)",
}