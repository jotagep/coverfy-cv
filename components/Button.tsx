type Props = {
  children: React.ReactNode
  href: string
  isLarge?: boolean
}

export default function Button({ children, href, isLarge = false }: Props) {
  return (
    <a
      href={href}
      className={`${
        isLarge ? "text-lg py-4 px-10 uppercase" : "py-3 px-4"
      } text-white bg-secondary rounded-full border border-secondary 
        hover:bg-white hover:text-secondary transition-colors duration-300 ease-in-out`}
    >
      {children}
    </a>
  )
}
