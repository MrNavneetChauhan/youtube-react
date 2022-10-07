import { useEffect, useRef, useState } from "react";

export const useThrottle = (value, delay) => {
  // console.log(value,delay)
    const [query, setQuery] = useState(value);
  // const throttleId = useRef(false);
  // useEffect(() => {
  //   if (!throttleId.current){
  //       throttleId.current = true;
  //     setTimeout(() => {
  //       setQuery(value);
  //       throttleId.current = false
  //     }, delay);
  //   }
  // }, [value,delay]);
  // return query


  useEffect(()=>{
    let id = setTimeout(()=>{
      setQuery(value)
    },delay)

    return () =>{
      clearTimeout(id)
    }

  },[value,delay])

  return query

};
