import { NextPage } from "next";
import { Home } from "@/components/templates/Home";
import React from "react";
import { useRouter } from "next/router";
import { Post } from "types";

const home:NextPage = () => {
    const router = useRouter()
    const handlePushRouter=(pathname:string)=>{
        router.push({
            pathname:pathname
        })
    }
    // const PostData = getDB() 
    const PostData:Post[] = [{title:"",address:"",src:"",comment:""}] 
  return <Home data={PostData} handlePushRouter={handlePushRouter}/>;
};

export default home