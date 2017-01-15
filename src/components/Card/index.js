import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  flex: 0 0 25rem;
  height: 30rem;
  margin: 1rem;
  ${''/* box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.04);*/}
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
