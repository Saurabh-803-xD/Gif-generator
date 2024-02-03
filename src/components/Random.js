import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = (tag) => {
    const {gif,loading,fetchdata} = useGif(tag);

  return (
    <div className="w-1/2 bg-green-400 border-black rounded-md border flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-xl underline uppercase font-bold">A Random GIF</h1>

     {
        loading ? (<Spinner/>) : ( <img src={gif} alt="" width={450} />)
     }
      <button onClick={()=>fetchdata(tag)} className="bg-slate-100  w-10/12 rounded-md text-lg py-2 mb-[20px] font-semibold">
        Generate
      </button>
    </div>
  );
};

export default Random;
