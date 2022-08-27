import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Wrapper = ({
  children,
  className,
  containerClassName,
}: Props): JSX.Element => {
  return (
    <div className={`h-full w-full ${containerClassName}`}>
      <div className={`mx-auto h-full w-[90vw] max-w-[60rem] ${className}`}>
        {children}
      </div>
    </div>
  );
};
