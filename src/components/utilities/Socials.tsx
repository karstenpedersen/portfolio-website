import * as FiIcons from "react-icons/fi";
import { IconLink } from "./IconLink";

interface Props {
  className?: string;
}

export const Socials = ({ className }: Props) => {
  return (
    <ul className={className}>
      <IconLink
        href="https://github.com/karstenpedersen"
        icon={<FiIcons.FiGithub />}
      />
      <IconLink
        href="https://www.linkedin.com/in/karsten-pedersen-864418246/"
        icon={<FiIcons.FiLinkedin />}
      />
      <IconLink
        href="mailto:karstenfp.all@gmail.com"
        icon={<FiIcons.FiMail />}
      />
    </ul>
  );
};
