import {Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useQuery } from 'react-query';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

// Api connection
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  // Get api objects
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
    );
  console.log(data);

  return <div className='App'>
    <Container>
      <Row>
        <Col>
          Col 1 
          <button>Default</button>
        </Col>
        <Col>
          Col 2
        </Col>
        <Col>
          Col 3
        </Col>
      </Row>
    </Container>
  </div>;
}

export default App;
