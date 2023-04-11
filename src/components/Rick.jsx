import React, { useState, useEffect } from "react";
import { BsGenderMale, BsGenderFemale, BsQuestionLg } from "react-icons/bs";
import axios from "axios";

function Rick() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="route-title">Rick n Morty</div>
      <div className="characters">
        {Data?.map((character) => (
          <div className="card" key={character.id}>
            <img src={character.image} alt="" />
            <div className="info">
              <div className="name">
                {character.name}{" "}
                {character.gender === "Male" ? (
                  <BsGenderMale />
                ) : character.gender === "Female" ? (
                  <BsGenderFemale />
                ) : (
                  <BsQuestionLg />
                )}
              </div>
              {/* <div className="gender">{character.gender}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rick;
