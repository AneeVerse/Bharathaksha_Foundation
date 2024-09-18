"use client"
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const GalleryPage = () => {
  // Define categories and images
  const categories = ['All', 'Branding', 'Design', 'Development'];
  const imagesData = [
    { id: 1, src: '/gallery/img (1).jpg', category: 'Event', name: 'Event Image 1' },
    { id: 2, src: '/gallery/img (2).jpg', category: 'Event', name: 'Event Image 2' },
    { id: 3, src: '/gallery/img (3).jpg', category: 'Event', name: 'Event Image 3' },
    { id: 4, src: '/gallery/img (4).jpg', category: 'Event', name: 'Event Image 4' },
    { id: 5, src: '/gallery/img (5).jpg', category: 'Event', name: 'Event Image 5' },
    { id: 6, src: '/gallery/img (6).jpg', category: 'Event', name: 'Event Image 6' },
    { id: 7, src: '/gallery/img (7).jpg', category: 'Design', name: 'Event Image 7' },
    { id: 8, src: '/gallery/img (8).jpg', category: 'Design', name: 'Event Image 8' },
    { id: 9, src: '/gallery/img (9).jpg', category: 'Design', name: 'Event Image 9' },
    { id: 10, src: '/gallery/img (10).jpg', category: 'Design', name: 'Event Image 10' },
    { id: 11, src: '/gallery/img (11).jpg', category: 'Event', name: 'Event Image 11' },
    { id: 12, src: '/gallery/img (12).jpg', category: 'Design', name: 'Event Image 12' },
    { id: 13, src: '/gallery/img (13).jpg', category: 'Event', name: 'Event Image 13' },
    { id: 14, src: '/gallery/img (14).jpg', category: 'Event', name: 'Event Image 14' },
    { id: 15, src: '/gallery/img (15).jpg', category: 'Design', name: 'Event Image 15' },
    { id: 16, src: '/gallery/img (16).jpg', category: 'Event', name: 'Event Image 16' },
    { id: 17, src: '/gallery/img (17).jpg', category: 'Event', name: 'Event Image 17' },
    { id: 18, src: '/gallery/img (18).jpg', category: 'Event', name: 'Event Image 18' },
    { id: 19, src: '/gallery/img (19).jpg', category: 'Event', name: 'Event Image 19' },
    { id: 20, src: '/gallery/img (20).jpg', category: 'Event', name: 'Event Image 20' },
    { id: 21, src: '/gallery/img (21).jpg', category: 'Branding', name: 'Event Image 21' },
    { id: 22, src: '/gallery/img (22).jpg', category: 'Branding', name: 'Event Image 22' },
    { id: 23, src: '/gallery/img (23).jpg', category: 'Branding', name: 'Event Image 23' },
    { id: 24, src: '/gallery/img (24).jpg', category: 'Branding', name: 'Event Image 24' },
    { id: 25, src: '/gallery/img (25).jpg', category: 'Event', name: 'Event Image 25' },
    { id: 26, src: '/gallery/img (26).jpg', category: 'Branding', name: 'Event Image 26' },
    { id: 27, src: '/gallery/img (27).jpg', category: 'Event', name: 'Event Image 27' },
    { id: 28, src: '/gallery/img (28).jpg', category: 'Branding', name: 'Event Image 28' },
    { id: 29, src: '/gallery/img (29).jpg', category: 'Event', name: 'Event Image 29' },
    { id: 30, src: '/gallery/img (30).jpg', category: 'Branding', name: 'Event Image 30' },
    { id: 31, src: '/gallery/img (31).jpg', category: 'Branding', name: 'Event Image 31' },
    { id: 32, src: '/gallery/img (32).jpg', category: 'Branding', name: 'Event Image 32' },
    { id: 33, src: '/gallery/img (33).jpg', category: 'Event', name: 'Event Image 33' },
    { id: 34, src: '/gallery/img (34).jpg', category: 'Event', name: 'Event Image 34' },
    { id: 35, src: '/gallery/img (35).jpg', category: 'Event', name: 'Event Image 35' },
    { id: 36, src: '/gallery/img (36).jpg', category: 'Event', name: 'Event Image 36' },
    { id: 37, src: '/gallery/img (37).jpg', category: 'Event', name: 'Event Image 37' },
    { id: 38, src: '/gallery/img (38).jpg', category: 'Event', name: 'Event Image 38' },
    { id: 39, src: '/gallery/img (39).jpg', category: 'Event', name: 'Event Image 39' },
    { id: 40, src: '/gallery/img (40).jpg', category: 'Event', name: 'Event Image 40' },
    { id: 41, src: '/gallery/img (41).jpg', category: 'Event', name: 'Event Image 41' },
    { id: 42, src: '/gallery/img (42).jpg', category: 'Event', name: 'Event Image 42' },
    { id: 43, src: '/gallery/img (43).jpg', category: 'Event', name: 'Event Image 43' },
    { id: 44, src: '/gallery/img (44).jpg', category: 'Event', name: 'Event Image 44' },
    { id: 45, src: '/gallery/img (45).jpg', category: 'Event', name: 'Event Image 45' },
    { id: 46, src: '/gallery/img (46).jpg', category: 'Development', name: 'Event Image 46' },
    { id: 47, src: '/gallery/img (47).jpg', category: 'Development', name: 'Event Image 47' },
    { id: 48, src: '/gallery/img (48).jpg', category: 'Development', name: 'Event Image 48' },
    { id: 49, src: '/gallery/img (49).jpg', category: 'Development', name: 'Event Image 49' },
    { id: 50, src: '/gallery/img (50).jpg', category: 'Development', name: 'Event Image 50' },
    { id: 51, src: '/gallery/img (51).jpg', category: 'Development', name: 'Event Image 51' },
  ];
  

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? imagesData
      : imagesData.filter((image) => image.category === activeCategory);

  return (
    <div className="bg-gray-50 mt-[90px] py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Photo Gallery</h1>
          <p className="text-gray-600 mt-2">Explore our collection of images from various categories.</p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex justify-center  flex-col sm:flex-row gap-4 mb-10">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`px-5 py-2 rounded-full font-medium text-gray-600 
              ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              {category}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="group break-inside-avoid">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg group-hover:opacity-80 transition cursor-pointer"
                onClick={() => setSelectedImage(image.src)} // Open popup on click
              />
              {/* <h3 className="text-lg text-gray-800 mt-4">{image.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white font-bold"
              onClick={() => setSelectedImage(null)} // Close popup
            >
             <IoMdClose className=' rounded-full text-3xl bg-[#00000086] p-[6px]'/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
