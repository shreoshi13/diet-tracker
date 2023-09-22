import { useFormik } from "formik";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddFood = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const foodForm = useFormik({
    initialValues: {
      name: "",
      description: "",
      calories: 0,
      user: currentUser._id,
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/food/add", {
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
          text: "Food Item added successfully 😎",
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
      style={{
        backgroundImage: ` linear-gradient(0deg, #00000087, #00000087), url("https://i.pinimg.com/originals/df/fc/a7/dffca74282382587f9b3d221a5c6593c.jpg")`,
        backgroundSize: "cover",
        paddingTop: "50px",
      }}
      className="bg"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}
    >
      <div className="container">
        <div className="w-70">
          <div
            className="card"
            style={{ backgroundColor: "transparent", background: "none" }}
          >
            <div className="card-body">
              <form onSubmit={foodForm.handleSubmit}>
                <div className="row mb-3 text-white">
                  <label htmlFor="name" className="col-sm-2 col-form-label">
                    Enter Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={foodForm.handleChange}
                      value={foodForm.values.name}
                    />
                  </div>
                </div>
                <div className="row mb-3 text-white text-bold">
                  <label htmlFor="title" className="col-sm-2 col-form-label">
                    Enter Description:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      onChange={foodForm.handleChange}
                      value={foodForm.values.description}
                    />
                  </div>
                </div>
                <div className="row mb-3 text-white text-bold">
                  <label htmlFor="duration" className="col-sm-2 col-form-label">
                    Enter Calories:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="calories"
                      onChange={foodForm.handleChange}
                      value={foodForm.values.calories}
                    />
                  </div>
                </div>

                <button
                  disabled={foodForm.isSubmitting}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Food
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddFood;
