interface Props {
  size?: number;
  color?: string;
}

function ShareIcon({ size = 24, color = "#fff" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_3_4484)">
        <path
          d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_4484">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ShareIcon;
