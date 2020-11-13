import { memo } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"

type Props = {
  href: string
  as?: string
  key?: any
  children: React.ReactNode
  className?: string
  activePartial?: boolean
  activeClassName?: string
  [propname: string]: any
}

const addSlash = (x: string) => {
  return !x.startsWith("/") ? `/${x}` : x
}

export default memo(function Link({
  href,
  as,
  children,
  key,
  className = "",
  activePartial = false,
  activeClassName = "",
  ...props
}: Props) {
  const router = useRouter()

  const link = as || href

  const isActive = activePartial
    ? router.pathname.startsWith(link)
    : router.pathname === link

  const customClass = `${className} ${isActive ? activeClassName : ""}`.trim()

  return (
    <NextLink
      {...(key && { key })}
      href={addSlash(href)}
      {...(as && { as: addSlash(as) })}
    >
      <a {...(customClass && { className: customClass })} {...props}>
        {children}
      </a>
    </NextLink>
  )
})
