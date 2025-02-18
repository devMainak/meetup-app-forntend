import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const AllMeetUps = () => {
  const [dataToShow, setDataToShow] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    "https://meetup-app-backend-beta.vercel.app/meetups",
  );

  useEffect(() => {
    if (data) {
      setDataToShow(data);
    }
  }, [data]);

  const selectEvent = (e) => {
    const { value } = e.target;
    console.log(value);
    console.log(dataToShow);
    if (value && value !== "Both") {
      setDataToShow(data.filter((meetup) => meetup.eventMode == value));
      console.log(dataToShow);
    } else {
      setDataToShow(data);
      console.log(dataToShow);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setDataToShow(
      searchTerm
        ? data.filter(
            (meetup) =>
              meetup.title.toLowerCase().includes(value.toLowerCase) ||
              meetup.eventTags
                .map((tag) => tag.toLowerCase())
                .includes(value.toLowerCase()),
          )
        : data,
    );
  };

  return (
    <>
      <Header searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="bg-light" style={{ height: "100vh" }}>
        <div className="container p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Upcoming Meetups</h1>
            <select
              class="form-select"
              style={{ width: "auto" }}
              onChange={selectEvent}
            >
              <option value="">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <hr />
          <div className="row">
            {dataToShow
              ? dataToShow.map((meetup) => {
                  return (
                    <div key={meetup._id} className="col-md-4">
                      <Link to={`/${meetup._id}`}>
                        <div className="card mt-3">
                          <div className="card text-bg-dark">
                            <img
                              src={meetup.coverImage}
                              className="card-img"
                              alt={meetup.title}
                              style={{ height: "15rem" }}
                            />
                            <div className="card-img-overlay">
                              <h5 className="card-title">{meetup.title}</h5>
                              <p className="card-text">
                                On {meetup.eventDate} at {meetup.startingTime}
                              </p>
                            </div>
                          </div>
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {meetup.eventMode}
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : loading && (
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMeetUps;
