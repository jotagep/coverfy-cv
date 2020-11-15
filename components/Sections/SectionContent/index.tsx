import Container from "components/Container"
import style from "./style.module.scss"

export type ItemList = {
  title?: string
  text: string
}

type Props = {
  className?: string
  title: string
  list: ItemList[]
  isLeft?: boolean
  image?: string
  imageOnMobile?: boolean
  hasClipBg?: boolean
  inversedClip?: boolean
}

export default function SectionContent({
  className = "",
  title,
  list,
  isLeft = false,
  image = "",
  hasClipBg = false,
  inversedClip = false,
  imageOnMobile = false,
}: Props) {
  const clipPathBg = hasClipBg
    ? `${style.top} ${style.bottom}  bg-graylight ${
        inversedClip ? style.inversed : ""
      }`
    : ""
  return (
    <section
      className={`${style.section} ${className} ${clipPathBg} pt-8 pb-5 md:py-0 relative`}
    >
      <Container className="h-full flex flex-col md:flex-row items-center md:px-12">
        <div
          className={`w-full md:w-1/2 text-center md:text-left z-20 order-2 ${
            isLeft ? "" : "md:order-none"
          }`}
        >
          <h3
            className="text-xl md:text-xxl font-semibold text-primary mb-5 md:mb-8"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <ul className="md:list-disc md:pl-5 text-primary">
            {list.map((item, i) => (
              <li key={i}>
                {item.title && (
                  <p className="font-normal text-base md:text-xl mb-2">
                    {item.title}
                  </p>
                )}
                <p
                  className=" font-light md:font-hairline text-base md:text-xl mb-4"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="z-20 md:h-full w-full md:w-1/2 mb-8 md:mb-0 order-1">
          {image && (
            <img
              className={`${style.img} mx-auto md:mx-0 ${
                isLeft ? "md:mr-auto" : "md:ml-auto"
              } ${imageOnMobile ? "md:hidden" : ""} md:h-full w-auto`}
              src={image}
            />
          )}
        </div>
      </Container>
    </section>
  )
}
