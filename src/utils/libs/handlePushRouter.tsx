import { NextRouter } from "next/router"

export const handlePushRouter=(router:NextRouter,pathname:string)=>{
    router.push({
        pathname:pathname
    })
}