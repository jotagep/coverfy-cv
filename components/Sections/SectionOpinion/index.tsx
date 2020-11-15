import Image from "next/image"
import { Opinion } from "interfaces"
import { RichText } from "prismic-reactjs"

import Container from "components/Container"
import style from "./style.module.scss"
import Title from "../Title"

type Props = {
  list: Opinion[]
}

export default function SectionOpinion({ list }: Props) {
  return (
    <section className={`${style.section} mt-12`}>
      <Container>
        <Title>Qué opinan nuestros usuarios</Title>
        <ul className="flex flex-wrap w-full">
          {list.map((item, i) => (
            <li
              className={`${
                i + 1 < list.length ? style.border : ""
              } flex items-start w-full md:w-1/2 pb-8 md:pb-0 px-4 lg:px-8 mb-8 md:mb-12 text-primary`}
              key={i}
            >
              <div className={style.avatar}>
                <Image
                  className={`${style.img} rounded-full`}
                  src={item.image.url}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col flex-1 pl-8 md:pl-10">
                <p className="font-light text-sm italic mb-4">
                  {RichText.asText(item.text)}
                </p>
                <div className="flex flex-col md:flex-row">
                  <p className="mb-3 md:mb-0 md:mr-5">{item.name}</p>
                  <ul className="flex">
                    {[...Array(5)].map((_, i) => (
                      <li key={i} className="flex items-center mx-1">
                        <Image
                          src={
                            i + 1 <= item.stars
                              ? "/img/full_star.svg"
                              : "/img/star_empty.svg"
                          }
                          width={16}
                          height={16}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
