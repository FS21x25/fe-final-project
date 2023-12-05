import React from "react";
import { useLocation } from "react-router-dom";

export default function DesEvent() {
  const location = useLocation();
  const imageData = location.state && location.state.imageData;

  const colorBackground = { backgroundColor: '#ABBED1' };
  const colorButton = { backgroundColor: '#07689F', color: 'white' };

  return (
    <div className="mx-4">
      <div style={colorBackground} className='max-w-2xl mx-auto px-10 mt-6 flex flex-col rounded-2xl'>
        {imageData && (
          <div className="flex justify-center items-center">
            <div className="w-3/2 my-8">
              <img
                className="w-full h-auto object-cover object-center rounded-xl"
                src={imageData.img}
                alt="Clicked Image"
              />
            </div>
          </div>
        )}
        <p className='text-justify text-lg font-serif mb-6'>
          {imageData && imageData.deskripsi}
        </p>
        <div className='ml-auto'>
          <a href={imageData && imageData.link} target="_blank" rel="noopener noreferrer">
            <div style={colorButton} className='inline-block py-1 px-4 rounded-3xl mb-6'>
              Selengkapnya
            </div>
          </a>
        </div>
      </div>
      {!imageData && <p>No image selected</p>}
    </div>
  );
}



