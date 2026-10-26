export const experienceCategories = {
  activity: "社群／社團",
  competition: "競賽",
} as const;

export type ExperienceCategory = keyof typeof experienceCategories;

export interface ExperienceItem {
  category: ExperienceCategory;
  name: string;
  href?: string;
  description: string;
  period: string;
}

export const experienceItems = [
  {
    category: "activity",
    name: "AIS3 CLUB 社團幹部訓練",
    description: "參與者",
    period: "2026",
  },
  {
    category: "activity",
    name: "TSC 2026",
    href: "https://www.instagram.com/taiwan_security_club/",
    description: "贊助組",
    period: "2026",
  },
  {
    category: "activity",
    name: "SITCON 2026",
    href: "https://sitcon.org/2026/",
    description: "參與者",
    period: "2026",
  },
  {
    category: "activity",
    name: "東海大學駭客社",
    description: "副社長、教學",
    period: "2026",
  },
  {
    category: "activity",
    name: "COSCUP 2025",
    href: "https://coscup.org/2025/",
    description: "參與者",
    period: "2025",
  },
  {
    category: "activity",
    name: "SITCON 2025",
    href: "https://sitcon.org/2025/",
    description: "參與者",
    period: "2025",
  },
  {
    category: "activity",
    name: "東海大學駭客社",
    description: "社長、教學",
    period: "2025",
  },
  {
    category: "activity",
    name: "SITCON 2024",
    href: "https://sitcon.org/2024/",
    description: "參與者",
    period: "2024",
  },
  {
    category: "activity",
    name: "南山中學資訊培訓團隊",
    description: "成員",
    period: "2021-2024",
  },
  {
    category: "competition",
    name: "My First CTF 2026",
    href: "https://ais3.org/mfctf/",
    description: "參賽者",
    period: "2026",
  },
  {
    category: "competition",
    name: "資安技能金盾獎 初賽",
    href: "https://csc.nics.nat.gov.tw/",
    description: "參賽者",
    period: "2026",
  },
  {
    category: "competition",
    name: "NPSC 2022 初賽",
    description: "參賽者",
    period: "2022",
  },
  {
    category: "competition",
    name: "108 全國科技教育創意實作競賽",
    description: "銅牌",
    period: "2020",
  },
  {
    category: "competition",
    name: "108 中學生生活科技創作競賽",
    description: "優等、創作組精品獎",
    period: "2020",
  },
  {
    category: "competition",
    name: "2020 新北創客季 創意滑車競賽",
    description: "人氣獎第一名、闖關賽第一名、創意造型獎",
    period: "2020",
  },
] satisfies readonly ExperienceItem[];
