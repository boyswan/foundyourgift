import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import { Logo, MascotShadow } from 'svg'
import { Sidebar, Summary, Filter } from 'components';
import { H1, H2 } from 'styles';
import { Button } from 'elements';

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ color }) => color};
`
const HeaderLogo = styled.header`
  width: 100%;
  padding: 2rem;
`
const Content = styled.section`
  width: 100%;
  text-align: center;
`
const Divider = styled.hr`
  border: none;
  margin: 0 auto;
  max-width: 30%;
  margin-bottom: 2rem;
  border-bottom: 0.2rem solid #EBEBEB;
`
const Footer = styled.footer`
  width: 100%;
  text-align: center;
`

const Interests = () => {}

export default () =>
  <Background color={Const.color.primary}>
    <HeaderLogo>
      <Logo color='white'/>
    </HeaderLogo>
    <Content>
      <MascotShadow stroke='5' color='white'/>
      <H1>{Const.text.home.title}</H1>
      <H2>{Const.text.home.intro}</H2>
      <Divider/>
      {/* <Interests /> */}
      <Divider/>
      <Button label={Const.text.home.getStartedCTA}/>
    </Content>
    <Footer>
      terms  |  about  |  contact
    </Footer>
  </Background>
