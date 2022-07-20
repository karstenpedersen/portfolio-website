import { Wrapper } from "components/common/layouts/Wrapper";
import { Socials } from "components/common/Socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-dark py-10 text-light">
      <Wrapper className="relative">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <a className="text-5xl font-semibold uppercase">Karsten Pedersen</a>
          </Link>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:ml-5 hover:text-light-gray">
                contactkarsten@gmail.com
              </a>
            </li>
          </ul>

          <Socials className="flex gap-4 text-2xl" />
        </div>
      </Wrapper>
    </footer>
  );
};

/*
<div className="flex items-center gap-8">
          <Logo />
          <Socials className="flex gap-4 text-2xl" />
        </div>
        <hr />
        <p>Copyright @ Karsten Pedersen</p>
*/

/*

*/
