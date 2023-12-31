import React, { useState } from "react";

const EmployerPostingForm = () => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobDescription: "",
    requirements: "",
    applicationDeadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data:", jobData);
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>

      <label className="block mb-2" htmlFor="jobTitle">
        Job Title:
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="companyName">
        Company Name:
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={jobData.companyName}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="location">
        Location:
        <input
          type="text"
          id="location"
          name="location"
          value={jobData.location}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </label>

      <label className="block mb-2" htmlFor="jobDescription">
        Job Description:
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={jobData.jobDescription}
          onChange={handleInputChange}
          rows="4"
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </label>

      <label className="block mb-2" htmlFor="requirements">
        Requirements:
        <textarea
          id="requirements"
          name="requirements"
          value={jobData.requirements}
          onChange={handleInputChange}
          rows="4"
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </label>

      <label className="block mb-2" htmlFor="applicationDeadline">
        Application Deadline:
        <input
          type="date"
          id="applicationDeadline"
          name="applicationDeadline"
          value={jobData.applicationDeadline}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Post Job
      </button>
    </form>
  );
};

export default EmployerPostingForm;
