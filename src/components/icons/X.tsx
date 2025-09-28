import { FC, SVGProps } from "react"

export const X: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_1561_511)">
        <path
          d="M5 4L12.5 11.5M20 19L12.5 11.5M12.5 11.5L5 19M12.5 11.5L20 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
