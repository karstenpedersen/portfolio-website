import Link from "next/link";

interface Props {
  mobile?: boolean;
  onClick?: () => void;
}

export const Logo = ({ mobile, onClick }: Props) => {
  return (
    <Link href="/">
      <a
        className="font-heading text-lg font-semibold lowercase"
        onClick={() => {
          if (mobile && onClick) onClick();
        }}
      >
        <div className="flex items-center gap-2">
          <p>Karsten</p>
          <span className="h-[5px] w-[25px] rounded-full bg-[#636363]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-[5px] w-[10px] rounded-full bg-[#636363]" />
          <p>Pedersen</p>
        </div>
      </a>
    </Link>
  );
};
