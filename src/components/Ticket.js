import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <hr />
      <h3>{props.location}</h3>
      <h3>{props.names}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  location: PropTypes.string,
  names: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;
