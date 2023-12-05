import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CenteredImages = ({ title, images, handleImageClick }) => (
  <>
    <h1 className="font-serif p-4 py-2 text-2xl mb-2 mt-12 ml-4 text-gray-950">
      {title}
    </h1>

    <div className="flex overflow-x-auto gap-8 mx-8" style={{ overflowX: 'auto' }}>
      {images.map((image, index) => (
        <div key={`${title.toLowerCase()}-${index}`} className="w-72">
          <img
            className="w-full h-40 rounded-xl"
            src={image.img}
            alt={`${title} ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
    </div>
  </>
);

export default function Event() {
  const [sertifikasiImages, setSertifikasiImages] = useState([]);
  const [webinarImages, setWebinarImages] = useState([]);
  const [seminarImages, setSeminarImages] = useState([]);
  const [iklanImages, setIklanImages] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = (imageData) => {
    navigate('/desEvent', { state: { imageData } });
  };

  useEffect(() => {
    const fetchData = async (url, stateSetter) => {
      try {
        const response = await axios.get(url);
        stateSetter(response.data.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData('https://strange-pleat-ray.cyclic.app/sertifikasi', setSertifikasiImages);
    fetchData('https://strange-pleat-ray.cyclic.app/webinar', setWebinarImages);
    fetchData('https://strange-pleat-ray.cyclic.app/seminar', setSeminarImages);
    fetchData('https://strange-pleat-ray.cyclic.app/des', setIklanImages);
  }, [navigate]);

  const imageSection = (title, images, handleImageClick) => (
    <>
      <h2 className="ml-10 mb-4 mt-10 text-xl font-bold">{title}</h2>
      <div className="overflow-x-auto scroll-sm" style={{ maxWidth: '100%'}}>
        <div style={{ overflowX: 'auto', maxWidth: '100%', marginLeft: '-40px' }}>
          <div style={{ display: 'flex', width: 'max-content', overflowX: 'auto' }}>
            <CenteredImages
              title=""
              images={images}
              handleImageClick={handleImageClick}
              style={{ overflow: 'auto' }}
              className="m-0"
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
  
    <div className="mx-4 mb-12 overflow-x-auto">
      <div className="overflow-x-auto scroll-sm" style={{ maxWidth: '100%' }}>
        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
          <div style={{ display: 'flex', width: 'max-content', overflowX: 'auto' }}>
            <div className="flex justify-center items-center mt-8 mb-10 overflow-x-auto scroll-sm">
              {iklanImages.map((image, index) => (
                <div key={`iklan-${index}`} className="w-2/3">
                  <img
                    className="w-2/3 h-auto object-cover object-center rounded-xl"
                    src={image.img}
                    alt={`iklan ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {imageSection('Sertifikasi', sertifikasiImages, handleImageClick)}
      {imageSection('Webinar', webinarImages, handleImageClick)}
      {imageSection('Seminar', seminarImages, handleImageClick)}
    </div>
  );
}




