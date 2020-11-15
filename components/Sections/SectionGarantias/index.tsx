import Image from "next/image"
import { Garantia } from "interfaces"
import { RichText } from "prismic-reactjs"

import Container from "components/Container"
import Title from "../Title"

type Props = {
  list: Garantia[]
}

export default function SectionGarantias({ list }: Props) {
  return (
    <section className="mt-12">
      <Container>
        <Title>Máximas garantías</Title>
        <ul className="flex flex-wrap w-full">
          {list.map((item, i) => (
            <li
              className="flex flex-col items-center w-full md:w-1/4 px-3 mb-8 md:mb-0 text-primary"
              key={i}
            >
              <Image
                src={item.icon.url}
                width={item.icon.dimensions.width}
                height={item.icon.dimensions.height}
              />
              <h5 className="mt-8 mb-5 text-lg text-center">{item.title}</h5>
              <p className="text-center font-hairline">
                {RichText.asText(item.text)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
