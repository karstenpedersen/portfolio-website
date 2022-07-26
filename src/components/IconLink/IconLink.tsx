import { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  icon: ReactNode;
  text?: string;
}

export const IconLink = ({ href, className, icon, text }: Props) => {
  return (
    <a
      href={href}
      target={"_blank"}
      rel="noreferrer"
      className={`flex items-center gap-2 transition-colors hover:text-light-gray ${className}`}
    >
      {icon}
      <p>{text}</p>
    </a>
  );
};
