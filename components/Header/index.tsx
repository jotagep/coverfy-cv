import { useContext, useState } from "react"
import { ScrollContext } from "context/scrollContext"

import Img from "next/image"
import Link from "components/Link"

import MenuMobile from "./MenuMobile"
import ButtonLink from "./ButtonLink"

import style from "./style.module.scss"

const headerLinks = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Sobre nosotros",
    url: "#",
  },
  {
    title: "Preguntas Frecuentes",
    url: "#",
  },
  {
    title: "Prensa",
    url: "#",
  },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const scrollInfo = useContext(ScrollContext)

  const showShadow = scrollInfo.y > 100
  const showRegister = scrollInfo.y > 250

  const handleMenu = () => {
    setOpenMenu((s) => !s)
  }

  return (
    <>
      <header
        className={`${style.header} ${
          showShadow ? style["header-shadow"] : ""
        }`}
      >
        <nav
          className={`${style.wrapper} flex h-full justify-center md:justify-between md:mx-auto`}
        >
          <button
            onClick={handleMenu}
            className={`${style.menu} ${
              openMenu ? style["menu-close"] : style["menu-open"]
            } focus:outline-none md:hidden`}
          />
          <Link
            href="/"
            aria-label="Ir a página de inicio"
            className={style.logo}
          >
            <Img
              src="/img/logo_coverfy_red.svg"
              alt="logo"
              width="180"
              height="80"
              layout="responsive"
            />
          </Link>
          <ul className="hidden md:flex items-center">
            {headerLinks.map((item, i) => (
              <li
                key={i}
                className="text-sm xxl:text-base ml-5 text-primary hover:text-secondary"
              >
                <Link href={item.url} activeClassName="font-semibold">
                  {item.title}
                </Link>
              </li>
            ))}
            <li className={`${style["last-link"]} text-sm xxl:text-base ml-5`}>
              <ButtonLink
                content="Entra en tu cuenta"
                contentBtn="Registrate gratis"
                showButton={showRegister}
              />
            </li>
          </ul>
        </nav>
      </header>
      <MenuMobile isOpen={openMenu} list={headerLinks} />
    </>
  )
}
