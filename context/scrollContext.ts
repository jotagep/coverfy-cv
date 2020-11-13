import { createContext } from "react"

export type DirectionType = "up" | "down" | "none"

export type ScrollType = {
  y: number
  direction: DirectionType
}

export const ScrollContext = createContext<ScrollType>({
  y: 0,
  direction: "none",
})
