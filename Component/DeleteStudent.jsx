import React from 'react'

const DeleteStudent = () => {
  return (
    <div><h5>Delete Student</h5> <br />
        <label htmlFor="" className="form-label">Admission/Number</label>
        <input type="number" className="form-control" />
        <button className="btn btn-primary">Delete</button>
    </div>
  )
}

export default DeleteStudent