import { Product } from "../../product"
import ProductList from './ProductList'

interface Props {
  products: Product[],
  addProduct: () => void;
}

export default function Catalog(props : Props) {

  const { products, addProduct } = props

  return (
    <>
      <ProductList products={products} />
      <button onClick={addProduct}>Add product</button>
    </>
  )
}