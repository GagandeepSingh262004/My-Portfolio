import React from "react";
import Home from "./Components/Home";
import Loader from "./Components/Loader/Loader";
import { useState, useEffect } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);
  return <div>{loading ? <Loader /> : <Home />}</div>;
};

export default App;
