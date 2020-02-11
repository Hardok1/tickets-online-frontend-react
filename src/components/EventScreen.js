import React from "react";

function EventScreen() {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header">Nazwa</div>
            <div className="card-body">
                <p className="card-text">Obrazek</p>
                <p className="card-text">Opis</p>
                <p className="card-text">Data</p>
                <p className="card-text">Miasto</p>
                <p className="card-text">Data</p>
                <p className="card-text">Cena biletu: <span>cena</span></p>
                <p className="card-text">Ilosc dostepnych biletow: <span>Ile zostalo</span> / <span> Jaki limit</span></p>
                <button type="button" className="btn btn-primary">Kup bilet</button>
            </div>
        </div>
    );

}


const divStyle = {
    maxWidth: '20rem;'
};
export default EventScreen;
