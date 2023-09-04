import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddDiet = () => {
  const navigate = useNavigate();

  const [foodItems, setFoodItems] = useState([]);



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

  const addFoodItem = (e) => {
    if(!e.target.value) return 
    if(e.code === 'Enter'){
      setFoodItems([ ...foodItems, e.target.value ])
      e.target.value = '';
    }
  }

  return (
    <div>

      <form onSubmit={addDiet.handleSubmit}>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Enter Your Name:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="user"  onChange={addDiet.handleChange}
                value={addDiet.values.name} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Enter Title:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title"  onChange={addDiet.handleChange}
                value={addDiet.values.title} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="duration" className="col-sm-2 col-form-label">
            Enter Your Duration:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Duration" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Enter Your FoodList:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" onKeyDown={addFoodItem} />
          </div>

          <h4>Your Food Items</h4>
          {
            foodItems.map((item, index) => {
              return <div>
                <p>{index+1}. {item}</p>
              </div>
            })
          }
        </div>
        <button disabled={addDiet.isSubmitting} type="submit" className="btn btn-primary">
          Add Diet
        </button>
      </form>

    </div>


  )
}

export default AddDiet