import { useState,useEffect } from 'react';
import axios from 'axios';

const API_KEY = "SwhdevKWCE3yY1mArK7cptTG0bYhwYLs";

const useGif = (tag) => {
  

   const [gif, setGif] = useState("");

   const [loading,setLoading] = useState(false);

   const TagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

   const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

   async function fetchdata(tag)
   {
      setLoading(true);
      const {data} = await axios.get(tag ? TagUrl : RandomUrl);
      const imgsrc= data.data.images.downsized_large.url;
      console.log(imgsrc);
      setGif(imgsrc)
      setLoading(false);
   }
  
  useEffect(()=>
  {
      fetchdata();
  },[]);
  
    return {gif,loading,fetchdata}
}

export default useGif 