import { HTMLMotionProps} from "framer-motion";

export const postSlide:HTMLMotionProps<"div">={
    initial:{
      y: 0,
    },
    animate: {
      y: [1000,0]
    },
    exit:{
      y:[0,1000]
    },
    transition: {
      duration: 0.3,
    },
  }