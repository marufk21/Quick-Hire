// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import JobListings from "./Components/JobListings";
import JobDetails from "./Components/JobDetails";
import JobEmployerForm from "./Components/JobEmployerForm";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<JobListings />} />
            <Route path="/JobDetails" element={<JobDetails />} />
            <Route path="/JobEmployerForm" element={<JobEmployerForm />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
