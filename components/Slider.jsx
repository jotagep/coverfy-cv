/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

let Splide = ({ children }) => <ul>{children}</ul>
let SplideSlide = ({ children }) => <li>{children}</li>

if (typeof window !== "undefined") {
  require("@splidejs/splide/dist/css/themes/splide-default.min.css")
  Splide = require("@splidejs/react-splide").Splide
  SplideSlide = require("@splidejs/react-splide").SplideSlide
}

export const Splider = ({ settings = {}, children, ...props }) => (
  <Splide options={settings} {...props}>
    {children}
  </Splide>
)

export const SpliderSlide = ({ children, ...props }) => (
  <SplideSlide {...props}>{children}</SplideSlide>
)
