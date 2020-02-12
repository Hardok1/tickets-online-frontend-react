import React from "react";
import axios from "axios";

function EventScreen({ active, city, date, description, id, imageUrl, name, ticketLimit, ticketPrice, ticketsLeft }) {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa: {name}</div>
            <div className="card-body">
                <p className="card-text"><img id="eventImageUrl" src={imageUrl} alt="Obraz wydarzenia" /></p>
                <p className="card-text" id="eventDescription">Opis: {description}</p>
                <p className="card-text" id="eventDate">Data: {date}</p>
                <p className="card-text" id="eventCity">Miasto: {city}</p>
                <p className="card-text" id="eventTicketPrice">Cena biletu: <span>{ticketPrice}</span></p>
                <p className="card-text">Ilosc dostepnych biletow:
                    <span id="eventTicketsLeft"> {ticketsLeft}</span> / <span id="eventTicketLimit"> {ticketLimit}</span>
                </p>
                <button type="button" className="btn btn-primary" onClick={() => buyTicket(id)}>Kup bilet</button>
                <button type="button" className="btn btn-primary" onClick={() => editEvent(id)}>Edytuj wydarzenie</button>
            </div>
        </div>
    );
}

function buyTicket(id) {
    console.log(id);
    axios.post('http://localhost:8080/event/buyTicket/' + id, {},
        {headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}})
        .then(function (response) {
            if (response.status === 201) {
                alert("Bilet pomyślnie zakupiony!")
            } else {
                alert("Wystąpił błąd!");
            }
        })
        .catch(function (error) {
            alert("Wystąpił błąd!");
        });
}

//funkcja dla admina, powinno przenosic do innego ekranu ktorego jeszcze nie ma
function editEvent(id) {
    console.log(id);
}

const divStyle = {
    left: "8%",
    right: "8%",
    top: "20px",
    maxWidth: '70rem'
};
export default EventScreen;
