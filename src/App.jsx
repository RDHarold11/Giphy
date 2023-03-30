import { useEffect, useState } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

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
      <ToastContainer></ToastContainer>
      <section className="min-w-[100] min-h-[60vh] mx-auto flex items-center justify-center text-white">
        <div className="md:w-[700px]">
          <h2 className="bold text-5xl">Giphy APP</h2>
          <p className="md:text-xl my-3">
            Hover the gifs to copy the gifs's url or to download them
          </p>
          <div className="mt-7">
            <form onSubmit={handleSubtmit} className="flex gap-2">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="md:w-[90%] border-0 py-3 text-white bg-black rounded-lg px-5 outline-none"
                placeholder="Ejem. Gatos"
              />
              <input
                type="number"
                value={limit}
                min={1}
                max={40}
                onChange={(e) => setLimit(e.target.value)}
                className="md:w-[10%] w-[15%] border-0 py-3 text-white bg-black rounded-lg px-5 outline-none"
              />
              <button type="submit" className="bg-black px-4 rounded-lg py-2">
                <AiOutlineSend size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Gifs data={data}></Gifs>
    </>
  );
}

export default App;
