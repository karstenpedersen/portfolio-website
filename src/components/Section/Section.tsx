import { ReactNode } from "react";

interface Props {
  id: string;
  className?: string;
  children?: ReactNode;
}

export const Section = ({ id, className, children }: Props) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen py-14 xl:py-8 ${className}`}
    >
      {children}
    </section>
  );
};
