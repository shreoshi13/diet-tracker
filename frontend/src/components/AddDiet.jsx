import React from 'react'

const AddDiet = () => {
  return (
    <div>
        
        <form>
  
  <div className="row mb-3">
    <label htmlFor="name" className="col-sm-2 col-form-label">
      Enter Your Name:
    </label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="name" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="age" className="col-sm-2 col-form-label">
      Enter Your Age:
    </label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="age" />
    </div>
  </div>
  <button type="submit" className="btn btn-primary">
    Add Diet
  </button>
</form>

</div>


  )
}

export default AddDiet