import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  flex: 0 0 250px;
  height: 290px;
  margin: 0.5rem;
`
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`

export default () =>
  <Card>
    <Image src="http://animal-dream.com/data_images/leaves/leaves2.jpg"/>
  </Card>
