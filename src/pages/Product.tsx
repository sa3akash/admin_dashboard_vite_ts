import Single from "../components/Single"
import { singleProduct } from "../data"
import "./styles/product.scss"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Product