

//* statelerin başlangıc değerlerini obje haline getirdik.
export const initialState = {
loading: false,
catImage:"",
error:"",


}

// ? 2 objeyi parametre olarak alıyor reduser fonksiyonu;
export const reduser = (initialState , action) => {
switch (action.type){
case "START":
      return {...initialState, loading:true}
case "SUCCESS" :
      return{...initialState,   catImage:action.payload, loading:false, error:"" }
case "FAIL" :
      return{...initialState, catImage:"", loading:false, error:action.payload}


default:
break

}



}