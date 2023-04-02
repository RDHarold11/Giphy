import React, { useContext, useState } from "react";
import { AiOutlineDownload, AiFillCopy } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../App";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";

const Gifs = () => {
  const { data } = useContext(AppContext);

  const notify = (url) => {
    toast.success("Coppied to clipboard!");
    navigator.clipboard.writeText(url);
  };

  const handleDownload = (url, name) => {
    saveAs(url, name);
    toast.success("Gif downloaded!");
  };

  return (
    <main className="max-w-[1400px] w-[100vw] mx-auto pt-10 px-5">
      <div className="grid md:grid-cols-4 items-center justify-evenly mx-auto gap-3">
        {data.map((item) => {
          const { title, images, id } = item;
          return (
            <div className="w-[100%] h-[200px] card" key={id}>
              <img
                className="w-full h-full rounded-sm"
                src={images.original.url}
                alt={title}
              />
              <div className="details flex justify-end items-end gap-2 details">
                <AiFillCopy
                  className="mb-2"
                  color="white"
                  cursor="pointer"
                  size={40}
                  onClick={() => notify(images.original.url)}
                />
                <AiOutlineDownload
                  className="mb-2 "
                  color="white"
                  cursor="pointer"
                  size={40}
                  onClick={() => handleDownload(images.original.url, title)}
                />
              </div>
              <ToastContainer></ToastContainer>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Gifs;
