import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
const Chip = React.lazy(() => import("app2/Chip"));

function App() {
  useEffect(() => {
    import("app2/Chip")
      .then((res: any) => {
        console.log(`Chip`, res);
      })
      .catch((err) => {
        console.log(`Chip-err`, err);
      });
    import("app2/components")
      .then((res: any) => {
        console.log(`res`, res);
        setTimeout(() => {
          res.message.success("加载remote项目成功，我是来自remote的message");
        }, 500);
      })
      .catch((err) => {
        console.log(`components-err`, err);
      });
  }, []);
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        早上好
        <Chip />
      </Suspense>
    </div>
  );
}

export default App;
