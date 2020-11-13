import React, { useContext } from "react"
import { ScrollContext } from "context/scrollContext"

export default function ArrowScroll() {
  const scrollInfo = useContext(ScrollContext)

  const showBtn = scrollInfo.y >= 100 ? "arrow-show" : ""

  const handleScrollTop = (e: any) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      aria-label="Flecha al inicio"
      className={`arrow ${showBtn} bg-primary rounded-full opacity-50 hover:opacity-100 
        transition-opacity duration-300 ease-in-out fixed focus:outline-none`}
      onClick={handleScrollTop}
    >
      <style jsx>{`
        .arrow {
          display: none;
          bottom: 60px;
          right: 20px;
          z-index: 1002;
          width: 40px;
          height: 40px;
          background-size: 20px auto;
          background-position-y: center;
          background-position-x: center;
          background-repeat: no-repeat;
          background-image: url(/img/gototop.svg);
        }
        .arrow-show {
          display: block;
        }
      `}</style>
    </button>
  )
}
