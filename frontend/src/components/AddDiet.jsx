import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';


const AddDiet = () => {
  const navigate = useNavigate();

  const [foodItems, setFoodItems] = useState([]);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchFoodData = async () => {
    const res = await fetch("http://localhost:5000/food/getbyuser/"+currentUser._id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setFoodItems(data);
  };

  useEffect(() => {
    fetchFoodData();
  }, [])
  

  const addDiet = useFormik({
    initialValues: {
      title: '',
      duration: '',
      foodList: [],
      user: '',
      createdAt: new Date(),
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/diet/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "GoodJob!",
          text: "Diet added successfully 😎",
        });
        Navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "error occurred",
        });
      }
    },
  });

  return (
    <motion.div
      
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 50, damping: 10 }}
    >
      <div className='container'>
        <div className="col-md-12">
          <div className="card"  style={{backgroundColor:'transparent',background:'none'}}>
            <div className="card-body">

              <form onSubmit={addDiet.handleSubmit}>

                <div className="row mb-3">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Enter Name:
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="user" onChange={addDiet.handleChange}
                      value={addDiet.values.name} />
                  </div>
                </div>
                <div className="row mb-3 text-white text-bold">
                  <label htmlFor="title" className="col-sm-2 col-form-label">
                    Enter Title:
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" onChange={addDiet.handleChange}
                      value={addDiet.values.title} />
                  </div>
                </div>
                <div className="row mb-3 text-white text-bold">
                  <label htmlFor="duration" className="col-sm-2 col-form-label">
                    Enter Duration:
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="Duration" />
                  </div>
                </div>
                <div className="row mb-3 text-white text-bold">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Select FoodList:
                  </label>
                  <div className="col-sm-10 text-white text-bold">
                    <select className="form-control">
                      {foodItems.map((item) => {
                        return <option>{item.name}</option>
                      })}
                      
                    </select>
                  </div>

                  
                </div>
                <button disabled={addDiet.isSubmitting} type="submit" className="btn btn-primary">
                  Add Diet
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default AddDiet