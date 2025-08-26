import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("sidebars")) || []
  );

  useEffect(() => {
    localStorage.setItem("sidebars", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let person = {
      fname,
      lname,
      job,
      age: Number(age),
      id: Date.now(),
    };
    setData((prev) => [...prev, person]);
    setFName("");
    setLName("");
    setJob("");
    setAge("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="sidebar">
      <div>
        <form onSubmit={handleSubmit} className="form" action="">
          <div className="inputs">
            <input
              required
              value={fname}
              onChange={(event) => setFName(event.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lname}
              onChange={(event) => setLName(event.target.value)}
              type="text"
              placeholder="Last name"
            />
            <input
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="age"
            />
            <input
              required
              value={job}
              onChange={(e) => setJob(e.target.value)}
              type="text"
              placeholder="job"
            />
          </div>
          <button>Login</button>
        </form>
        <div className="info">
          <div className="sth"></div>
          <div className="infos">
            <div className="card">
              <div className="img">{fname[0]}</div>
              {data.length ? (
                data?.map((item) => (
                  <div key={item.id}>
                    <h3>First Name: {item.fname}</h3>
                    <h3>Last Name: {item.lname}</h3>
                    <h3> Age: {item.age}</h3>
                    <h3> Job: {item.job}</h3>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                    <button>Update</button>
                    <hr />
                  </div>
                ))
              ) : (
                <div>Empty</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
