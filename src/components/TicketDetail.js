import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>Ticket Detail</h1>
      <h3>{ticket.location}</h3>
      <h3>{ticket.names}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={onClickingEdit}>Update Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default TicketDetail;
