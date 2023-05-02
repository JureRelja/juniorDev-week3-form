import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Summary from "./Components/Summary";

function App() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Form setData={setData} data={data} setShowData={setShowData} />
        {showData && <Summary data={data} />}
      </div>
    </div>
  );
}

export default App;
