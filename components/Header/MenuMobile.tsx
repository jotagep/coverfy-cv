import { Collapse } from "react-collapse"
import Link from "components/Link"

import style from "./style.module.scss"

type Props = {
  isOpen: boolean
  list: { title: string; url: string }[]
}

export default function MenuMobile({ isOpen, list }: Props) {
  return (
    <Collapse isOpened={isOpen} theme={{ collapse: style.collapse }}>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i} className="text-sm text-center">
              <Link
                className="block py-3"
                href={item.url}
                activeClassName="text-white bg-secondary"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#" className="block py-3 text-center text-secondary">
              Entra en tu cuenta <span className={style["link-icon"]} />
            </Link>
          </li>
        </ul>
      </div>
    </Collapse>
  )
}
