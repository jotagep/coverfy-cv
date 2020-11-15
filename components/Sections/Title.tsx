type Props = {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return (
    <h4 className="title text-center relative text-primary md:text-gray">
      {children}
      <style jsx>{`
        .title {
          font-size: 30px;
          margin-bottom: 50px;
        }

        @media (min-width: 768px) {
          .title::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 30%;
            height: 1px;
            background-color: #ddd;
          }
          .title::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            width: 30%;
            height: 1px;
            background-color: #ddd;
          }
        }
      `}</style>
    </h4>
  )
}
