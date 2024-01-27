import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import { AboutCompany } from "./AboutCompany";
import { News } from "./News";
import { Main } from "./Main";

function App() {
  return (
    // <>
    //   App
    //   <Router>
    //     <Routes>
    //       <Route path="/" component={<Main />} />
    //       <Route path="/aboutCompany" component={AboutCompany} />
    //       <Route path="/news/:branch" component={News} />
    //       <Route children={() => <h2>Not Found</h2>} />
    //     </Routes>
    //   </Router>
    // </>

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<News />} />
        <Route path="/contact" element={<AboutCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
