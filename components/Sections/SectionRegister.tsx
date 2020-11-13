import Button from "components/Button"
import Container from "components/Container"

export default function SectionRegister() {
  return (
    <section className="mt-12 relative section hidden md:block">
      <Container className="flex justify-center w-full h-full items-center">
        <div className="flex flex-col items-center z-10">
          <span className="text-big text-white mb-8 font-light">
            Empieza gratis en 3 minutos
          </span>
          <Button href="https://webapp.coverfy.com/registro" isLarge>
            Regístrate gratis
          </Button>
          <span className="text-xl text-white font-light mt-10">
            ¿Dudas? Consulta nuestras{" "}
            <a className="text-secondary font-normal" href="#">
              Preguntas frecuentes.
            </a>
          </span>
        </div>
      </Container>
      <style jsx>{`
        .section {
          width: 100%;
          height: 600px;
          background-size: cover;
          background-position-y: top;
          background-position-x: center;
          background-repeat: no-repeat;
          background-image: url(/jpg/webapp_available.jpg);
        }
        .section::before {
          position: absolute;
          top: 0;
          right: auto;
          bottom: auto;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          background-color: rgba(0, 0, 0, 0.2);
        }
        .text-big {
          font-size: 30px;
          line-height: 36px;
        }
      `}</style>
    </section>
  )
}
