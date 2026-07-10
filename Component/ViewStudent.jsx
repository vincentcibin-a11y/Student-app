import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const ViewStudent = () => {
  const [data, changeData] = useState([
    {
      Name: "Cibin",
      admission: "101",
      Class: 12,
    },
    {
      Name: "Rahul",
      admission: "102",
      Class: 11,
    },
    {
      Name: "John",
      admission: "103",
      Class: 10,
    },
    {
      Name: "Anu",
      admission: "104",
      Class: 12,
    },
    {
      Name: "Maria",
      admission: "105",
      Class: 11,
    },
  ]);

  return (
    <div>
      <NavigationBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">
          View Students
        </h2>

        <div className="row">

          {data.map((value, index) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={index}
              >
                <div className="card h-100">

                  <img
                    src="https://s.yimg.com/fz/api/res/1.2/LBiHZGbAPR53CYrUBlZNXA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg"
                    className="card-img-top"
                    alt="Student"
                  />

                  <div className="card-body">

                    <h5 className="card-title">
                      Name: {value.Name}
                    </h5>

                    <p className="card-text">
                      Admission Number: #{value.admission}
                    </p>

                    <p className="card-text">
                      Class/Grade: {value.Class}
                    </p>

                    <button className="btn btn-primary">
                      View Details
                    </button>

                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default ViewStudent;