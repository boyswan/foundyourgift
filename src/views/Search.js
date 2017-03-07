import React from "react";
import styled from "styled-components";
import Actions from "../actions";
import Const from "../utils/constants";
import { connect } from "../utils";
import { Summary, Filter, Grid, Header, Product } from "../components";
import { Body, Sidebar, Modal } from "../elements";

const isClient = typeof window !== "undefined";
const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ color }) => color};
  width: 100%;
`;

const updateDimensions = () =>
  Actions.getDimensions({
    item: "dimensions",
    value: { width: isClient && window.innerWidth, height: isClient && window.innerHeight }
  });

class Component extends React.Component {
  componentDidMount() {
    Actions.hydrate({ router: this.props.router });
    updateDimensions();
    isClient && window.addEventListener("resize", () => updateDimensions());
  }

  render() {
    const { router, summary, filter, currentProduct } = this.props;
    return (
      <Background color={Const.color.grey}>
        <Header />
        <Sidebar summary={summary} filter={filter} side="left">
          <Filter router={router} />
        </Sidebar>
        <Modal active={currentProduct.title}>
          <Product currentProduct={currentProduct} />
        </Modal>
        <Body>
          <Grid />
        </Body>
        <Sidebar summary={summary} filter={filter} side="right">
          <Summary />
        </Sidebar>
      </Background>
    );
  }
}

export default connect(Component);
