import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Logo } from '../../svg'
import { Input, Slider, Button } from '../../elements'
import { Link } from 'react-router'
import { connect, interestToQuery, mapIndex } from '../../utils'
import Actions from '../../actions'
import Const from '../../utils/constants'
import { Filter, LogoWrap, Intro, Divider, Interests, Terms } from './styles'

const Interest = router => ({ label, active }, index) => (
  <Button
    inline
    key={index}
    style={active ? 'selectedSmallLight' : 'primarySmallLight'}
    onClick={() => Actions.toggleInterest({ index, active: !active, router })}
    label={label}
  />
)

const Component = ({ router, availableProducts, interests, budgetInput }) => (
  <Filter width={Const.ui.sidebarWidth}>
    <div>
      <LogoWrap>
        <Link to={{ pathname: '/', query: interestToQuery(interests) }}>
          <Logo color={Const.color.primary} />
        </Link>
      </LogoWrap>
      <Intro>{Const.text.search.intro}</Intro>
      <Divider />
      <Slider
        hasBudget={!availableProducts.length && interests.filter(x => x.active).length > 0}
        max={10000}
        item="budgetInput"
        value={budgetInput}
        label="Budget"
      />
      <Interests interests={interests.filter(x => x.active).length}>
        {mapIndex(Interest(router, interests), interests)}
      </Interests>
    </div>
    <Link to="terms">
      <Terms>Terms & Conditions</Terms>
    </Link>
  </Filter>
)

export default connect(Component)
