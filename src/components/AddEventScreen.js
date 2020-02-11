import React from "react";
import axios from "axios";

function AddEventScreen() {
    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inputName">Nazwa wydarzenia</label>
                    <input className="form-control" id="inputName" placeholder="nazwa"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Opis</label>
                    <textarea className="form-control" id="inputDescription" rows="3"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputImageUrl">Url obrazka</label>
                    <input className="form-control" id="inputImageUrl"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDate">Data</label>
                    <input className="form-control" id="inputDate" placeholder="yyyy-MM-dd"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputCity">Miasto</label>
                    <input className="form-control" id="inputCity" placeholder="nazwa"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTicketPrice">Cena biletu w zł</label>
                    <input className="form-control" id="inputTicketPrice"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTicketLimit">Limit biletów</label>
                    <input className="form-control" id="inputTicketLimit"/>
                </div>

                <button type="button" className="btn btn-primary" onClick={addEvent}>Wyślij</button>
            </fieldset>
        </form>
    );
}

//name, description, imageUrl, date, city, active, ticketPrice, ticketLimit
function addEvent() {
    let name = document.getElementById("inputLogin").value;
    let description = document.getElementById("inputDescription").value;
    let imageUrl = document.getElementById("inputImageUrl").value;
    let date = document.getElementById("inputDate").value;
    let city = document.getElementById("inputCity").value;
    let active = true;
    let ticketPrice = parseFloat(document.getElementById("inputTicketPrice").value);
    let ticketLimit = parseFloat(document.getElementById("inputTicketLimit").value);
    axios.post('localhost:8080/login', {
        name: name,
        description: description,
        imageUrl: imageUrl,
        date: date,
        city: city,
        active: active,
        ticketPrice: ticketPrice,
        ticketLimit: ticketLimit
    }).then(function (response) {
        if (response.status === 201) {
            alert("Dodano wydarzenie!")
        } else {
            alert("Wystąpił błąd!");
        }
    }).catch(function (error) {
        alert("Wystąpił błąd!");
    });

}

export default AddEventScreen;
