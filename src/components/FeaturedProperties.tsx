"use client";

import { useState } from "react";
import { FEATURED_PROPERTIES } from "@/constants";
import Image from "next/image";

const FeaturedProperties = () => {
  // Explicitly type selectedImage as string or null
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Explicitly type imageSrc as string
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="featured" className="container mx-auto border-b py-6 pb-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Featured Property
      </h2>
      <div className="flex flex-wrap">
        {FEATURED_PROPERTIES.map((property, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="m-2 inline-block p-8">
              <Image
                className="mb-8 rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={property.image}
                width={300}
                height={300}
                alt={property.name}
                onClick={() => openImageModal(property.image)}
              />
              <div className="text-center">
                <h6 className="mb-5 mt-2 font-medium">{property.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full Size Image"
              width={800}
              height={800}
              className="rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
