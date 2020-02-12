import React, {useState} from "react";
import MyTicketItem from "./MyTicketItem";
import axios from 'axios';

function MyTicketsScreen() {
    const [tickets, setTickets] = useState(null);
    if (tickets == null) {
        axios.get('http://localhost:8080/account/myTickets', {headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}})
            .then(response => setTickets(response.data));
    }

    const ticketList = (tickets || []).map((ticket, index) => <MyTicketItem key={index} {...ticket} />);

    return (
        <div>
            {ticketList}
        </div>
    );

}

export default MyTicketsScreen;
