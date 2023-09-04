import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AddDiet from './AddDiet'

const ManageDiet = () => {
  
 



    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch( 'http://localhost:5000/user/getall' );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserList(data);
    };

    const deleteUser = async (id) => {
      const res = await fetch('http://localhost:5000/user/delete/'+id, { method : 'DELETE' });
      console.log(res.status);
      const data = await res.json();
      if(res.status === 200){
        fetchUserData();
        toast.success(data.name +' Deleted Successfully ❗')
      }
    }

    useEffect(() => {
      fetchUserData();
    }, []); 
    const displayUserData = () => {

    return <table className='table table-dark'>
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
              {
                foodItems.map( (user) => ( <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.title}</td>
                  <td>{user.duration}</td>
                  <td>
                    <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
                  </td>
                  <td>
                    <button onClick={ () => { deleteUser(user._id) } } className='btn btn-danger'>Delete</button>
                  </td>
                </tr> ) )
              }
            </tbody>
          </table>
  }

  return (
    <div>
      <div className="container">
          {displayUserData()}
      </div>   
    
    <AddDiet/>
    </div>
  )
}

export default ManageDiet