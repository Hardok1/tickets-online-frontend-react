import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getAuthorization } from '../utils/token';

function MyTicketItem({ eventName, eventId, history }) {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa: {eventName}</div>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={() => showEvent(eventId)}>
                    Pokaż szczegóły wydarzenia
                </button>
            </div>
        </div>
    );

    //Przeniesie do widoku tylko jednego wydarzenia z id biletu
    function showEvent(id) {
        axios.get(`http://localhost:8080/event/${id}`, getAuthorization())
            .then(response => {
                history.push({
                    pathname: `/event/${id}`,
                    ...response.data,
                })
            });
    }
}

const divStyle = {
    left: "8%",
    right: "8%",
    top: "20px",
    maxWidth: '70rem'
};
export default withRouter(MyTicketItem);
