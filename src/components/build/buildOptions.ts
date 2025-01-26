
import wheel from "../../assets/images/wheel.svg";
import play from "../../assets/images/play.svg";
import swatch from "../../assets/images/swatch.svg";
import charge from "../../assets/images/gas-station.svg"

import Wheel1 from "../../assets/images/wheel_1.png";
import Color1 from "../../assets/images/cp-1.png";

type mode = "view" | "colors" | "wheels" | "charge";

interface Details {
    name : string, 
    feature : string, 
}

interface Model  {
    path : string, 
    model : string
}

interface WheelOption {
    thumbnail : string, 
    details : Details, 
    model : Model
}

interface ColorOption {
    thumbnail : string, 
    details : Details 
}



interface BuildOption {
    id : number, 
    icon : string, 
    name : string,
    mode : mode, 
    options : WheelOption[] | ColorOption[]
};

export const wheelOptions : WheelOption[]  = [{
    thumbnail : Wheel1, 
    details : {
        name : "Wheel 1", 
        feature : "feature of wheel 1"
    }, 
    model : {
        path : "", 
        model : ""
    }
}, {
    thumbnail : Wheel1, 
    details : {
        name : "Wheel 2", 
        feature : "feature of wheel 2"
    }, 
    model : {
        path : "", 
        model : ""
    }
}, {
    thumbnail : Wheel1, 
    details : {
        name : "Wheel 3", 
        feature : "feature of wheel 3"
    }, 
    model : {
        path : "", 
        model : ""
    }
}]


export const colorOptions : ColorOption[] =  [{
    thumbnail : Color1, 
    details : {
        name : "Color 1", 
        feature : "feature of color 1"
    }
}, {
    thumbnail : Color1, 
    details : {
        name : "Color 2", 
        feature : "feature of color 2"
    }
}, {
    thumbnail : Color1, 
    details : {
        name : "Color 3", 
        feature : "feature of color 3"
    }
}]

export const BuildOptions : BuildOption[] = [
    {
        id : 1,
        icon : play, 
        name  : "View", 
        mode : "view", 
        options : colorOptions
    }, 
    {
        id : 2,
        icon : swatch, 
        name  : "Colors", 
        mode : "colors", 
        options : colorOptions
    }, 
    {
        id : 3,
        icon : wheel, 
        name  : "Wheels", 
        mode : "wheels", 
        options : wheelOptions
    }, 
    {
        id : 4,
        icon : charge, 
        name  : "Charge", 
        mode : "charge", 
        options : colorOptions
    }
]


