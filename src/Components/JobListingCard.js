import React from "react";
import { useNavigate } from "react-router-dom";

const JobListingCard = ({ job }) => {
  const navigate = useNavigate();

  const JobDetails = () => {
    navigate("/JobDetails");
  };
  const JobEmployerForm = () => {
    navigate("/JobEmployerForm");
  };
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-3">
      <h2 className="text-2xl font-bold mb-3 text-neutral-100">{job.title}</h2>
      <p className="text-white mb-1 text-base">
        {job.company} - {job.location}
      </p>
      <p className="text-white mb-4 text-sm">{job.responsibilities}</p>

      <div className="flex justify-between items-center">
        <div onClick={JobDetails} className="text-green-500 hover:underline focus:outline-none focus:underline">
          View Details
        </div>

        <button
          onClick={JobEmployerForm}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-600  focus:outline-none focus:shadow-outline-blue"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobListingCard;
