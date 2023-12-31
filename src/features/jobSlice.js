import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], filteredJobs: [] },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    filterJobs: (state, action) => {
      const { title, location, company } = action.payload;

      // Implement filtering logic based on job title, location, and company
      state.filteredJobs = state.jobs.filter(job => {
        const titleMatch = title ? job.title.toLowerCase().includes(title.toLowerCase()) : true;
        const locationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
        const companyMatch = company ? job.company.toLowerCase().includes(company.toLowerCase()) : true;

        // Return true only if all specified criteria match
        return titleMatch && locationMatch && companyMatch;
      });
    },
    clearFilter: (state) => {
      state.filteredJobs = state.jobs;
    },
  },
});

export const { setJobs, filterJobs, clearFilter } = jobSlice.actions;
export const selectJobs = (state) => state.jobs.jobs;
export const selectFilteredJobs = (state) => state.jobs.filteredJobs;

export default jobSlice.reducer;
