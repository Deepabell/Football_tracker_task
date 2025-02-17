import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamList from "./components/teamList";
import MatchList from "./components/matchList";


const App = () => {
  return (
    <Router>
      <div>
        <h1>Football Tracker</h1>
        <Routes>
          <Route path="/" element={<h2>Welcome to Football Tracker</h2>} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/matches" element={<MatchList />} />
          {/* Optional: Catch-all route for unknown paths */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
