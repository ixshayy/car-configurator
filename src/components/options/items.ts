import wheel from "../../assets/images/wheel.svg";
import play from "../../assets/images/play.svg";
import swatch from "../../assets/images/swatch.svg";

type mode = "view" | "colors" | "wheels";

interface Items {
    id : number, 
    icon : string, 
    name : string,
    mode : mode
};

export const Items : Items[] = [
    {
        id : 1,
        icon : play, 
        name  : "View", 
        mode : "view" 
    }, 
    {
        id : 1,
        icon : swatch, 
        name  : "Colors", 
        mode : "colors"
    }, 
    {
        id : 1,
        icon : wheel, 
        name  : "Wheels", 
        mode : "wheels"
    }
]