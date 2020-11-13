import { useEffect, useState } from "react"
import { ScrollType, DirectionType } from "context/scrollContext"

const useScrollY = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollType>({
    y: 0,
    direction: "none",
  })

  useEffect(() => {
    let lastKnownScrollPosition = 0
    let directionKnown: DirectionType = "none"
    let ticking = false

    const handleScroll = () => {
      directionKnown = lastKnownScrollPosition <= window.scrollY ? "down" : "up"
      lastKnownScrollPosition = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(function () {
          setScrollPosition({
            y: lastKnownScrollPosition,
            direction: directionKnown,
          })
          ticking = false
        })

        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}
export default useScrollY
