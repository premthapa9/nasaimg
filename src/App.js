import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Imgcont from "./component/Imgcont";
import { Route, Routes } from "react-router";
import Single from "./component/Single";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Earth from "./component/Earth";
import Mars from "./component/Mars";
import Marsimg from "./component/Marsimg";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:date" element={<Single />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/mars/:id" element={<Marsimg />} />
      </Routes>
    </div>
  );
};

export default App;
