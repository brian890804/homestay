import { Suspense, lazy, useState } from "react";
import JudeEnterWindow from "./_basic/other/JudeEnterWindow";
import JudeWheel from "./app/module/Event/JudeWheel";
import { HashLoader } from "react-spinners";
import "./_basic/css/global.css";
import "./index.css";
import "./app/module/components/css/global.scss";
const Routes = lazy(() => import("./app/module/pages/Routes"));
function App() {
  const [show, set] = useState(false);
  JudeEnterWindow();
  JudeWheel(set);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        userSelect: "none",
        minHeight: "100vh",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              placeContent: "center",
              backgroundColor: "RGB(255, 255, 255, 0.87)",
            }}
          >
            <HashLoader color="#986795" size={50} />
          </div>
        }
      >
        <Routes show={show} />
      </Suspense>
    </div>
  );
}

export default App;
