const AllMeetUps = () => {
  return (
    <div className="bg-light" style={{height: "100vh"}}>
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Meetup Events</h1>
          <select class="form-select" style={{ width: "auto" }}>
            <option selected>Select Event Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default AllMeetUps;
