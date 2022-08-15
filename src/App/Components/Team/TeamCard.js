import React, { Component } from "react";
import { Instagram, Linkedin, GitHub } from "react-feather";

class TeamCard extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: "relative" }}
      >
        <div className="th-team-box">
          <ul className="th-team-icon-list">
            <li className="th-team-list-item">
              <a href={this.props.socialHandleLink.github} target="blank">
                <GitHub className="th-team-social-icon" />
              </a>
            </li>
            <li className="th-team-list-item">
              <a href={this.props.socialHandleLink.linkedin} target="blank">
                <Linkedin className="th-team-social-icon" />
              </a>
            </li>
            <li className="th-team-list-item">
              <a href={this.props.socialHandleLink.instagram} target="blank">
                <Instagram className="th-team-social-icon" />
              </a>
            </li>
          </ul>

          <img alt="" src={this.props.src} className="th-team-member-img"></img>
          <div className="th-team-member-content">
            <p className="th-team-member-name mb-1">{this.props.name}</p>
            <p className="th-team-member-post ">{this.props.post} </p>
            {this.props.post2 && (
              <p className="th-team-member-post mt-0">{this.props.post2}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
