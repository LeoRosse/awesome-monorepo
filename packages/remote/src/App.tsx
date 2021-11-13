import React from "react";
import { useArray } from "library";
import { Button, Card } from "./components";

import "./index.scss";

const App: React.FC = () => {
  const { array, set } = useArray([]);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Card>
        <div>{array.join(",")}</div>
        <Button
          label="click to add some number"
          onClick={() => set([1, 2, 3])}
        />
      </Card>
    </div>
  );
};

export default App;