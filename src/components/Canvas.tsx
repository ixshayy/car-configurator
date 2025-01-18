import React, { useEffect, useRef } from "react"
import Configurator from "../configurator/init";

const Canvas  : React.FC = () => {

    
    const isMounted = useRef(false);


    useEffect(() => {

        if(!isMounted.current){
            const configurator = new Configurator();
            configurator.loadModel();
            console.log(configurator);
            isMounted.current = true;
        }

    }, [])
    
    return(<div id="configurator" className="h-full w-full"></div>)
};

export default Canvas;