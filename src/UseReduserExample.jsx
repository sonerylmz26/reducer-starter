import { useEffect, useReducer, useState } from "react";
import { initialState, reduser } from "./reduser";

const UseReduserExample = () => {
//   const [catImage, setCatImage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

const [state, dispatch] = useReducer(reduser, initialState)

// console.log(state, dispatch)
 const {loading, error, catImage} = state;

 
//? Bunları obje haline de getirebilişrdik. ama obje'nin sıkıntısı objelerin sayısı arttığında manipilasyonu zorlaşıyor.
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  //! o yüzden reduser kullanılıyor. çok fazla statelerin oldugu yerde kullenılıyor.

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    dispatch({type:"START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"SUCCESS", payload:data[0].url})
    
    } catch (error) {
 dispatch({type:"FAIL", payload:"DATA CAN NOT BE FETCHED"})

    }
  };

useEffect(() => {
      getCatImage()

  
}, [])



  return (
    <div>
      <button
      
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReduserExample;
