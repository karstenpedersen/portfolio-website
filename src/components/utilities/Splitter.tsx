import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Splitter = ({ children, className }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-14 ${className}`}
    >
      {children}
    </div>
  );
};
