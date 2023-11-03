import { ChangeEvent, useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    //verbose way for change state of one field of an object
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email,
    });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    //slightly concise way using spread on current state variable
    setPerson({
      ...person, //copy the old fields
      lastName: e.target.value, //but override this one
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <div className="w-fit flex flex-col p-4 border border-green-500">
      <label>
        First name:{" "}
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:{" "}
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email: <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p className="pt-3">
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
