import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background: white;
width: calc(33% - (1rem * 6));
height: 300px;
margin: 1rem;
`
const Image = styled.img`
  width: 100%;
`

export default () =>
  <Card>
    <Image src="http://animal-dream.com/data_images/leaves/leaves2.jpg"/>
  </Card>
