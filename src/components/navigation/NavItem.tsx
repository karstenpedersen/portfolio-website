import { useRouter } from "next/router";

interface Props {
  title: string;
  path: string;
  closeMenu?: () => void;
}

export const NavItem = ({ title, path, closeMenu }: Props) => {
  const router = useRouter();

  return (
    <li>
      <a
        href={path}
        onClick={() => {
          if (closeMenu) closeMenu();
        }}
        className={`hover:bg-light hover:text-dark ${
          router.asPath === path && "text-light-gray"
        }`}
      >
        {title}
      </a>
    </li>
  );
};
