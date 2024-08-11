import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { twMerge } from "tailwind-merge";

const Navbar = ({
  className,
}: {
  className?: string;
  givenDataAos?: string;
}) => {
  const socials = [
    {
      link: "https://github.com/whizzamend",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://x.com",
      label: "x",
      Icon: SiX,
    },
  ];

  return (
    <nav
      className={twMerge("py-10 flex justify-between items-center", className)}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-600 -rotate-2">
        Nurislom💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
