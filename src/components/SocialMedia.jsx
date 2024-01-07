import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsMedium,
  BsLinkedin,
} from "react-icons/bs";

import { TbMailUp } from "react-icons/tb";

export const SocialMediaProfiles = [
  // {
  //   title: "Youtube",
  //   href: "https://www.youtube.com/@reactjsBD/",
  //   icon: BsYoutube,
  // },
  { title: "GitHub", href: "https://github.com/odomaurice/", icon: BsGithub },
  {
    title: "Medium",
    href: "https://medium.com/@cyberSultan",
    icon: BsMedium,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/%F0%9F%94%92odo-maurice-b99197198/",
    icon: BsLinkedin,
  },
  { title: "Twitter", href: "https://twitter.com/AlphaOf9ja/", icon: BsTwitter },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
