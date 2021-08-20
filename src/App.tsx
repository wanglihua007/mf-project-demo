import "./App.css";
import React, { Suspense, useEffect } from "react";
const Chip = React.lazy(() => import("app2/Chip"));
const components = React.lazy(() =>
  import("app2/components").then((res) => res)
);
const { message } = components as any;
function App() {
  useEffect(() => {
    import("app2/components")
      .then((res: any) => {
        console.log(`components-res`, res.message.info);
        res.message.error("sssss");
      })
      .catch((err) => {
        console.log(`components-err`, err);
      });
  }, []);
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        <button
          onClick={() => {
            message.error("sssss");
          }}
        >
          点我
        </button>
        <Chip />
      </Suspense>
    </div>
  );
}

export default App;
