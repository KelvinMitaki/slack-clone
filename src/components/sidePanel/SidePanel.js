import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "../messages/DirectMessages";
import { connect } from "react-redux";

export class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channels />
        {currentUser && (
          <DirectMessages currentUser={currentUser} key={currentUser.uid} />
        )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(SidePanel);
