import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Card } from 'components'
import { connect } from 'utils/helpers';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
`

class Component extends React.Component {
  componentDidMount() {
    Actions.search(window.location)
  }

  render() {
    const { searchResults } = this.props;
    return (
      <Grid>
        {addIndex(map)(Card, searchResults)}
      </Grid>
    )
  }
}

export default connect(Component)
