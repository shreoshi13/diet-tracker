import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import AddDiet from "./AddDiet";
import AddFood from "./AddFood";

const ManageDiet = () => {
  const [foodItems, foodItemsList] = useState([]);

  const [showAddDeit, setShowAddDeit] = useState(false);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/diet/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    foodItemsList(data);
  };

  const deleteUser = async (id) => {
    const res = await fetch("http://localhost:5000/diet/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    const data = await res.json();
    if (res.status === 200) {
      fetchUserData();
      toast.success(data.name + " Deleted Successfully ❗");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const displayUserData = () => {
    return (
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>title</th>
            <th>Duration</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.title}</td>
              <td>{user.duration}</td>
              <td>
                <Link
                  to={"/updateuser/" + user._id}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://lyonsdenfitness.co.uk/wp-content/uploads/2020/03/vegetables-background-000046272610_full1.jpg")`,
        backgroundSize: "cover",
        paddingTop: "120px",
        minHeight: "120vh",
      }}
      className="bg"
    >
      <>
        {/* Button trigger modal */}

        {/* Modal */}
        <div
          className="modal fade modal-lg"
          id="add-diet-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add New Diet
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">{showAddDeit && <AddDiet update={showAddDeit} setShowAddDeit={setShowAddDeit} />}</div>
            </div>
          </div>
        </div>

        <div
          className="modal fade modal-lg"
          id="add-food-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add New Food
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <AddFood />
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add-diet-modal"
          onClick={() => setShowAddDeit(true)}
        >
          Add New Diet
        </button>
        <button
          type="button"
          className="btn btn-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#add-food-modal"
        >
          Add Food
        </button>
        {displayUserData()}
      </div>
    </div>
  );
};

export default ManageDiet;
