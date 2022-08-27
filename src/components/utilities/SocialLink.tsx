import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  path: string;
}

export const SocialLink = ({ icon, path }: Props) => {
  return (
    <li>
      <a
        href={path}
        className="text-light hover:bg-light hover:text-light-gray"
      >
        {icon}
      </a>
    </li>
  );
};
