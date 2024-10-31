/**
 * Topics Learned (and used):
 *  - Async functions
 *  - Fetch API
 *  - Asynchronous atoms
 */
import { atom, useAtom } from "jotai";
import React, { startTransition, useState } from "react";
import { request } from "../api/apiFunction";

// This is an asynchronous atom, its initial value is the
// data response of an async function that awaits an API fetch promise
// and returns the data in JSON format

const animalNameAtom = atom("shark");

const speciesAtom = atom(async (get) => {
  try {
    const animalName = get(animalNameAtom);
    return await request(animalName);
  } catch (error) {
    console.error(error);
    return [];
  }
});

function ApiAtom(): JSX.Element {
  const [species] = useAtom(speciesAtom);
  const [, setAnimalName] = useAtom(animalNameAtom);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // In React 18 every async state transition must be wrapped
    // by the startTransition, to avoid component substituition
    // by a a loading indicator

    startTransition(() => {
      setAnimalName(inputValue);
    });
    // Passes the new animal name to update the species list
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          marginRight: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          placeholder="Animal"
        />
        <button type="submit">Change animal</button>
      </form>
      <div>
        {species && species.length > 0 ? (
          species.map((specie, index) => <p key={index}>{specie.name}</p>)
        ) : (
          <p>No animals found</p>
        )}
      </div>
    </>
  );
}

export default ApiAtom;
