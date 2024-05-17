import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "@/components/main-header/main-header-background";
import LogoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={LogoImg} alt="a plate with food on it" priority />
          Diarmore Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Diarmore Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
