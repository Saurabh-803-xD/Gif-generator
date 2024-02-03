import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

  const [tag,setTag]=useState("car");

  function changeHandler(event)
  { setTag(event.target.value);}

  const {gif,loading,fetchdata} = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-400 border-black rounded-md border flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-xl underline uppercase font-bold">Random {tag} GIF</h1>

     {
        loading ? (<Spinner/>) : (<img src={gif} alt="" width={450} />)
     }

     <input
        className="w-10/12 text-lg py-2 round-lg mb-[3px] rounded-md text-center"
        onChange={changeHandler}
        value={tag}
     />

      <button onClick={()=>fetchdata(tag)} className="bg-slate-400  w-10/12 rounded-md text-lg py-2 mb-[20px] font-semibold">
        Generate
      </button>
    </div>
  );
};

export default Tag;
