export default function SectionHalf() {
  return (
    <section className="section block md:hidden overflow-hidden pt-5 bg-graylight">
      <div className="wrapper w-full mx-auto">
        <img src="/png/01.png" alt="device with app" />
      </div>
      <style jsx>{`
        .section {
          height: 225px;
        }
        .wrapper {
          width: 50%;
          max-width: 180px;
        }
      `}</style>
    </section>
  )
}
