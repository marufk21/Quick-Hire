import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import JobListings from "./Components/JobListings";
import JobDetails from "./Components/JobDetails";
import JobEmployerForm from "./Components/JobEmployerForm";
import Loader from "./Components/Loader"; // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) for 1 second
    const fetchData = async () => {
      // Perform asynchronous tasks here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Once tasks are completed, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {loading ? ( // Display Loader component during the loading state
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<JobListings />} />
              <Route path="/JobDetails" element={<JobDetails />} />
              <Route path="/JobEmployerForm" element={<JobEmployerForm />} />
            </Routes>
          )}
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
