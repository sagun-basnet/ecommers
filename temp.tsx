import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./App.css";
import ScrollAnima from "./components/ScrollAnima";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10);
  // }, []);

  return (
    // <div className="App">
    //   {loading ? (
    //     <ClimbingBoxLoader
    //       color="#4caf50"
    //       loading={loading}
    //       size={30}
    //       aria-label="Loading Spinner"
    //       data-testid="loader"
    //     />
    //   ) : (
    //     <Loading />
    //   )}
    // </div>
    <>
      <Loading />
      <h1>hello, Whats up!</h1>
    </>
  );
}

export default App;
