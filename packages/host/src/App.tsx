import React from "react";
import ReactDOM from "react-dom";
import Remote from "remote/App";

import "./index.scss";

const App = () => (
  <div className="d-flex mt-10 text-3xl mx-auto max-w-6xl">
    <div>
      <div>Name: host</div>
    </div>
    <div>
      <Remote />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
