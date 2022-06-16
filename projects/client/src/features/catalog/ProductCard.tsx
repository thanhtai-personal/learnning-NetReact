import { Product } from "../../product"
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

interface Props {
  product: Product,
}

export default function ProductCard(props: Props) {

  const { product } = props

  return (
    <Card key={product.id} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'secondary.main' }
        }}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5" component="div">
            {(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to card
        </Button>
        <Button size="small" color="primary">
          view
        </Button>
      </CardActions>
    </Card>
  )
}