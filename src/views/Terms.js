import React from 'react';
import styled from 'styled-components';
import { Summary, Filter, Body, Footer } from 'components';
import Const from 'utils/constants'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`
const Terms = styled.p`
  font-size: 1.6rem;
`

export default () =>
  <Background>
    <h1>Terms & Conditions</h1>
    <Terms>
      {Const.text.home.amazon}
      <br/>
      <br/>
      {Const.text.home.amazon2}
      <br/>
      <br/>
      It is not technically possible for the prices displayed to be updated in real-time, therefore the prices shown may have changed on the sellers site.
      <br/>
      <br/>
      The actual price of the product on the seller’s site at the time of purchase will govern the sale.
    </Terms>
  </Background>
