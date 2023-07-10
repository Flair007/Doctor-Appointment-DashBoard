import { React, useState, useEffect } from "react";

let doctorsJson = [
  {
    id: 1,
    name: "Doc1",
    speciality: "Orthopaedic",
    timings: "9-11 AM",
  },
  {
    id: 2,
    name: "Doc2",
    speciality: "Dentist",
    timings: "3-6 PM",
  },
  {
    id: 3,
    name: "Doc3",
    speciality: "Orthopaedic",
    timings: "11-1 PM",
  },
  {
    id: 4,
    name: "Doc4",
    speciality: "Dermatology",
    timings: "2-5 PM",
  },
];
const optionsList = ["Orthopaedic", "Dentist", "Dermatology"];

export default function DoctorDashBoard() {
  const [selectedOption, setSelectedOption] = useState("Dentist");
  const [data, setData] = useState([]);

  const refine = (dump) => {
    const newData = dump.filter((doctor) => {
      return doctor.speciality === selectedOption;
    });
    setData(newData);
  };

  useEffect(() => {
    refine(doctorsJson);
  }, [selectedOption]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="App">
      <h2>Doctor DashBoard</h2>
      <select onChangeCapture={handleChange}>
        <option key={0}>Select a Doctor</option>
        {optionsList.map((opt, i) => {
          return (
            <option value={opt} key={i}>
              {opt}
            </option>
          );
        })}
      </select>
      {data.map((doctor, i) => {
        return (
          <div key={i}>
            <h3>{doctor.name}</h3>
            <h2>{doctor.timings}</h2>
            <h3>{doctor.speciality}</h3>
          </div>
        );
      })}
    </div>
  );
}
