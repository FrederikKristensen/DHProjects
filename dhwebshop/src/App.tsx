import {Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useQuery } from 'react-query';
import logo from './logo.jpg';
import basket from './shopping-basket.svg';

import "./style.css";

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

  const topcolor ={backgroundColor: '#9c0000'};

  return <div className='App'>
    <Container>
      <Row style={topcolor}>
        <Col><img className="photo" src={logo}/></Col>
        <Col>&nbsp;</Col>
        <Col>&nbsp;</Col>
        <Col><img className="photo" src={basket}/></Col>
      </Row>
      <Row style={topcolor}>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <button>Get data</button>
        </Col>
        <Col>
          <button>Get data</button>
        </Col>
        <Col>
          <button>Get data</button>
        </Col>
      </Row>
      <Row sm={2} md={1}>
        <Col>&nbsp;</Col>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <button>Get data</button>
        </Col>
        <Col>
          <button>Get data</button>
        </Col>
        <Col>
          <button>Get data</button>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default App;
