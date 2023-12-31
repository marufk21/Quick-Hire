import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, selectFilteredJobs, filterJobs, clearFilter } from "../features/jobSlice";
import JobListingCard from "./JobListingCard";
import jobData from "../jobs.json";

const JobListings = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectFilteredJobs);
  const [filterCriteria, setFilterCriteria] = useState({ title: "", location: "", company: "" });

  useEffect(() => {
    dispatch(setJobs(jobData));
  }, [dispatch]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(filterJobs(filterCriteria));
  };

  const handleClearFilter = () => {
    setFilterCriteria({ title: "", location: "", company: "" });
    dispatch(clearFilter());
  };

  return (
    <>
      <div className="container mx-auto p-2 md:p-8">
        <form onSubmit={handleFilterSubmit} className="mb-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-4xl font-bold text-black">JobVista</div>
            <input
              type="text"
              placeholder="Filter by job title"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-600 text-gray-800"
              value={filterCriteria.title}
              onChange={(e) => setFilterCriteria({ ...filterCriteria, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Filter by location"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-600 text-gray-800"
              value={filterCriteria.location}
              onChange={(e) => setFilterCriteria({ ...filterCriteria, location: e.target.value })}
            />
            <input
              type="text"
              placeholder="Filter by company"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-600 text-gray-800"
              value={filterCriteria.company}
              onChange={(e) => setFilterCriteria({ ...filterCriteria, company: e.target.value })}
            />
            <button
              type="submit"
              className="flex-grow bg-green-500 text-white px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleClearFilter}
              className="flex-grow bg-gray-200 text-gray-800 px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray"
            >
              Clear Filters
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobListingCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobListings;
