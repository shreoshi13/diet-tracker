import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import useUserContext from "../UserContext";

const LoginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is Required')
  }
);

const Login = () => {

  const { setLoggedIn } = useUserContext();

  // Initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice!',
          text: 'Logged in Successfully 😎'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        resetForm();

      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or Password is incorrect 😢'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }

      // write code to submit form to server
    },

    validationSchema: LoginSchema
  });

  return (
    <motion.div
      className="bg"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 50, damping: 10 }}
    >
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        <>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: 185 }}
                            alt="logo"
                          />
                          <h4 className="mt-1 mb-5 pb-1">Login Form</h4>
                        </>

                        <hr />
                      </div>
                      <form onSubmit={loginForm.handleSubmit}>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <label htmlFor="">Email Address</label>
                          <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{loginForm.errors.email}</span>


                          <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
                        </div>
                        <label htmlFor="">Password</label>
                        <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{loginForm.errors.password}</span>
                        <input type="password" className="form-control mb-3" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

                        <button className="btn btn-primary w-100 mt-5">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;