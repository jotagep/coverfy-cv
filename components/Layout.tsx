import { useMemo } from "react"
import { ScrollContext, ScrollType } from "context/scrollContext"
import useScrollY from "hooks/useScrollY"

import Header from "components/Header"
import Footer from "components/Footer"
import Copyright from "./Copyright"
import Arrow from "components/Arrow"
import Stores from "./Stores"

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <Copyright />
      <Arrow />
      <Stores />
    </div>
  )
}

export default function Layout(props: any) {
  const scrollY: ScrollType = useScrollY()
  const LayoutMemo = useMemo(() => <AppLayout {...props} />, [props])

  return (
    <ScrollContext.Provider value={scrollY}>
      {LayoutMemo}
    </ScrollContext.Provider>
  )
}
