import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {getAuthorization} from '../utils/token';

function EventScreen(props) {
    const {
        active,
        city,
        date,
        description,
        id,
        imageUrl,
        name,
        ticketLimit,
        ticketPrice,
        ticketsLeft
    } = props.id ? props : props.location;
    const {history} = props;

    //funkcja dla admina, powinno przenosic do innego ekranu ktorego jeszcze nie ma
    function editEvent(id) {
        history.push(`/editEvent/${id}`);
    }

    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header" id="eventName">Nazwa: {name}</div>
            <div className="card-body">
                <p className="card-text"><img id="eventImageUrl" src={imageUrl} alt="Obraz wydarzenia"/></p>
                <p className="card-text" id="eventDescription">Opis: {description}</p>
                <p className="card-text" id="eventDate">Data: {date}</p>
                <p className="card-text" id="eventCity">Miasto: {city}</p>
                <p className="card-text" id="eventTicketPrice">Cena biletu: <span>{ticketPrice}</span></p>
                <p className="card-text">Ilosc dostepnych biletow:
                    <span id="eventTicketsLeft"> {ticketsLeft}</span> / <span
                        id="eventTicketLimit"> {ticketLimit}</span>
                </p>
                <button type="button" className="btn btn-primary" onClick={() => buyTicket(id)}>Kup bilet</button>
                <button type="button" className="btn btn-primary" onClick={() => editEvent(id)}>Edytuj wydarzenie</button>
                <p className="card-text">
                    <button type="button" className="btn btn-primary" onClick={() => deleteEvent(id)}>Usuń wydarzenie</button>
                </p>
            </div>

        </div>
    );
}

function buyTicket(id) {
    console.log(id);
    axios.post('http://localhost:8080/event/buyTicket/' + id, {}, getAuthorization())
        .then(function (response) {
            if (response.status === 201) {
                alert("Bilet pomyślnie zakupiony!")
            } else {
                console.error(response);
                alert("Wystąpił błąd!");
            }
        })
        .catch(function (error) {
            console.error(error);
            alert("Wystąpił błąd!");
        });
}

function deleteEvent(id) {
    axios.delete('http://localhost:8080/event/delete/' + id, getAuthorization())
        .then(function (response) {
            if (response.status === 204){
                alert("Wydarzenie zostało usunięte")
            } else {
                console.error(response);
                alert("Wystąpił błąd!");
            }
        })
        .catch(function (error) {
            console.error(error);
            alert("Wystąpił błąd!");
        });
}

const divStyle = {
    left: "8%",
    right: "8%",
    top: "20px",
    maxWidth: '70rem'
};
export default withRouter(EventScreen);
