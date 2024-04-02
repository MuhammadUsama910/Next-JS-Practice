import "../globals.css";

export default function Loading() {
  
  return(
    <>
      <h1 className='text-xl font-bold m-4'> Loading </h1>  
    </>
  )
}

//this loading.tsx file will automatically wrap page.tsx file and all its nested children 
//within a react suspense boundary.

//If you are new to the concept of suspense dont worry about it. 