import { ChangeEvent, useState } from "react";

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  //here we use dynamic property name for our state object for consise state change
  //this works because we named our <input> html elem's name attribute the same as
  //our state object's properties
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="w-fit flex flex-col p-4 border border-green-500">
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p className="pt-3">
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
