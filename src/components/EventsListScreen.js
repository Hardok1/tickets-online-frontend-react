import React, { useState } from 'react';
import EventScreen from './EventScreen';
import axios from 'axios';

function EventsListScreen() {
    const [events, setEvents] = useState(null);
    if (events == null) {
        axios.get('http://localhost:8080/event/getAllActive')
            .then(response => setEvents(response.data));
    }

    const eventList = (events  || []).map((event, index) => <EventScreen key={index} {...event} />);

    return (
        <div>
            {eventList}
        </div>
    );

}

export default EventsListScreen;
