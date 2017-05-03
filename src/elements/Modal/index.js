import React from 'react'
import styled from 'styled-components'
import Const from '../../utils/constants'
import Actions from '../../actions'
import { prop } from 'ramda'
import { media } from '../../styles'
const active = () =>
  `
  pointer-events: all;
  opacity: 1;
  transition: all 0.2s ease-in-out;
`

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10rem;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  background: rgba(0,0,0,0.15);
  overflow: scroll;
  ${x => x.active && active};
  ${media.tablet`
    padding: 2rem;
  `}
`
const Child = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;
`
const Background = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200vh;
  width: 100vw;
  z-index: 1;
`

export default ({ active, children }) => {
  return (
    <Modal active={active}>
      <Child>{children}</Child>
    </Modal>
  )
}
