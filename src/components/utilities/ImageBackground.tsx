import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  image: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const ImageBackground = ({
  image,
  children,
  className,
  containerClassName,
}: Props) => {
  return (
    <div
      className={`relative h-screen w-full overflow-hidden ${containerClassName}`}
    >
      <Image
        src={image}
        alt="image"
        className="image overflow-hidden"
        layout="fill"
      />
      <div className={`absolute h-full w-full ${className}`}>{children}</div>
    </div>
  );
};
