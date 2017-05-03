import React from 'react'
import Const from '../../utils/constants'
import Actions from '../../actions'
import { Logo, Cart, Menu } from '../../svg'
import { interestToQuery, connect } from '../../utils'
import { Link } from 'react-router'
import { Header, Button } from './styles'

const HeaderComponent = ({ interests }) => (
  <Header primary={Const.color.primary}>
    <Button onClick={() => Actions.toggleFilter()}>
      <Menu color={'white'} />
    </Button>
    <Link to={{ pathname: '/', query: interestToQuery(interests) }}>
      <Logo color={'white'} />
    </Link>
    <Button onClick={() => Actions.toggleSummary()}>
      <Cart color={'white'} />
    </Button>
  </Header>
)

export default connect(HeaderComponent)
