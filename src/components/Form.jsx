import React, { useContext } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AppContext } from "../App";

const Form = () => {
  const { handleSubtmit, limit, setLimit, setValue, value } =
    useContext(AppContext);

  return (
    <div className="mt-7">
      <form onSubmit={handleSubtmit} className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="md:w-[85%] border-0 py-3 text-white bg-black rounded-lg px-5 outline-none"
          placeholder="Ejem. Gatos"
        />
        <input
          type="number"
          value={limit}
          min={1}
          max={40}
          onChange={(e) => setLimit(e.target.value)}
          className="md:w-[15%] w-[20%] border-0 py-3 text-white bg-black rounded-lg px-5 outline-none"
        />
        <button type="submit" className="bg-black px-4 rounded-lg py-2">
          <AiOutlineSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;
