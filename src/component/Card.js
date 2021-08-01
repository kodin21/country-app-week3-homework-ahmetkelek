import React, { useEffect, useState } from "react";
import axios from 'axios';


const Card=()=> {

   const [country,setCountry] =  useState([]);
    
   useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, [country]);
  
        return(

            <div className="container">
            
            <div className="row">
              
              {country.map((countries) => (
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body w-100">
                        <img
                        src={countries.flag}
                        alt={countries.name}
                        style={{width:200, height:120,  marginLeft: '.5rem'}}
                        />
                      <h6 className="card-title"><b>{countries.name}</b></h6>
                      <h6 className="card-title">Başkent: <u>{countries.capital}</u></h6>
                      <h6 className="card-title">Bölge: <b>{countries.region}</b></h6>
                      <h6 className="card-title">Nüfus: <b>{countries.population}</b></h6>
                      <h6 className="card-title">Konuşulan Dil: <b>{countries.demonym}</b></h6>

                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

        )
 
}

export default Card;
