import { Medio } from "interfaces"
import Image from "next/image"

import { Splider, SpliderSlide } from "components/Slider"
import Container from "components/Container"

type Props = {
  medios: Medio[]
}

const settings = {
  gap: "40px",
  perPage: 5,
  padding: {
    right: "60px",
  },
  arrows: false,
  fixedWidth: "160px",
  fixedHeight: "80px",
  perMove: 1,
  pagination: false,
  lazyload: true,
  breakpoints: {
    640: {
      perPage: 3,
      padding: {
        right: "20px",
      },
      fixedWidth: "130px",
      fixedHeight: "50px",
      gap: "0px",
    },
  },
}

export default function SectionSlider({ medios }: Props) {
  return (
    <section className="xl:mt-8">
      <Container>
        <Splider settings={settings}>
          {medios.map((item, i) => (
            <SpliderSlide key={i}>
              <Image
                src={item.image.url}
                width={160}
                height={72.72}
                quality={100}
              />
            </SpliderSlide>
          ))}
        </Splider>
      </Container>
    </section>
  )
}
