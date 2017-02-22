import React from "react";
import styled from "styled-components";
import Actions from "actions";
import Const from "utils/constants";
import { connect } from "utils";
import { Summary, Filter, Grid, Header } from "components";
import { Body, Sidebar } from "elements";

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ color }) => color};
  width: 100%;
`;

class Component extends React.Component {
  componentDidMount() {
    Actions.hydrate({ router: this.props.router });
    window.addEventListener("resize", () => {
      Actions.getDimensions({
        item: "dimensions",
        value: { width: window.innerWidth, height: window.innerHeight }
      });
    });
  }

  render() {
    const { router, summary, filter } = this.props;
    return (
      <Background color={Const.color.grey}>
        <Header />
        <Sidebar summary={summary} filter={filter} side="left">
          <Filter router={router} />
        </Sidebar>
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
