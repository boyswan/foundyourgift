import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { connect } from 'utils'
import { Summary, Filter, Body, Footer, Grid } from 'components';

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ color }) => color};
`

class Component extends React.Component {

  componentDidMount() {
    Actions.search({ router: this.props.router })
  }

  render() {
    const { router } = this.props
    return (
      <Background color={Const.color.grey}>
        <Filter router={router}/>
        <Body>
          <Grid/>
        </Body>
        <Summary/>
      </Background>
    )
  }
}

export default connect(Component)
