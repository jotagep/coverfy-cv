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
        @media (min-width: 768px) {
          .wrapper {
            width: 95%;
          }
        }
        @media (min-width: 1232px) {
          .wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
