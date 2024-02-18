import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], filteredJobs: [], currentPage: 1, itemsPerPage: 5 },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    filterJobs: (state, action) => {
      const { title, location, company } = action.payload;
      state.currentPage = 1; 
      state.filteredJobs = state.jobs.filter(job => {
        const titleMatch = title ? job.title.toLowerCase().includes(title.toLowerCase()) : true;
        const locationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
        const companyMatch = company ? job.company.toLowerCase().includes(company.toLowerCase()) : true;
        return titleMatch && locationMatch && companyMatch;
      });
    },
    clearFilter: (state) => {
      state.filteredJobs = state.jobs;
      state.currentPage = 1; // Reset to the first page when clearing filter
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setJobs, filterJobs, clearFilter, setCurrentPage } = jobSlice.actions;
export const selectJobs = (state) => state.jobs.jobs;
export const selectFilteredJobs = (state) => state.jobs.filteredJobs;
export const selectCurrentPage = (state) => state.jobs.currentPage;
export const selectItemsPerPage = (state) => state.jobs.itemsPerPage;

export default jobSlice.reducer;
