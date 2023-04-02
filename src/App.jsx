import { createContext, useState } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import Form from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(25);
  const [value, setValue] = useState("Gatos");

  const fetchData = async () => {
    if (!value) {
      toast.error("Enter a value!");
    } else {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=SD4rI0H4mToR9CS4TD7qc3FGKNNOhXn7&q=${value}&limit=${limit}&offset=0&rating=g&lang=es`
      );
      const info = await response.json();
      setData(info.data);
    }
  };

  const handleSubtmit = (e) => {
    e.preventDefault();
    fetchData();
    setValue("");
  };

  return (
    <>
      <AppContext.Provider
        value={{ handleSubtmit, value, limit, setLimit, setValue, data }}
      >
        <ToastContainer></ToastContainer>
        <section className="min-w-[100] min-h-[60vh] mx-auto flex items-center justify-center text-white">
          <div className="md:w-[700px]">
            <h2 className="bold text-5xl">Giphy APP</h2>
            <p className="md:text-xl my-3">
              Hover the gifs to copy the gifs's url or to download them
            </p>
            <Form></Form>
          </div>
        </section>
        <Gifs></Gifs>
      </AppContext.Provider>
    </>
  );
}

export default App;
