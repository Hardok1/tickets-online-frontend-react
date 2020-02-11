import React from "react";


function MyTicketItem() {
    return (
        <div className="card border-primary mb-3" style={divStyle}>
            <div className="card-header">Nazwa
                <div><button type="button" className="btn btn-primary">Pokaż szczegóły wydarzenia</button></div>
            </div>
        </div>
    );

}


const divStyle = {
    maxWidth: '20rem;'
};
export default MyTicketItem;
