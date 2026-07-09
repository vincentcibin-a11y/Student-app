import React from 'react'

const SearchStudent = () => {
  return (
    <div><div><b><u><h5>Search Student</h5></u></b> <br /><br></br>
        <label htmlFor="" className="form-label">Admission Number</label>
        <input type="number" className="form-control" />
        <button className="btn btn-primary">Search</button>
    </div></div>
  )
}

export default SearchStudent