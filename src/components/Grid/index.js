import React from 'react'
import Const from '../../utils/constants'
import { Card } from '../../components'
import { MascotSad, MascotNoSelection, MascotLoading } from '../../svg'
import { List } from 'react-virtualized'
import { connect } from '../../utils'
import { Grid, NoResults, CardWrap, Dot } from './styles'
import { prop, cond, T, pipe, range } from 'ramda'

const Either = require('ramda-fantasy').Either
const Left = Either.Left
const Right = Either.Right

const rowRenderer = ({ key, index, isScrolling, isVisible, style }, item, breakpoint) => {
  const bp1 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
    </CardWrap>
  )
  const bp2 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
      <Card breakpoint={breakpoint} item={item[index][1]} />
    </CardWrap>
  )
  const bp3 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
      <Card breakpoint={breakpoint} item={item[index][1]} />
      <Card breakpoint={breakpoint} item={item[index][2]} />
    </CardWrap>
  )
  return (
    <div key={key} style={style}>
      {breakpoint === 1 ? bp1 : breakpoint === 2 ? bp2 : breakpoint === 3 ? bp3 : ''}
    </div>
  )
}

const Products = ({ width, breakpoint, availableProducts }) => (
  <List
    width={width}
    height={window.innerHeight}
    rowCount={availableProducts.length}
    rowHeight={480}
    rowRenderer={x => rowRenderer(x, availableProducts, breakpoint)}
  />
)

const NoItems = ({ title, body, icon }) => (
  <NoResults color={Const.color.primary}>
    {icon}
    <h1>{title}</h1>
    <p>{body}</p>
  </NoResults>
)

const LoadingDots = (
  <div>
    Loading {range(0, 3).map(x => <Dot key={x} index={x}>.</Dot>)}
  </div>
)
const noBudgetMascot = [
  MascotSad,
  "You're over budget!",
  'Increase your budget too see more items!'
]
const loadingMascot = [MascotLoading, LoadingDots, 'Just one second']
const noSelectionMascot = [
  MascotNoSelection,
  'What are you looking for?',
  'Choose some interests from the left to see some gifts'
]

const fork = x =>
  cond([
    [prop('products'), () => Right(x.productProps)],
    [prop('loading'), () => Left(loadingMascot)],
    [prop('noInterests'), () => Left(noSelectionMascot)],
    [T, () => Left(noBudgetMascot)]
  ])(x)

const handleError = Either.either(
  ([Mascot, title, body]) => (
    <NoItems icon={<Mascot color={Const.color.primary} />} title={title} body={body} />
  ),
  props => <Products {...props} />
)

const handleCases = pipe(fork, handleError)

export default connect(
  ({
    status: { loading: isLoading },
    interests,
    breakpoint,
    availableProducts,
    dimensions: { width }
  }) => (
    <Grid>
      {handleCases({
        loading: isLoading,
        noInterests: !interests.filter(x => x.active).length,
        products: availableProducts.length,
        productProps: {
          breakpoint,
          width,
          availableProducts
        }
      })}
    </Grid>
  )
)
