import { useContext, useState } from 'react';
import { MeetupsContext } from '../Context/MeetupsContext';
import { NavLink, useNavigate } from 'react-router-dom';

const Listing = () => {
  const navigate = useNavigate();
  const { MeetupsState, searchState } = useContext(MeetupsContext);
  const eventOptions = ['Online', 'Offline', 'Both'];
  const [eventState, setEventState] = useState('Both');

  const navigateToSingle = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <div className='row my-5'>
        <div className='col d-flex justify-content-start'>
          <h1>Meetup Events</h1>
        </div>
        <div className='col d-flex justify-content-end'>
          <select
            defaultValue={eventState}
            onChange={(event) => {
              setEventState(event.target.value);
            }}
            className='form-select'
          >
            {eventOptions.map((eventType) => (
              <option key={eventType} value={eventType}>
                {eventType} Event
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='row g-5'>
        {MeetupsState.length ? (
          MeetupsState.filter((meetup) =>
            eventState === 'Both'
              ? true
              : eventState === 'Online'
              ? meetup.eventType === 'Online'
              : meetup.eventType === 'Offline'
          )
            .filter(
              (meetup) =>
                meetup.title
                  .toLowerCase()
                  .includes(searchState.toLowerCase()) ||
                meetup.eventTags
                  .join('')
                  .toLowerCase()
                  .includes(searchState.toLowerCase())
            )
            .map(
              ({
                id,
                title,
                eventStartTime,
                eventEndTime,
                eventType,
                eventThumbnail,
              }) => (
                <div
                  onClick={() => {
                    navigateToSingle(id);
                  }}
                  key={id}
                  className='col-4'
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className='rounded d-flex p-2 align-items-start'
                    style={{
                      height: '300px',
                      width: '100%',
                      backgroundImage: `url(${eventThumbnail})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <span className='badge bg-white text-dark '>
                      {eventType} Event
                    </span>
                  </div>
                  <p className='text-secondary'>{`${new Date(
                    eventStartTime
                  ).toUTCString()}-${new Date(eventEndTime).toUTCString()}`}</p>
                  <h5>{title}</h5>
                </div>
              )
            )
        ) : (
          <p>There are no Meetups Here &#128546; </p>
        )}
      </div>
    </>
  );
};
export default Listing;
