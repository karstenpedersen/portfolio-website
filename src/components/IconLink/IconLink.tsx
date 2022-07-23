import { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  icon: ReactNode;
}

export const IconLink = ({ href, className, icon }: Props) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer" className={className}>
      {icon}
    </a>
  );
};
