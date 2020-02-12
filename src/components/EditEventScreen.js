import React from "react";
import axios from "axios";

//Tylko admin może dodawać event
function EditEventScreen() {
    let event = getEvent();
    if (event != null) {
        return (
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="inputName">Nazwa wydarzenia</label>
                        <input className="form-control" id="inputName" value={event.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">Opis</label>
                        <textarea className="form-control" id="inputDescription" rows="3" value={event.description}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputImageUrl">Url obrazka</label>
                        <input className="form-control" id="inputImageUrl" value={event.imageUrl}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDate">Data</label>
                        <input className="form-control" id="inputDate" placeholder="yyyy-MM-dd" value={event.date}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCity">Miasto</label>
                        <input className="form-control" id="inputCity" value={event.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTicketPrice">Cena biletu w zł</label>
                        <input className="form-control" id="inputTicketPrice" value={event.ticketPrice}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTicketLimit">Limit biletów</label>
                        <input className="form-control" id="inputTicketLimit" value={event.ticketLimit}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputActive">Example select</label>
                        <select className="form-control" id="inputActive">
                            <option value="1">active</option>
                            <option value="2">deactivated</option>
                        </select>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={editEvent}>Wyślij</button>
                </fieldset>
            </form>
        );
    } else {
        return (<div>Błędne id</div>);
    }
}

function getEvent(id) {
    return axios.get("http://localhost:8080/event/" + id)
        .then(function (response) {
            if (response.status === 200) {
                return response;
            } else {
                return null;
            }
        })
        .catch(function (error) {
            alert("Wystąpił błąd!");
        });
}

//name, description, imageUrl, date, city, active, ticketPrice, ticketLimit
function editEvent() {
    let name = document.getElementById("inputName").value;
    let description = document.getElementById("inputDescription").value;
    let imageUrl = document.getElementById("inputImageUrl").value;
    let date = document.getElementById("inputDate").value;
    let city = document.getElementById("inputCity").value;
    let activeSelectValue = document.getElementById("inputActive").value;
    let active = (activeSelectValue === "1");
    let ticketPrice = parseInt(document.getElementById("inputTicketPrice").value);
    let ticketLimit = parseInt(document.getElementById("inputTicketLimit").value);
    axios.put('http://localhost:8080/event/edit', {
        name: name,
        description: description,
        imageUrl: imageUrl,
        date: date,
        city: city,
        active: active,
        ticketPrice: ticketPrice,
        ticketLimit: ticketLimit,
    }, {headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}})
        .then(function (response) {
            if (response.status === 204) {
                alert("Dodano wydarzenie!")
            } else {
                alert("Wystąpił błąd!");
            }
        })
        .catch(function (error) {
            alert("Wystąpił błąd!");
        });
}

export default EditEventScreen;
