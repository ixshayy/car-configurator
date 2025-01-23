import { FC } from "react";
import { BuildOptions } from "./buildOptions";


const BuildOption  : FC = () => {   
    return(<></>)
}

const Build :  FC = () => {
    return(<div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col">{
            BuildOptions.map((option, index) => (
                <div key={index} className="w-12 h-12 my-1 p-3 flex justify-center items-center bg-slate-200/50 rounded-lg backdrop-blur-md hover:bg-slate-200/80 cursor-pointer ">
                    <img src={option.icon} alt="" className="w-full h-full"/>
                </div>
            ))
        }
        </div>)
};

export default Build;