"use client"
import React, { useState } from "react";
import { Image as MedusaImage } from "@medusajs/medusa";
import Image from "next/image";

// Import the FontAwesome CSS file
import "font-awesome/css/font-awesome.min.css";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <div className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle">
          <Image
            src={images[currentImageIndex].url}
            className="absolute inset-0 rounded-rounded"
            alt={`Product image ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            style={{
              objectFit: "cover",
            }}
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-300"
          >
            <i className="fa fa-chevron-left"></i> {/* Previous button with left chevron icon */}
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-300"
          >
            <i className="fa fa-chevron-right"></i> {/* Next button with right chevron icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
