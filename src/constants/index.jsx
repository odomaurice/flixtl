import { SocialMediaProfiles } from "@/components/SocialMedia";
import { active,
  bootstrap,
  css,
  express,
  git,
  github,
  html,
  javascript,
  next,
  node,
  react,
  redux,
  rest,
  tailwind,
  typescript, ubuntu} from '@/images'

export const navigation = [
  {
    title: "Important",
    links: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Services", href: "/about" },
      { title: "Our work", href: "/process" },
      
      
    ],
   
  },
 
  {
    title: "Company",
    links: [
      { title: "Policy", href: "/about" },
      { title: "Terms and conditions", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];

export const skills = [
  {
    id: "skill-1",
    logo: active,
    title:"Azure AD",
  },
  {
    id: "skill-2",

    logo: bootstrap,
    title:"Bootstrap",
  },
  {
    id: "skill-3",
    logo: css,
    title:"CSS",
  },
  {
    id: "skill-4",
    logo: express,
    title:"ExpressJS",
  },
  {
      id: "skill-5",
      logo: git,
      title:"Git",
    },
    {
      id: "skill-6",
      logo: github,
      title:"Github",
    },
    {
      id: "skill-7",
      logo: html,
      title:"HTML",
    },
    {
      id: "skill-8",
      logo: javascript,
      title:"Javascript",
    },
    {
      id: "skill-9",
      logo: next,
      title:"NextJS",
    },
    {
      id: "skill-10",
      logo: node,
      title:"NodeJS",
    },
    {
      id: "skill-11",
      logo: react,
      title:"ReactJS",
    },
    {
      id: "skill-12",
      logo: redux,
      title:"Redux",
    },
    {
      id: "skill-13",
      logo: rest,
      title:"RestAPI",
    },
    {
      id: "skill-14",
      logo: tailwind,
      title:"TailwindCSS",
    },
    {
      id: "skill-15",
      logo: typescript,
      title:"Typescript",
    },
    {
      id: "skill-16",
      logo: ubuntu,
      title:"Ubuntu Linux",
    },
];
