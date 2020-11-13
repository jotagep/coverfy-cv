type Props = {
  children: React.ReactNode
  className?: string
  [propName: string]: any
}
export default function Component({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <div className={`wrapper mx-4 md:mx-auto ${className}`} {...props}>
      {children}
      <style jsx>{`
        .wrapper {
          max-width: 1200px;
        }
      `}</style>
    </div>
  )
}
