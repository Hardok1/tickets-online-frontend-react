import React from "react";


function MyTicketItem() {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa</div>
            <div className="card-body">
                <button type="button" className="btn btn-primary" onClick={showEvent}>Pokaż szczegóły wydarzenia</button>
                <p id="eventId" style={hideElementStyle}>Przechowuje id eventu</p>
            </div>
        </div>
    );

}

//Przeniesie do widoku tylko jednego wydarzenia z id biletu
function showEvent() {

}

const hideElementStyle = {
    display:"none"
};


const divStyle = {
    left: "8%",
    right: "8%",
    top: "20px",
    maxWidth: '70rem'
};
export default MyTicketItem;
