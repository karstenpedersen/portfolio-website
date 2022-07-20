import * as FiIcons from "react-icons/fi";
import { SocialLink } from "../SocialLink";

interface Props {
  className?: string;
}

export const Socials = ({ className }: Props) => {
  return (
    <ul className={className}>
      <SocialLink icon={<FiIcons.FiGithub />} path="" />
      <SocialLink icon={<FiIcons.FiLinkedin />} path="" />
    </ul>
  );
};
