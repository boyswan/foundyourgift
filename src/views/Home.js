import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { connect } from 'utils';
import { mapIndex, interestToQuery } from 'utils';
import { Logo, MascotShadow } from 'svg'
import Actions from 'actions';
import { Sidebar, Summary, Filter } from 'components';
import { H1, H2 } from 'styles';
import { Button } from 'elements';
import Const, { text } from 'utils/constants';

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
  justify-content: space-between;
  background: ${({ color }) => color};
`
const HeaderLogo = styled.header`
  width: 100%;
  padding: 3rem 2rem;
`
const MascotLogo = styled.div`
  margin-bottom: 3rem;
`
const Content = styled.section`
  width: 100%;
  padding: 0 2rem;
  text-align: center;
`
const Divider = styled.hr`
  border: none;
  margin: 0 auto;
  max-width: 50%;
  opacity: 0.25;
  margin-bottom: 6rem;
  ${''/* border-bottom: 0.2rem solid ${({ color }) => color};*/}
`
const Interests = styled.ul`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 2rem;
`
const Footer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  text-align: center;
`
const Amazon = styled.p`
  max-width: 60rem;
  margin: 0 auto;
  font-size: 1.2rem;
  color: ${({ color }) => color};
`
const FooterLinks = styled.div`
  margin-bottom: 1rem;
  color: ${({ color }) => color};
  a {
    font-size: 1.6rem;
    margin: 0 0.5rem;
    color: inherit;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
`

const Interest = ({ label, active }, index) =>
  <Button
    key={index}
    style={active ? 'selected' : 'primary' }
    onClick={() => Actions.toggleInterest({ index, active: !active })}
    label={label}/>

export default connect(({
  interests
}) =>
  <Background color={Const.color.primary}>
    <HeaderLogo>
      <Logo color='white'/>
    </HeaderLogo>
    <Content>
      <MascotLogo>
        <MascotShadow stroke='5' color='white'/>
      </MascotLogo>
      <H1>{Const.text.home.title}</H1>
      <H2>{Const.text.home.intro}</H2>
      <Divider color={Const.color.primaryDark}/>
      <Interests>
        {mapIndex(Interest, interests)}
      </Interests>
      <Divider color={Const.color.primaryDark}/>
      <Link to={{ pathname: 'search', query: interestToQuery(interests) }}>
        <Button label={Const.text.home.cta}/>
      </Link>
    </Content>
    <Footer>
      <FooterLinks color={Const.color.primaryDark}>
        <Link to='terms'>Terms</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
      </FooterLinks>
      <Amazon color={Const.color.primaryDark}>
        {Const.text.home.amazon}
      </Amazon>
    </Footer>
  </Background>
);
