import "./App.css";
import React, { Suspense } from "react";
const Chip = React.lazy(() => import("app2/Chip"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        <Chip />
      </Suspense>
    </div>
  );
}

export default App;
