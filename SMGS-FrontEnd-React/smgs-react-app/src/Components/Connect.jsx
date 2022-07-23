import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales ={
  "en-US": require("date-fns/locale/en-US")
}

const localizer =dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
      title: "Exams",
      allDay: true,
      start: new Date(2022,6,12),
      end : new Date(2022,6,16)
  },
  {
    title: "C++ (12-3pm)",
    allDay: true,
    start: new Date(2022,6,12),
    end : new Date(2022,6,12)
},
 {
  title: "Java (9am-12noon)",
  allDay: true,
  start: new Date(2022,6,13),
  end : new Date(2022,6,13)
},
{
  title: "IOT (12-3pm)",
  allDay: true,
  start: new Date(2022,6,14),
  end : new Date(2022,6,14)
},
{
  title: "OS (9am-12noon)",
  allDay: true,
  start: new Date(2022,6,15),
  end : new Date(2022,6,15)
},
  {
    title: "End Sem Brek",
    allDay: true,
      start: new Date(2022,6,18),
      end : new Date(2022,6,25)
  },
  {
    title: "Eid Holiday",
      allDay: true,
        start: new Date(2022,6,10),
        end : new Date(2022,6,10)
    },
  {
  title: "Independence Day",
    allDay: true,
      start: new Date(2022,7,15),
      end : new Date(2022,7,15)
  },
  {
    title: "Rakshabandhan",
      allDay: true,
        start: new Date(2022,7,11),
        end : new Date(2022,7,11)
    },
    {
      title: "Janamashthmi",
        allDay: true,
          start: new Date(2022,7,18),
          end : new Date(2022,7,18)
      },
        {
          title: "Ganesh Chaturthi",
            allDay: true,
              start: new Date(2022,7,31),
              end : new Date(2022,7,31)
          },
          {
            title: "Annual Day",
              allDay: true,
                start: new Date(2022,8,19),
                end : new Date(2022,8,19)
            },
            {
              title: "International Confrence",
                allDay: true,
                  start: new Date(2022,8,15),
                  end : new Date(2022,8,17)
              }
]

const Connect = () => {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)
  
    function handleAddEvents()
    {
      setAllEvents([...allEvents, newEvent])
    }
  

  return (
    <div>

    <div className='AddEvent'>

    <h3>Click to add any new event or holiday</h3>
      <input type="text" placeholder="Enter title" style={{width:"20%", marginRight: "10px"}} 
      value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>

      <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
      selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>

      <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
      selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>

      <button style={{marginTop: "10px"}} onClick={handleAddEvents}>  Add New Event</button>
      
    </div>

      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" 
      style={{height: 600, margin: "50px"}}/>
    </div>
  )
}

export default Connect