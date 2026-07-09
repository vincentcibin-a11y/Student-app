import React from 'react'

const AddStudent = () => {
    return (
        <div>AddStudent

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Admission Number</label>
                                <input type="number" name="" id="" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Full Name</label>
                                <input type="text" name="" id="" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Gender</label>
                                <input type="radio" name="Gender" id="Female" className="form-check-input" /><label htmlFor="" className="form-check-label">Female</label><input type="radio" name="Gender" id="Male" className="form-check-input" /><label htmlFor="" className="form-check-label">Male</label></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Section</label>
                                <select name="" id="" className="form-select">
                                    <option value="" className="">Select Section</option>
                                    <option value="" className="">A</option>
                                    <option value="">B</option>
                                    <option value="" className="">C</option></select></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Class/Grade</label><input type="Number" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Parent/Guardian Name</label>
                                <input type="text" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Contact Number</label><input type="number" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Email Adress</label><input type="email" className="form-control" id="" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Address</label><input type="text" className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><button className="btn btn-primary">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddStudent