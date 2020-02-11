import React from "react";

function EventScreen() {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa</div>
            <div className="card-body">
                <p className="card-text"><img id="eventImageUrl" src="" alt="Obraz wydarzenia"/></p>
                <p className="card-text" id="eventDescription">Opis</p>
                <p className="card-text" id="eventDate">Data</p>
                <p className="card-text" id="eventCity">Miasto</p>
                <p className="card-text" id="eventTicketPrice">Cena biletu: <span>cena</span></p>
                <p className="card-text">Ilosc dostepnych biletow:
                    <span id="eventTicketsLeft">Ile zostalo</span> / <span id="eventTicketLimit"> Jaki limit</span></p>
                <button type="button" className="btn btn-primary" onClick={buyTicket}>Kup bilet</button>
                <button type="button" className="btn btn-primary" onClick={editEvent}>Edytuj wydarzenie</button>
                <p id="eventId" style={hideElementStyle}>Przechowuje id eventu</p>
            </div>
        </div>
    );
}

function buyTicket() {

}

//funkcja dla admina, powinno przenosic do innego ekranu ktorego jeszcze nie ma
function editEvent() {

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
export default EventScreen;
