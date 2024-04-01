 export default function ProductDetails({ params } : {params : {productId : string}}) {

  return(
    <>
      <h1> Details About The Product Having Id: {params.productId} </h1>
    </>
  )
}