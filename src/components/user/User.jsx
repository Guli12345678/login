import React, { useState, useEffect } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let pet = {
      name,
      age: Number(age),
      id: Date.now(),
    };
    setData((prev) => [...prev, pet]);
    setName("");
    setAge("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit} className="form" action="">
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Full name"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <button>Submit</button>
      </form>
      <div>
        {data.length ? (
          data?.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.age}</h3>
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button>update</button>
              <hr />
            </div>
          ))
        ) : (
          <div>empty</div>
        )}
      </div>
    </div>
  );
};
export default User;
