import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Imgcont from "./component/Imgcont";
import { Route, Routes } from "react-router";
import Single from "./component/Single";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Earth from "./component/Earth";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:date" element={<Single />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/earth" element={<Earth />} />
      </Routes>
    </div>
  );
};

export default App;
