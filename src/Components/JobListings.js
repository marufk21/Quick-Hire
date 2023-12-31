import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobs,
  selectFilteredJobs,
  filterJobs,
  clearFilter,
  selectCurrentPage,
  selectItemsPerPage,
  setCurrentPage,
} from "../features/jobSlice";
import JobListingCard from "./JobListingCard";
import jobData from "../jobs.json";

const JobListings = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectFilteredJobs);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  // Add state for filterCriteria
  const [filterCriteria, setFilterCriteria] = useState({
    title: "",
    location: "",
    company: "",
  });

  useEffect(() => {
    dispatch(setJobs(jobData));
  }, [dispatch]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(filterJobs(filterCriteria));
    dispatch(setCurrentPage(1)); // Reset to the first page when filtering
  };

  const handleClearFilter = () => {
    setFilterCriteria({ title: "", location: "", company: "" });
    dispatch(clearFilter());
    dispatch(setCurrentPage(1)); // Reset to the first page when clearing filter
  };

  // Calculate the range of jobs to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, endIndex);

  return (
    <>
      <div className="bg-slate-700 h-screen mx-auto p-2 md:p-8">
        <form onSubmit={handleFilterSubmit} className="mb-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-4xl font-bold text-white">JobVista</div>
            <input
              type="text"
              placeholder="Filter by job title"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-black text-black bg-gray-300"
              value={filterCriteria.title}
              onChange={(e) =>
                setFilterCriteria({ ...filterCriteria, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Filter by location"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-black text-black bg-gray-300"
              value={filterCriteria.location}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  location: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Filter by company"
              className="flex-grow p-3 border rounded-3xl focus:outline-none focus:border-blue-500 transition duration-300 placeholder-black text-black bg-gray-300"
              value={filterCriteria.company}
              onChange={(e) =>
                setFilterCriteria({
                  ...filterCriteria,
                  company: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="flex-grow bg-green-700 text-white px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleClearFilter}
              className="flex-grow bg-red-500 text-gray-800 px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray"
            >
              Clear Filters
            </button>
          </div>
        </form>

        <div className="bg-slate-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedJobs.map((job) => (
            <JobListingCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {Math.ceil(jobs.length / itemsPerPage)}
          </span>
          <button
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === Math.ceil(jobs.length / itemsPerPage)}
            className="px-4 py-2 bg-blue-500 text-white rounded-full ml-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default JobListings;
