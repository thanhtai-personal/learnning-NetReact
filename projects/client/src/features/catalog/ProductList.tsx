import { Grid } from '@mui/material'
import { Product } from "../../product"
import ProductCard from './ProductCard'

interface Props {
  products: Product[],
}

export default function ProductList(props: Props) {

  const { products } = props

  return (
    <Grid container spacing={4}>
      {products.map((product: Product) => (
        <Grid key={product.id} item xs={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}