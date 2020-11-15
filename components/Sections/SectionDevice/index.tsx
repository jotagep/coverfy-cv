import style from "./style.module.scss"

export default function SectionDevice() {
  return (
    <section className={`${style.section} hidden md:block`}>
      <div className="w-full h-full relative">
        <img className={`${style.image} ml-auto sticky`} src="/png/01.png" />
      </div>
    </section>
  )
}
