import React, { useState } from 'react';
import EventScreen from './EventScreen';
import axios from 'axios';

function EventsListScreen() {
    const [events, setEvents] = useState(null);
    if (events == null) {
        axios.get('http://localhost:8080/event/getAllActive')
            .then(response => {
                response.data.sort(compareEvents);
                setEvents(response.data);
            });
    }

    const eventList = (events || []).map((event, index) => <EventScreen key={index} {...event} />);

    return (
        <div>
            {eventList}
        </div>
    );

}

const compareEvents = (a, b) => {
    const dateA = a.date.toUpperCase();
    const dateB = b.date.toUpperCase();

    let comparison = 0;
    if (dateA > dateB) {
        comparison = 1;
    } else if (dateA < dateB) {
        comparison = -1;
    }

    return comparison;
};

export default EventsListScreen;
