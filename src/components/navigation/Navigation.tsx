import { NavItem } from "./NavItem";

interface Props {
  className?: string;
  closeMenu?: () => void;
}

export const Navigation = ({ className, closeMenu = () => {} }: Props) => {
  return (
    <nav>
      <ul className={`${className}`}>
        <NavItem title="About" path="#about" closeMenu={closeMenu} />
        <NavItem title="Work" path="#work" closeMenu={closeMenu} />
        <NavItem title="Contact" path="#contact" closeMenu={closeMenu} />
      </ul>
    </nav>
  );
};
