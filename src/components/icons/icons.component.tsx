import * as React from "react";
import type { IconPropsType } from "@/types";

export const LogoIcon: React.FC<IconPropsType> = ({ ...delegatedProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      {...delegatedProps}
    >
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M22.827 15.626a1.155 1.155 0 1 1 .001-2.308 1.155 1.155 0 0 1-.001 2.308m-2.279 3.84a1.156 1.156 0 0 1 0-2.31 1.156 1.156 0 0 1 0 2.31m-.784 4.746h-7.526a1 1 0 0 1 0-2h7.526a1 1 0 0 1 0 2m-9.48-5.902a1.156 1.156 0 1 1 1.155 1.156 1.156 1.156 0 0 1-1.155-1.156M9.16 15.626a1.155 1.155 0 1 1 0-2.308 1.155 1.155 0 0 1 0 2.308m4.557-2.31a1.155 1.155 0 1 1 0 2.311 1.155 1.155 0 0 1 0-2.31m2.276 3.84a1.156 1.156 0 0 1 0 2.31 1.156 1.156 0 0 1 0-2.31m2.277-3.84a1.155 1.155 0 1 1-.001 2.311 1.155 1.155 0 0 1 0-2.31m3.369-4.77h-4.447v-.185a3.596 3.596 0 0 0-3.578-3.538H12.27a.67.67 0 0 1-.668-.66 1 1 0 0 0-2 .019 2.67 2.67 0 0 0 2.657 2.641h1.335c.809-.02 1.586.696 1.598 1.552v.171h-4.83c-4.4 0-7.028 2.579-7.028 6.898v6.497c-.007 2.084.618 3.817 1.808 5.01 1.224 1.229 3.024 1.877 5.208 1.877h11.289c4.4 0 7.028-2.574 7.028-6.884v-6.4c0-4.382-2.628-6.998-7.028-6.998"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1="5.5"
          x2="32.5"
          y1="7"
          y2="38.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4ca6ff" />
          <stop offset="1" stopColor="#f4dc73" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const StarIcon1: React.FC<IconPropsType> = ({ ...delegatedProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      fill="none"
      {...delegatedProps}
    >
      <g clipPath="url(#a)">
        <mask id="b" width="74" height="74" x="0" y="0">
          <path fill="#fff" d="M74 0H0v74h74z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#f4dc73"
            d="M37 74c-1.071-35.053-1.947-35.923-37-37 35.053-1.071 35.923-1.947 37-37 1.071 35.053 1.947 35.923 37 37-35.053 1.077-35.923 1.936-37 37"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h74v74H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const StarIcon2: React.FC<IconPropsType> = ({ ...delegatedProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      {...delegatedProps}
    >
      <g clipPath="url(#a)">
        <mask
          id="b"
          width="32"
          height="32"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M32 0H0v32h32z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#d64d5b"
            fillRule="evenodd"
            d="M17.143 0h-2.286v13.24L5.494 3.879 3.878 5.494l9.363 9.363H0v2.286h13.24l-9.362 9.363 1.616 1.616 9.363-9.363V32h2.286V18.759l9.363 9.363 1.616-1.616-9.363-9.363H32v-2.286H18.759l9.363-9.363-1.616-1.616-9.363 9.363z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CompletedIcon: React.FC<IconPropsType> = ({
  ...delegatedProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      {...delegatedProps}
    >
      <g clipPath="url(#a)">
        <path
          fill="#121212"
          d="M0 32C0 14.327 14.327 0 32 0s32 14.327 32 32-14.327 32-32 32S0 49.673 0 32"
        />
        <path
          fill="#4dd67b"
          fillRule="evenodd"
          d="M45.45 26.01 29.895 41.567a2.51 2.51 0 0 1-1.785.741c-.65 0-1.294-.245-1.79-.74l-7.777-7.778a2.527 2.527 0 0 1 3.57-3.574l5.997 5.992 13.766-13.77a2.527 2.527 0 1 1 3.574 3.574M32 0C14.356 0 0 14.356 0 32c0 17.647 14.356 32 32 32s32-14.353 32-32C64 14.356 49.644 0 32 0"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 32C0 14.327 14.327 0 32 0s32 14.327 32 32-14.327 32-32 32S0 49.673 0 32"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PersonalBestIcon: React.FC<IconPropsType> = ({
  ...delegatedProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="18"
      fill="none"
      {...delegatedProps}
    >
      <path
        fill="#f4dc73"
        d="M19.406 2.25c.457 0 .844.387.844.844v1.969c0 1.265-.809 2.566-2.18 3.55-1.125.809-2.46 1.301-3.867 1.477-1.125 1.828-2.39 2.566-2.39 2.566v2.531H13.5c1.23 0 2.25.739 2.25 1.97v.421c0 .246-.21.422-.422.422H4.922a.406.406 0 0 1-.422-.422v-.422c0-1.23.984-1.968 2.25-1.968h1.688v-2.532s-1.301-.738-2.426-2.566c-1.407-.176-2.742-.668-3.867-1.477C.773 7.63 0 6.328 0 5.063v-1.97c0-.456.352-.843.844-.843H4.5V.844C4.5.387 4.852 0 5.344 0h9.562c.457 0 .844.387.844.844V2.25zM3.48 6.785c.422.317.915.563 1.477.774A12.7 12.7 0 0 1 4.5 4.5H2.25v.563c0 .421.352 1.125 1.23 1.722M18 5.062V4.5h-2.285a12.7 12.7 0 0 1-.457 3.059c.562-.211 1.055-.457 1.476-.774C17.367 6.363 18 5.66 18 5.062"
      />
    </svg>
  );
};

export const PartyIcon: React.FC<IconPropsType> = ({ ...delegatedProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      {...delegatedProps}
    >
      <path
        stroke="#f4dc73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M29.579 58.003c2.938 2.744 11.607-1.77 19.365-10.08 7.755-8.309 11.663-17.267 8.725-20.01s-11.611 1.77-19.366 10.08c-7.758 8.309-11.663 17.267-8.724 20.01"
        clipRule="evenodd"
      />
      <path
        stroke="#f4dc73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M10.696 22.917h.078m8.927 34.19h.078m38.397-28.539 11.712 36.778c.545 1.719-1.019 3.367-2.767 2.91l-36.444-9.591"
      />
      <path
        stroke="#f4dc73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M51.21 64.064c2.414-1.739 4.924-3.99 7.337-6.561 2.54-2.738 4.664-5.537 6.273-8.141m-43.33-2.425s-6.17-.477-11.49 5.27"
      />
      <path
        stroke="#f4dc73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M31.908 19.9a3.952 3.952 0 1 1-7.904.004 3.952 3.952 0 0 1 7.904-.003"
        clipRule="evenodd"
      />
      <path
        stroke="#f4dc73"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M42.438 42.269s-10.82-11.163-27.392-6.444M46.17 11.667s-6.266 8.578.674 18.892"
      />
    </svg>
  );
};
