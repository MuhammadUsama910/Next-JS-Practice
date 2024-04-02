 import { Metadata } from "next";

 type Props = {
  params: {
    productId: string,
  };
 };
 
 //dynamic metadata function
 export const generateMetadata = async ({ params } : Props) : Metadata => {
  
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 1000)
  })
  
  return {
    title: `Product ${title}`,
  }
 }
 
//  export const generateMetadata = ({ params } : Props) : Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   }
//  }

 export default function ProductDetails({ params } : Props) {

  return(
    <>
      <h1> Details About The Product Having Id: {params.productId} </h1>
    </>
  )
}