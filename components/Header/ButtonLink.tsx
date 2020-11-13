import Button from "components/Button"
import Link from "components/Link"

import style from "./style.module.scss"

type Props = {
  content: string
  contentBtn: string
  showButton?: boolean
}

export default function Component({
  content,
  contentBtn,
  showButton = false,
}: Props) {
  return showButton ? (
    <Button href="https://webapp.coverfy.com/registro">{contentBtn}</Button>
  ) : (
    <Link href="#" className="text-secondary" activeClassName="font-semibold">
      {content} <span className={style["link-icon"]} />
    </Link>
  )
}
