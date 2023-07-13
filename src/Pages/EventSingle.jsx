import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MeetupsContext } from '../Context/MeetupsContext';

const EventSingle = () => {
  const { currentMeetup, loadCurrentMeetup } = useContext(MeetupsContext);
  const { eventId } = useParams();
  useEffect(() => {
    loadCurrentMeetup(eventId);
  }, []);

  return (
    <>
      {currentMeetup ? (
        <div className='row g-5'>
          <div className='col-md-7 text-start'>
            <h1>{currentMeetup.title}</h1>
            <p>
              Hosted By: <br />
              {currentMeetup.hostedBy}
            </p>
            <img src={currentMeetup.eventThumbnail} className='img-fluid' />
            <h3>Details</h3>
            <p>{currentMeetup.eventDescription}</p>
            <br />
            <h2>Additional Informaiton: </h2>
            <p>
              <strong>Dress Code:</strong>{' '}
              {currentMeetup.additionalInformation.dressCode}
            </p>
            <p>
              <strong>Age Restriction: </strong>{' '}
              {currentMeetup.additionalInformation.ageRestrictions}
            </p>
            <br />
            <h2>Event Tags:</h2>
            <h3>
              {currentMeetup.eventTags.map((tag) => (
                <span
                  key={tag}
                  className='badge mx-1 text-capitalize red-color-bg'
                >
                  {tag}
                </span>
              ))}
            </h3>
          </div>
          <div className='col-md-5'>
            <div className='card mb-5'>
              <div className='card-body'>
                <div className='d-flex'>
                  <i className='bi bi-clock mx-2'></i>
                  <p className='text-start'>{`${new Date(
                    currentMeetup.eventStartTime
                  ).toDateString()} at ${new Date(
                    currentMeetup.eventStartTime
                  ).toTimeString()} to ${new Date(
                    currentMeetup.eventEndTime
                  ).toDateString()} at ${new Date(
                    currentMeetup.eventEndTime
                  ).toTimeString()} `}</p>
                </div>
                <div className='d-flex'>
                  <i className='bi bi-geo-alt-fill mx-2'></i>
                  <p className='text-start'>
                    {currentMeetup.location}
                    <br />
                    {currentMeetup.address}
                  </p>
                </div>
                <div className='d-flex'>
                  <i className='mx-2'>₹</i>
                  <p className='text-start'>{currentMeetup.price}</p>
                </div>
              </div>
            </div>
            <>
              <h4 className='text-start'>
                Speakers: ({currentMeetup.speakers.length})
              </h4>
              <div className='row'>
                {currentMeetup.speakers.map((speaker) => (
                  <div key={speaker.name} className='col-6 p-1'>
                    <div className='card'>
                      <div className='card-body'>
                        <img
                          src={speaker.image}
                          className='img-fluid rounded-circle'
                          style={{ height: '72px', width: '72px' }}
                        />
                        <br />
                        <p>{speaker.name}</p>

                        <h6>{speaker.designation}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        </div>
      ) : (
        <p>There is an issue with fetching details</p>
      )}
    </>
  );
};

export default EventSingle;
