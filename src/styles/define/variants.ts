import {Variants} from "framer-motion";
import {EVarLabels} from "../../modules/define/enums";

export const logoVariants:Variants = {
    [EVarLabels.init]:{
        fillOpacity:1
    },
    [EVarLabels.hover]:{
        fillOpacity:[0,1,0],
        transition:{
            repeat:Infinity
        }
    }
};

export const navVariants:Variants = {
    [EVarLabels.init]:{
        backgroundColor: "rgba(0,0,0,0)"
    },
    [EVarLabels.animate]:{
        backgroundColor: "rgba(0,0,0,1)"
    }
}

export const sliderRowVariants:Variants = {
    [EVarLabels.init]:(windowSize) =>({
        x:windowSize - 15
    }),
    [EVarLabels.animate]:{
        x:0
    },
    [EVarLabels.exit]:(windowSize) =>({
        x:-windowSize + 15
    })
}

export const sliderItemVariants:Variants = {
    [EVarLabels.hover]:{
        scale:1.3,
        y:-50,
        transition:{
            delay:0.5,
            duration:0.3,
            type:"tween",
            delayChildren:0.5,
            staggerChildren:0.3,

        }
    },
}

export const sliderItemInfoVariants:Variants = {
    [EVarLabels.hover]:{
        opacity:1
    },
}