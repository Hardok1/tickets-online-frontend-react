import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getAuthorization } from '../utils/token';

//Tylko admin może dodawać event
function EditEventScreen(props) {
    const eventId = props.match.params.id;
    const [event, setEvent] = useState(null);

    if (!event && eventId) {
        getEvent(eventId).then(resp => setEvent(resp));
    }

    if (event === 'error' || !eventId) {
        return (<div>Error...</div>);
    }

    if (!event && eventId) {
        return (<div>Pobieranie...</div>);
    }

    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inputName">Nazwa wydarzenia</label>
                    <input className="form-control" id="inputName" defaultValue={event.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Opis</label>
                    <textarea className="form-control" id="inputDescription" rows="3" defaultValue={event.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputImageUrl">Url obrazka</label>
                    <input className="form-control" id="inputImageUrl" defaultValue={event.imageUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputDate">Data</label>
                    <input className="form-control" id="inputDate" placeholder="yyyy-MM-dd" defaultValue={event.date} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputCity">Miasto</label>
                    <input className="form-control" id="inputCity" defaultValue={event.city} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputTicketPrice">Cena biletu w zł</label>
                    <input className="form-control" id="inputTicketPrice" defaultValue={event.ticketPrice} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputTicketLimit">Limit biletów</label>
                    <input className="form-control" id="inputTicketLimit" defaultValue={event.ticketLimit} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputActive">Czy wydarzenie ma być aktywne</label>
                    <select className="form-control" id="inputActive">
                        <option value="1">aktywne</option>
                        <option value="2">zakończone</option>
                    </select>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => editEvent(eventId)}>Wyślij</button>
            </fieldset>
        </form>
    );

    //name, description, imageUrl, date, city, active, ticketPrice, ticketLimit
    function editEvent(id) {
        const name = document.getElementById("inputName").value;
        const description = document.getElementById("inputDescription").value;
        const imageUrl = document.getElementById("inputImageUrl").value;
        const date = document.getElementById("inputDate").value;
        const city = document.getElementById("inputCity").value;
        const activeSelectValue = document.getElementById("inputActive").value;
        const active = (activeSelectValue === "1");
        const ticketPrice = parseInt(document.getElementById("inputTicketPrice").value);
        const ticketLimit = parseInt(document.getElementById("inputTicketLimit").value);

        const data = {
            id: id,
            name: name,
            description: description,
            imageUrl: imageUrl,
            date: date,
            city: city,
            active: active,
            ticketPrice: ticketPrice,
            ticketLimit: ticketLimit,
        };

        axios.put('http://localhost:8080/event/edit', data, getAuthorization())
            .then(function (response) {
                if (response.status === 204) {
                    alert("Pomyślna edycja wydarzenia!");
                    props.history.push('/events');
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
}

function getEvent(id) {
    return axios.get("http://localhost:8080/event/" + id, getAuthorization())
        .then(function (response) {
            if (response.status === 200) {
                return response.data;
            } else {
                return "error";
            }
        })
        .catch(function (error) {
            console.error(error);
            return "error";
        });
}

export default withRouter(EditEventScreen);
