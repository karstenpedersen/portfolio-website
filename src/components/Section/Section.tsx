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
      className={`min-h-screen py-[var(--header-height)] ${className}`}
    >
      {children}
    </section>
  );
};
