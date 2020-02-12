import React from "react";

function MyTicketItem({eventName, eventId}) {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa: {eventName}</div>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={() => showEvent(eventId)}>Pokaż szczegóły wydarzenia</button>
            </div>
        </div>
    );

}

//Przeniesie do widoku tylko jednego wydarzenia z id biletu
function showEvent(id) {
    console.log(id);
}

const divStyle = {
    left: "8%",
    right: "8%",
    top: "20px",
    maxWidth: '70rem'
};
export default MyTicketItem;
