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
          <h1>{dietData.title}</h1>
          <h5>{dietData.duration}</h5>

        

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
