import Link from "next/link";
import Image from "next/image";

import LogoImg from "@images/logos/WhiteLogo.png";

interface LinkItem {
  href: string;
  title: string;
}

const LinkItem = ({ href, title }: LinkItem) => (
  <>
    <Link href={href} passHref>
      <h2 className="nav-item">{title}</h2>
    </Link>
    <style jsx>
      {`
        .nav-item {
          color: white;
          font-size: 37px;
          font-family: Arial;
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export const Header = () => (
  <>
    <div className="header">
      <div className="header-item">
        <LinkItem href="shop" title="SHOP" />
        <LinkItem href="faq" title="FAQ" />
      </div>
      <div id="logo" className="header-item">
        <Link href="/" passHref>
          <Image alt="Logo" src={LogoImg} priority />
        </Link>
      </div>
      <div className="header-item">
        <LinkItem href="safety" title="SAFETY" />
        <LinkItem href="contact" title="CONTACT" />
      </div>
    </div>

    <style jsx>
      {`
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0e0e0e;
          padding: 20px;
          height: 12.5vh;
        }

        .header-item {
          display: flex;
          width: 500px;
          justify-content: space-around;
        }

        #logo {
          height: 90px;
          width: 90px;
        }
      `}
    </style>
  </>
);
