import styled from 'styled-components'
import { prop } from 'ramda'
import { media } from '../../styles'

export const Product = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  display: flex;
  width: 60%;
  z-index: 2;
  ${media.tablet`
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 9rem;
    padding: 0;
  `}
`

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
export const Image = styled.img`
  padding: 1rem;
  height: 25rem;
  width: 25rem;
  object-fit: contain;
  ${media.tablet`
    width: 100%;
    height: 100%;
  `}
`
export const Save = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 10rem;
  background: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  svg {
    position: absolute;
    left: 11px;
    top: 13px;
  }
`
export const OldPrice = styled.span`
  opacity: 0.75;
  color: #d8d8d8 !important;
  text-decoration: line-through;
  font-weight: 200 !important;
  font-size: 3.6rem;
`
export const Body = styled.div`
  width: 80%;
  ${media.tablet`
    width: 100%;
  `}
  button {
    margin-left: 0;
  }
`
export const Feature = styled.li`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
export const FeatureWrap = styled.ul`
  font-weight: 300;
  margin-bottom: 4rem;
`
export const Price = styled.span`
  font-size: 5.2rem;
  font-weight: 400;
  letter-spacing: 1.1px;
  display: inline-block;
  margin-right: 1rem;
  color: ${prop('primary')};
`
export const Content = styled.div`
  color: ${prop('secondary')};
  position: relative;
  h2 {
    font-size: 2.8rem;
    ${/* color: #ff7270; */ ''}
    font-weight: 300;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
  p {
    color: #b9b9b9;
    font-weight: 300;
    font-size: 1.4rem;
    margin-bottom: 4rem;
  }
`
export const LastUpdated = styled.p`
  margin-bottom: 2rem;
`
export const Description = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`
export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 3rem;
    cursor: pointer;
    height: 3rem;
  }
`
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  ${media.tablet`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}

  button {
    margin-bottom: 4rem;
    ${media.tablet`
      width: 100%;
      svg {
        margin-right: 1rem;
      }
    `}
  }
`
