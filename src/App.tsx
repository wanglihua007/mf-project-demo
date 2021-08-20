import "./App.css";
import React, { Suspense, useEffect } from "react";
const Chip = React.lazy(() => import("app2/Chip"));
const components = React.lazy(() => import("app2/components")) as any;
function App() {
  useEffect(() => {
    import("app2/components")
      .then((res: any) => {
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
        <Chip />
      </Suspense>
    </div>
  );
}

export default App;
