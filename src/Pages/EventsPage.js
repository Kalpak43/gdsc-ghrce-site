import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import events from "../constants/events";

const EventsPage = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [currEvents, setCurrEvents] = useState([]);

  const eventsArr1 = events;

  useEffect(() => {
    const newPastEvents = eventsArr1
      .filter((event) => new Date(event.endDate) <= new Date())
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    setPastEvents(newPastEvents);

    const newCurrEvents = eventsArr1
      .filter((event) => new Date(event.endDate) > new Date())
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    setCurrEvents(newCurrEvents);
  }, [eventsArr1]);

  const [current, setCurrent] = useState(true);

  return (
    <div className="EventsPage z-10">
      <div className="sticky top-0 left-0 z-[-1]">
        <div className="team-header pt-40 text-center relative">
          <div className="overlay"></div>
          <h1 className="font-bold text-4xl relative z-10">Events</h1>
        </div>
      </div>
      <div className="Background" id="past">
        <div className="flex justify-center flex-wrap gap-4 text-lg py-4">
          <small
            className="badges badges-1"
            data-key="0"
            onClick={() => setCurrent(true)}
          >
            Upcoming / Ongoing Events
          </small>
          <small
            className="badges badges-2"
            data-key="1"
            onClick={() => setCurrent(false)}
          >
            Past Events
          </small>
        </div>

        {current ? (
          <section className="ongoing-events">
            <h2 className="">
              Upcoming / Ongoing Events
            </h2>
            <div className="my-8 flex justify-center text-center gap-16 py-4 flex-wrap">
              {currEvents.length > 0 ? (
                currEvents.map((event, i) => <EventCard data={{...event, key: 100+i}} />)
              ) : (
                <p className="text-center mx-auto">
                  No Upcoming Events.
                  <br />
                  Follow us to stay updated.
                </p>
              )}
            </div>
          </section>
        ) : (
          <section className="past-events">
            <h2 className="">Past Events</h2>
            <div className="my-8 flex justify-center gap-16 py-4 flex-wrap">
              {pastEvents.length > 0 ? (
                pastEvents.map((event, i) => <EventCard data={{...event, key: 200+i}} />)
              ) : (
                <p className="text-center mx-auto">
                  No Past Events.
                  <br />
                  Follow us to stay updated.
                </p>
              )}
            </div>
          </section>
        )}

        <section className="text-center p-3">
          <a
            href="https://gdsc.community.dev/gh-raisoni-college-of-engineering-nagpur/"
            className="btn"
          >
            See More
          </a>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;
