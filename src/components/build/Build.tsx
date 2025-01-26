import { FC } from "react";
import { BuildOptions, colorOptions, wheelOptions } from "./buildOptions";


interface BuildOptionProps {
    highlight : boolean
}


const WheelBuildOption: FC<BuildOptionProps> = ({highlight}) => {
  return (
    <div className={`flex justify-start items-center flex-col gap-2  backdrop-blur-md shadow-sm rounded-lg ${highlight ? 'bg-slate-100/80 w-[27vw] relative h-[30vh]' : 'bg-slate-100/40 w-[25vw] relative h-[27.5vh]'}`}>
      {/* <div className="w-full">Wheels</div> */}
      <div className="w-full flex justify-center items-center h-full relative">
        {wheelOptions.map((item, index) => (
          <div key={index} className={`m-2.5 flex justify-center items-center overflow-hidden text-white rounded-md ${ highlight ? index === Math.floor(wheelOptions.length/2) ? 'w-32 h-32' : 'w-28 h-28' : 'w-25 h-25'}`}>
            <img src={item.thumbnail} alt="card-image" className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};


const ColorBuildOption: FC<BuildOptionProps> = ({highlight}) => {
  return (
    <div className={`flex justify-start items-center flex-col gap-2  backdrop-blur-md shadow-sm rounded-lg ${highlight ? 'bg-slate-100/80 w-[27vw] relative h-[30vh]' : 'bg-slate-100/40 w-[25vw] relative h-[27.5vh]'}`}>
      {/* <div className="w-full">Wheels</div> */}
      <div className="w-full flex justify-center items-center h-full relative">
        {colorOptions.map((item, index) => (
          <div key={index} className={`m-2.5 flex justify-center items-center overflow-hidden text-white rounded-md ${ highlight ? index === Math.floor(wheelOptions.length/2) ? 'w-32 h-32' : 'w-28 h-28' : 'w-24 h-24'}`}>
            <img src={item.thumbnail} alt="card-image" className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};


const Build: FC = () => {
  return (
    <>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col">
        {BuildOptions.map((option, index) => (
          <div
            key={index}
            className="w-12 h-12 my-1 p-3 flex justify-center items-center bg-gradient-to-r from-slate-100 to-slate-300 rounded-lg backdrop-blur-md hover:bg-slate-200/80 cursor-pointer "
          >
            <img src={option.icon} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 items-end">
        <ColorBuildOption highlight={false}/>
        <WheelBuildOption highlight={true}/>
        <ColorBuildOption highlight={false} />
      </div>
    </>
  );
};

export default Build;
