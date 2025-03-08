interface Props {
  size?: number;
  color?: string;
}

function ArrowIcon({ size = 24, color = "#fff" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_27680_1198)">
        <path
          d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_27680_1198">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowIcon;
