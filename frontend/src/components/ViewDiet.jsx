import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDiet = () => {
  const { id } = useParams();

  const [dietData, setDietData] = useState(null);

  const fetchDeitById = async () => {
    const res = await fetch("http://localhost:5000/diet/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setDietData(data);
  };
  useEffect(() => {
    fetchDeitById();
  }, []);

  const displayDietDetails = () => {
    if (dietData !== null) {
      return (

        <div>
          <h1 className="text-center text-decoration-underline">
            Details of your diet
          </h1>
          <div className="card">
            <h3 className="text-center"><u>Title of your Diet :</u> {dietData.title}</h3>
            <h3 className="text-center"><u>Duration of your Diet :</u> {dietData.duration}</h3>
          </div>


        </div>
      );
    }
  };

  return <div>
  <div className="container">
      {displayDietDetails()}
  </div>
</div>;
};




export default ViewDiet;
