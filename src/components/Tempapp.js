import React, { useEffect, useState } from 'react'
import "./css/style.css";
// import useSound from 'use-sound';
// import Rain from "../components/rain.mp3"
// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=81f47ce382b0c34f6cbd72556957582e

const Tempapp = () => {
    const [city , setcity] =useState(null);
    const [search , setSearch] = useState("Mumbai");
    // const [latsRain] =  useSound(Rain);

    // useEffect(()=>{
    //   latsRain();
    // })

    useEffect(()=>{
        const fetchApi = async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=81f47ce382b0c34f6cbd72556957582e`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(response);
            setcity(resJson.main);
        };
        fetchApi();
    },[search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
            <input 
                type="search"
                value={search}
                className="inputFeild" 
                onChange={(event)=>{
                    setSearch(event.target.value)
                }}    
            />
        </div>
        {!city ?(
                    <p className='errorMsg'>No Data Fount</p>
                ) :(
            <div>
                <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i><br />
                {search}
                </h2>
                <h1 className="temp">
                {city.temp}°Cel
                </h1>
                <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel  <br/> Max : {city.temp_max}°Cel 
                </h3>

        </div>  

        <div className="wave -one"></div>      
        <div className="wave -two"></div>      
        <div className="wave -three"></div> 
        </div>
        ) 

     }
   </div>
    </>
  );
}

export default Tempapp;
