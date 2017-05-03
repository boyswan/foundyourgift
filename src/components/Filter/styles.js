import styled from 'styled-components'
import { media } from '../../styles'
import { prop } from 'ramda'

export const Filter = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LogoWrap = styled.div`
  margin-bottom: 2rem;
  ${media.tablet`
    display: none;
    `}
`
export const Intro = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: #4875A9;
  line-height: 2.4rem;
  margin-bottom: 2rem;
`
export const Divider = styled.div`
  margin-bottom: 4rem;
  border-bottom: 0.2rem solid #EBEBEB;
`

export const Interests = styled.ul`
  margin-bottom: 2rem;
  ${media.tablet`
    button {
      font-size: 1.8rem;
      padding: 2rem;
    }
    `}
`
export const Terms = styled.span`
  font-size: 1.6rem;
  color: #b9b9b9;
  align-self: flex-end;
  bottom: 3rem;
`
