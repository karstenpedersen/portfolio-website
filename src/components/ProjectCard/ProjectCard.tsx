import { IconLink } from "components/IconLink";
import { ImageBackground } from "components/ImageBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import * as FiIcons from "react-icons/fi";

const contentVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const bgVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 0.3,
  },
};

interface Props {
  title: string;
  tags: string[];
  href: string;
  thumbnail: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export const ProjectCard = ({
  title,
  tags,
  href,
  thumbnail,
  githubUrl,
  websiteUrl,
}: Props) => {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="space-y-3 overflow-hidden"
    >
      <Link href={href}>
        <a className="relative block h-[400px] w-full">
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="image rounded"
            layout="fill"
          />
        </a>
      </Link>
      <div className="space-y-1">
        <h3 className="normal-case">
          <Link href={href}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="space-x-2 text-light-gray">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="after:content-[','] last:after:content-none"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};
