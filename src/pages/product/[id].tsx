import { useRouter } from "next/router"

export default function Product(){

  // esse hook useRouter que vai pegar o parametro da url, no caso o id do produto 

  const { query } = useRouter()

  return(
    <>
    <h2>Product: {}</h2>
    </>
  )
}