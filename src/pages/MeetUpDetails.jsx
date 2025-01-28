import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const MeetUpDetails = () => {
  const meetUpId = useParams("meetUpId");
  const { data, loading, error } = useFetch(
    `https://meetup-app-backend-beta.vercel.app/meetups/${meetUpId.meetUpId}`,
  );

  return (
    <>
      <Header />
      <main className="container">
        {data ? (
          <>
            <div className="d-flex justify-content-center align-items-start pt-5">
              <div>
                <h5 className="display-5 fw-semibold">{data.title}</h5>
                <div className="fw-semibold pt-3">Hosted By:</div>
                <p className="fs-5 fw-semibold">{data.host}</p>
                <img
                  className="img-fluid"
                  style={{ height: "40vh", width: "35vw" }}
                  src={data.coverImage}
                  alt={data.title}
                />
                <h3 className="fw-semibold pt-3">Details:</h3>
                <p className="fs-5 fw-normal" style={{ width: "45vw" }}>
                  {data.eventDetails}
                </p>
                <h3>Additional Information</h3>
                <p className="fs-5 fw-normal">
                  <strong>Dress Code: </strong>
                  {data.dressCode ? data.dressCode : "None"}
                </p>
                <p className="fs-5 fw-normal">
                  <strong>Age Restrictions: </strong>
                  {data.isAgeRestricted ? `18 or above` : "None"}
                </p>
                <section className="pt-2 pb-3">
                  <h3>Event Tags:</h3>
                  {data.eventTags &&
                    data.eventTags.map((tag) => {
                      return (
                        <button className="btn btn-dark mx-2 my-2">
                          {tag}
                        </button>
                      );
                    })}
                </section>
              </div>
              <div>
                <div className="card" style={{ width: `20vw` }}>
                  <div className="card-body">
                    <p className="card-text fs-5 fw-normal">{`📅 On ${data.eventDate} from ${data.startingTime} to ${data.closingTime}`}</p>
                    <p className="card-text fs-5 fw-normal">
                      {data.location ? `📍${data.location}` : `Online Event`}
                    </p>
                    <p className="card-text fs-5 fw-normal">
                      Entry Fees:{" "}
                      {data.entryFees === 0 ? `$ Free` : `$ ${data.entryFees}`}
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <h3>Speakers: ({data.speakers.length})</h3>
                  <div className="d-flex pt-3">
                    {data.speakers.map((speaker) => {
                      return (
                        <div
                          className="card mx-2 bg-secondary text-light"
                          style={{ height: "200px", width: "200px" }}
                        >
                          <div className="card-body">
                            <div className="text-center">
                              <img
                                src={speaker.profileImage}
                                alt={speaker.name}
                                style={{
                                  height: "100px",
                                  width: "100px",
                                  borderRadius: "50%",
                                }}
                              />
                              <h5>{speaker.name}</h5>
                              <p className="fw-normal">{speaker.position}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          loading && <h3>Loading</h3>
        )}
      </main>
    </>
  );
};

export default MeetUpDetails;
