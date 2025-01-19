import { FC } from "react";

interface IconProps {
  color?: string;
}

export const SpeedIcon: FC<IconProps> = ({ color = "red" }) => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={color}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-recharging"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /><path d="M3.186 10.209a9 9 0 0 0 0 3.508" /><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /><path d="M10.209 20.814a9 9 0 0 0 3.5 0" /><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /><path d="M20.814 13.791a9 9 0 0 0 0 -3.508" /><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" /><path d="M12 8l-2 4h4l-2 4" /><path d="M12 21a9 9 0 0 0 0 -18" /></svg>
);

export const WeightIcon: FC<IconProps> = ({ color = "red" }) => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={color}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-weight"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" /></svg>
);

export const RangeIcon: FC<IconProps> = ({ color = "yellow" }) => (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={color} stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
);

export const AccelerationIcon: FC<IconProps> = ({ color = "green" }) => (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={color}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-speedtest"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.636 19.364a9 9 0 1 1 12.728 0" /><path d="M16 9l-4 4" /></svg>
);
