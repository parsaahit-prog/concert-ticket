import React from "react";
import Routers from "./routes/Routers";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <Routers />
      <ToastContainer
        rtl
        transition={Slide}
        style={{ zIndex: "20000", fontFamily: "YekanBakhRegular" }}
      />
    </React.Fragment>
  );
}

export default App;
