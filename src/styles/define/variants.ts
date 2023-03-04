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