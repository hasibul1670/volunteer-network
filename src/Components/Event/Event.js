import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { addContext } from '../../App';
import './Event.css';
function Event({ event }) {
  const { name, pic, Id } = event
  const [EventInfo, setEventInfo] = useContext(addContext);
  let history = useHistory();
  function handleCard() {
    setEventInfo(event);
    history.replace("/register");
  }
  return (
    <div class="event card-group col-md-3">
      <div onClick={handleCard} class="card">
        <img src={require(`../../images/${pic}`)} alt="" srcset="" />
        <div class="card-body">
          <h5 class="card-title">{Id}: {name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Event
