import { FC, Suspense, lazy } from "react";

const Canvas = lazy(() => import("./Canvas"));

  

import { SpeedIcon, WeightIcon, RangeIcon, AccelerationIcon } from "./icons";
import { useNavigate } from "react-router-dom";

interface FeatureData {
  Icon: FC<{ color?: string; size?: number }>;
  color: string;
  feature: string;
  detail: string;
}

const Features: FeatureData[] = [
  {
    Icon: SpeedIcon,
    color: "#2f4cd0",
    feature: "Top Speed",
    detail: "200mph",
  },
  {
    Icon: WeightIcon,
    color: "#8544b2",
    feature: "Weight",
    detail: "4551 lbs",
  },
  {
    Icon: RangeIcon,
    color: "#7dc35f",
    feature: "Range (EPA est.)",
    detail: "396mi",
  },
  {
    Icon: AccelerationIcon,
    color: "#d4a04b",
    feature: "0-60 mph",
    detail: "1.99s",
  },
];

type FeatureProps = Pick<FeatureData, "color" | "detail" | "feature" | "Icon">;

const Feature: FC<FeatureProps> = ({detail, feature, Icon , color}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 p-3 bg-slate-100/60 backdrop-blur-md rounded-md">
        <div className="p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-300">
          <Icon color={color} size={32} />
        </div>
        <div className="flex flex-col justify-center items-center">
        <span className="font-bold">{detail}</span>
        <small className="font-light text-slate-500 lowercase">{feature}</small>
        </div>
      </div>
    </>
  );
};

const FeaturesList : FC = () => {
  return(<>
   {Features.map((item, index) => (
          <Feature key={index} color={item.color} detail={item.detail} feature={item.feature} Icon={item.Icon}/>
        ))}
  </>)
}

const Intro  : FC = () => {

  const navigate = useNavigate();

  return(  <div className="flex flex-col absolute top-1/2 left-8 -translate-y-1/2 max-w-[350px] gap-5">
    <div className="uppercase flex flex-col text-5xl gap-2">
  <span className="text-xs font-semibold uppercase bg-slate-950  text-slate-100 p-2 py-1 rounded-full w-fit">Electric</span>
      <span className="font-light">Mini</span>
      <span className="font-bold">Electric</span>
    </div>
    <span className="text-slate-800 text-sm">
      Iconing styling, fun-loving personality, a plethora of options for you to personalize your Mini with.
    </span>
    <div className="flex gap-2 text-slate-800">
      <span>From*</span>
      <span className="font-bold">$30,3000</span>
    </div>
    <div className="flex justify-center items-center gap-1 rounded-full bg-slate-900 w-fit py-3 px-4 text-white cursor-pointer hover:bg-slate-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
      <span className="text-white uppercase text-xs" style={{
        lineHeight : "normal"
      }} onClick={() => navigate("/build")}>Build your mini</span>
    </div>
  </div>
)
}

const Home: FC = () => {
  return (
    <div className="h-screen w-full bg-gradient">
      <Intro/>
      {/* <Suspense fallback={<></>}>
        <Canvas />
      </Suspense> */}
      <div className="grid grid-cols-2 max-w-[350px] absolute top-1/2 -translate-y-1/2 right-8 gap-4">
      <FeaturesList/>
      </div>
    </div>
  );
};

export default Home;
