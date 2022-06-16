import { Container, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../../product';
import Header from './Header'
import './styles.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, []);

  function addProduct() {
    setProducts(prev => ([...prev, {
      "id": prev[prev.length - 1].id + 1,
      "name": "product name rtc 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "price": 20000,
      "pictureUrl": "/images/products/sb-ang1.png",
      "type": "Boards",
      "brand": "React",
      "quantityInStock": 100
    }]))
  }

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog addProduct={addProduct} products={products}/>
      </Container>
    </div>
  )
}

export default App;
