import Button from "components/Button"
import Container from "components/Container"
import Image from "next/image"

import { useCountUp } from "react-countup"

import style from "./style.module.scss"

export default function SectionHero() {
  const { countUp } = useCountUp({ end: 103.539, decimals: 3 })
  return (
    <section className={`${style.section} relative`}>
      <Container
        className={`${style.wrapper} flex justify-center h-full items-center`}
      >
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1
            className={`${style.title} text-center md:text-left text-primary font-semibold`}
          >
            Organiza tus seguros <br />y ahorra dinero
          </h1>
          <Button href="https://webapp.coverfy.com/registro" isLarge>
            Regístrate gratis
          </Button>
          <div className={`${style.numbers} flex`}>
            <div className="mr-12 flex flex-col justify-center text-primary">
              <span className="block text-big md:text-xxl text-center font-normal md:font-light  w-40">
                +{countUp}
              </span>
              <span className="block text-center">usuarios</span>
            </div>
            <div
              className={`flex flex-col justify-center text-primary font-normal md:font-light`}
            >
              <span className="block text-big md:text-xxl text-center">
                4,5
              </span>
              <ul className="flex">
                {[...Array(5)].map((_, i) => (
                  <li className="mr-1" key={i}>
                    <Image
                      src={`/img/${
                        i === 4 ? "half_star.svg" : "full_star.svg"
                      }`}
                      alt="Estrellas"
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="block text-light text-sm text-center font-hairline mb-2">
              También disponible en:
            </span>
            <div className="flex">
              <a
                className="mr-6"
                href="https://itunes.apple.com/es/app/coverfy-tu-app-de-seguros/id1106393667"
              >
                <Image src="/img/appstore.svg" width={120} height={35} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.coverfy.app">
                <Image src="/img/googleplay.svg" width={120} height={35} />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block flex-1" />
      </Container>
    </section>
  )
}
