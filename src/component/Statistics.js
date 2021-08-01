import React, { useState, useEffect } from "react";
import axios from "axios";

 const Statistics=()=> {
  const data = [];
  const tempLang = [];
  const tempCount = [];
  const [languages, setlanguages] = useState([]);
  const [count, setcount] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
        response.data.forEach((i) => {
        i.languages.forEach((language) => {
          data.push(language.name);
        });
      });
      const sort = data.sort();
      let counter = 1;

      for (let index = 0; index < data.length; index++) {
        if (sort[index] !== sort[index + 1]) {
          tempLang.push(sort[index]);
          tempCount.push(counter);
          counter = 0;
        } else {
          counter = counter + 1;
        }
      }
      setlanguages(tempLang);
      setcount(tempCount);
    });
  });

  return (
    <div className="container">
      <div className="row">
     <div className="card">
        {languages.map((a, index) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-start mt-4" key={index}>
              <div className="ms-2">
                <div className="fst-normal">{a} </div>
              </div>
              <span className="bg-success rounded-pill">
                {count[index]+1}  dil konuşuluyor.
              </span>
            </li>
          );
        })}
     </div>
     </div>
    </div>
  );
}

export default Statistics;