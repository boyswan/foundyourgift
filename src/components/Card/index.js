import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  flex: 0 0 25rem;
  height: 30rem;
  margin: 1rem;
`
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`
//
// const Title = styled.h3`
//
// `
// const Price = styled.span`
//
// `

export default ({ title = '', price = '', image = '' }, key) =>
  <Card key={key}>
    <Image src={image}/>
    {/* <Title>{title}</Title>
    <Price>{price}</Price> */}
  </Card>
