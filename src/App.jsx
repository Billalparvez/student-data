import { useEffect, useState } from "react";
import "../public/Style/output.css";
import Bannar from "./Components/Bannar";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
function App() {
  const [data, setData] = useState([]);
  const six = data.filter((data) => data.class === "six");
  const seven = data.filter((data) => data.class === "seven");
  const eight = data.filter((data) => data.class === "eight");
  // data access
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Form></Form>
      <Student six={six} seven={seven} eight={eight}></Student>
      <Footer></Footer>
    </>
  );
}

export default App;
