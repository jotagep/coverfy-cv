import { useContext } from "react"
import { ScrollContext } from "context/scrollContext"
import Image from "next/image"

export default function Stores() {
  const scrollInfo = useContext(ScrollContext)

  const showStores = scrollInfo.y >= 230 ? "arrow-show" : ""

  return (
    <div className={`store ${showStores ? "show" : ""} md:hidden`}>
      <div className="flex justify-center bg-white pt-2">
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
      <style jsx>{`
        .store {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1100;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .show {
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
