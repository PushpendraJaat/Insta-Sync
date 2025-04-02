import * as React from "react"
import { SVGProps } from "react"

const ContactsDualToneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} {...props}>
    <path d="M4 2h32v36H4V2Z" fill="#8BB7F0" />
    <path d="M4 2h32v36H4V2Zm5 1v34h26V3H9Z" fill="#4E7AB5" />
    <path d="M19 21c6.462.462 6.462.462 9 3v3H16c1-4 1-4 3-6Z" fill="#F8FAFE" />
    <path
      d="M20 12c2.625.375 2.625.375 5 1 .625 2.375.625 2.375 1 5l-2 2c-2.625-.375-2.625-.375-5-1-.625-2.375-.625-2.375-1-5l2-2Z"
      fill="#F7FAFE"
    />
  </svg>
)

export default ContactsDualToneIcon
