import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Team from "../../Components/Team/Team";

class TeamHome extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="Team" />
        <div style={{ background: "#111" }}>
          <Team />
        </div>
      </div>
    );
  }
}

export default TeamHome;
