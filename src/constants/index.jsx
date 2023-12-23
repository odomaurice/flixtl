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
    title: "Work",
    links: [
      { title: "Alpha Fatloss", href: "https://odomaurice.github.io/Alpha-energy/index.html" },
      { title: "TechUni", href: "https://techuni.onrender.com/" },
      { title: "CyberPatron React", href: "https://cyberpatron.netlify.app/" },
      { title: "CyberPatron Next", href: "https://cyberpatronnetwork.netlify.app/" },
      { title: "portfolio website", href: "/work/my_portfolio" },
      { title: "LocumDoc", href: " https://locumdoc.onrender.com/" },
      { title: "Password generator", href: "https://dancing-sprinkles-588ac2.netlify.app/" },
      { title: "Weather app", href: "https://fancy-kangaroo-b088ae.netlify.app/" },
      // {
      //   title: (
      //     <>
      //       See all <span aria-hidden="true">&rarr;</span>
      //     </>
      //   ),
      //   href: "/work",
      // },
    ],
   
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
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
    title:"Active directory",
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
