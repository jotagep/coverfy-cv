import Container from "components/Container"
import Link from "components/Link"
import Image from "next/image"

const empresa = [
  "Sobre nosotros",
  "Preguntas frecuentes",
  "Corredurías y Agencias",
  "Trabaja con nosotros",
  "Prensa",
  "Blog",
]

const legal = [
  "Condiciones Generales de Uso",
  "Política de Privacidad y Cookies",
  "Aviso Legal",
]

export default function Footer() {
  return (
    <footer className="bg-primary py-12 footer">
      <Container className="flex flex-wrap text-sm text-gray">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h5 className="mb-4 text-lg text-white">Coverfy</h5>
          <p>
            Coverfy Insurance Services,
            <br />
            Correduría de Seguros, S.L.
          </p>
          <p>Nº Registro DGSFP: J-3360</p>
          <a className="block text-secondary" href="mailto:hola@coverfy.com">
            hola@coverfy.com
          </a>
          <ul className="flex my-8">
            <li className="mr-8">
              <a href="https://www.facebook.com/coverfy/">
                <span className="icon fb" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/coverfyapp">
                <span className="icon tw" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h5 className="mb-4 text-lg text-white">Empresa</h5>
          <ul>
            {empresa.map((item, i) => (
              <li key={i} className="mb-2 hover:text-white">
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h5 className="mb-4 text-lg text-white">Legal</h5>
          <ul className="mb-5">
            {legal.map((item, i) => (
              <li key={i} className="mb-2 hover:text-white">
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
          <a href="http://www.elmundofinanciero.com/noticia/67158/empresas/coverfy-unico-finalista-espanol-en-la-categoria-insurtech.html">
            <Image
              src="/png/benzinga_100px.png"
              alt="benzinga-awards"
              title="Coverfy finalista de los premios Benzinga"
              width={77}
              height={100}
            />
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <span className="block mb-4">Empresa financiada por:</span>
          <a
            className="block mb-4"
            href="http://www.cdti.es/index.asp?MP=100&amp;MS=894&amp;MN=3"
          >
            <Image src="/png/logo-innvierte.png" width={160} height={34} />
          </a>
          <a className="block" href="http://www.enisa.es/">
            <Image
              src="/png/enisa_white_171px.png"
              width={96}
              height={73}
              alt="enisa"
            />
          </a>
        </div>
      </Container>
      <style jsx>{`
        .footer p {
          margin-bottom: 16px;
        }
        .icon {
          width: 24px;
          height: 24px;
          background-size: contain;
          background-position: center left;
          display: block;
        }
        .fb {
          background-image: url(/img/fb.svg);
        }
        .tw {
          background-image: url(/img/tw.svg);
        }
      `}</style>
    </footer>
  )
}
