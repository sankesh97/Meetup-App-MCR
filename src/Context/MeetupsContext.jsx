import { createContext, useState } from 'react';
import { MeetupsData } from '../Data/Data';

export const MeetupsContext = createContext();

export const MeetupsProvider = ({ children }) => {
  const [MeetupsState, setMeetupsState] = useState(MeetupsData);
  const [searchState, setSearchState] = useState('');
  const [currentMeetup, setCurrentMeetup] = useState();

  const loadCurrentMeetup = (eventId) => {
    const current = MeetupsState.find((meetup) => meetup.id === eventId);

    setCurrentMeetup(current);
  };

  return (
    <MeetupsContext.Provider
      value={{
        MeetupsState,
        setMeetupsState,
        searchState,
        setSearchState,
        currentMeetup,
        loadCurrentMeetup,
      }}
    >
      {children}
    </MeetupsContext.Provider>
  );
};
