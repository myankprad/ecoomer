import { products } from "./constants/product.js"
import Product from "./model/product.schema.js";

const DefaultData = async() =>{
    try {
      await Product.deleteMany({})
       await Product.insertMany(products)
        console.log("product insert seccessfully")
    } catch (error) {
        console.log("error while fetching the imsert data", error.message);
    }
}

export default DefaultData;