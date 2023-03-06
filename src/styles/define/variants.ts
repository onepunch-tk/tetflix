import {Variants} from "framer-motion";
import {EVarLabels} from "../../utils/define/enums";

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