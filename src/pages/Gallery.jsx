import { useState } from "react";

// Employee images
import emp1 from "../assets/employees/emp1.webp";
import emp2 from "../assets/employees/emp2.webp";
import emp3 from "../assets/employees/emp3.webp";

// Factory images
import fac1 from "../assets/factory/fac1.webp";
import fac2 from "../assets/factory/fac2.webp";
import fac3 from "../assets/factory/fac3.webp";
import fac4 from "../assets/factory/fac4.webp";
import fac5 from "../assets/factory/fac5.webp";
import fac6 from "../assets/factory/fac6.webp";
import fac7 from "../assets/factory/fac7.webp";
import fac8 from "../assets/factory/fac8.webp";
import fac9 from "../assets/factory/fac9.webp";
import fac10 from "../assets/factory/fac10.webp";
import fac11 from "../assets/factory/fac11.webp";
import fac12 from "../assets/factory/fac12.webp";
import fac13 from "../assets/factory/fac13.webp";
import fac14 from "../assets/factory/fac14.webp";
import fac15 from "../assets/factory/fac15.webp";
import fac16 from "../assets/factory/fac16.webp";
import fac17 from "../assets/factory/fac17.webp";
import fac18 from "../assets/factory/fac18.webp";
import fac19 from "../assets/factory/fac19.webp";
import fac20 from "../assets/factory/fac20.webp";
import fac21 from "../assets/factory/fac21.webp";
import fac22 from "../assets/factory/fac22.webp";
import fac23 from "../assets/factory/fac23.webp";
import fac24 from "../assets/factory/fac24.webp";
import { AppBreadcrumbs } from "../components/layout";
import Paking from "../assets/video/packing.mp4";
import exportPackages from "../assets/video/export.mp4";
import factoreyInteriour from "../assets/video/interior.mp4";
import work from "../assets/video/work_progress.mp4";
import { FaEye } from "react-icons/fa";

const galleryItems = [
  // Employee images
  { id: 1, src: emp1, alt: "Employee 1", category: "employees", type: "image" },
  { id: 2, src: emp2, alt: "Employee 2", category: "employees", type: "image" },
  { id: 3, src: emp3, alt: "Employee 3", category: "employees", type: "image" },

  // Factory images
  {
    id: 4,
    src: fac1,
    alt: "Factory overview",
    category: "factory",
    type: "image",
  },
  {
    id: 5,
    src: fac2,
    alt: "Production area",
    category: "factory",
    type: "image",
  },
  { id: 6, src: fac3, alt: "Machinery", category: "factory", type: "image" },
  {
    id: 7,
    src: fac4,
    alt: "Quality control",
    category: "factory",
    type: "image",
  },
  {
    id: 8,
    src: fac5,
    alt: "Packaging section",
    category: "factory",
    type: "image",
  },
  {
    id: 9,
    src: fac6,
    alt: "Storage facility",
    category: "factory",
    type: "image",
  },
  {
    id: 10,
    src: fac7,
    alt: "Research lab",
    category: "factory",
    type: "image",
  },
  {
    id: 11,
    src: fac8,
    alt: "Worker in action",
    category: "factory",
    type: "image",
  },
  {
    id: 12,
    src: fac9,
    alt: "Safety equipment",
    category: "factory",
    type: "image",
  },
  {
    id: 13,
    src: fac10,
    alt: "Loading bay",
    category: "factory",
    type: "image",
  },
  {
    id: 14,
    src: fac11,
    alt: "Factory exterior",
    category: "factory",
    type: "image",
  },
  {
    id: 15,
    src: fac12,
    alt: "Control room",
    category: "factory",
    type: "image",
  },
  {
    id: 16,
    src: fac13,
    alt: "Production line",
    category: "factory",
    type: "image",
  },
  {
    id: 17,
    src: fac14,
    alt: "Raw materials",
    category: "factory",
    type: "image",
  },
  {
    id: 18,
    src: fac15,
    alt: "Finished products",
    category: "factory",
    type: "image",
  },
  {
    id: 19,
    src: fac16,
    alt: "Factory interior",
    category: "factory",
    type: "image",
  },
  {
    id: 20,
    src: fac17,
    alt: "Assembly line",
    category: "factory",
    type: "image",
  },
  {
    id: 21,
    src: fac18,
    alt: "Quality assurance",
    category: "factory",
    type: "image",
  },
  { id: 22, src: fac19, alt: "Logistics", category: "factory", type: "image" },
  {
    id: 23,
    src: fac20,
    alt: "Maintenance",
    category: "factory",
    type: "image",
  },
  {
    id: 24,
    src: fac21,
    alt: "Final inspection",
    category: "factory",
    type: "image",
  },
  { id: 25, src: fac22, alt: "Shipping", category: "factory", type: "image" },
  { id: 26, src: fac23, alt: "Warehouse", category: "factory", type: "image" },
  {
    id: 27,
    src: fac24,
    alt: "Factory overview",
    category: "factory",
    type: "image",
  },
  // Video
  {
    id: 28,
    src: Paking,
    alt: "Industrial packing process in a manufacturing facility",
    category: "video",
    type: "video",
    thumbnail: fac11,
  },
  {
    id: 29,
    src: exportPackages,
    alt: "Finished products being prepared for international export",
    category: "video",
    type: "video",
    thumbnail: fac2,
  },
  {
    id: 30,
    src: factoreyInteriour,
    alt: "Modern manufacturing facility interior with production equipment",
    category: "video",
    type: "video",
    thumbnail: fac10,
  },
  {
    id: 31,
    src: work,
    alt: "Efficient workflow in an industrial production line",
    category: "video",
    type: "video",
    thumbnail: fac10,
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    "all",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const itemsToShow = filteredItems.slice(0, visibleItems);

  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateItems = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    } else {
      newIndex = (currentIndex + 1) % filteredItems.length;
    }
    setSelectedItem(filteredItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 12);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (selectedItem) {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateItems("prev");
      } else if (e.key === "ArrowRight") {
        navigateItems("next");
      }
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedItem(null);
    setVisibleItems(12);
  };

  return (
    <section
      className="pb-12 bg-gray-50 min-h-screen"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <header className="w-full py-10 Gallery__section">
        <div className="container mx-auto px-4 z-40 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f7f7]">
            Our Gallery
          </h1>
          <AppBreadcrumbs />
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                activeCategory === category
                  ? "bg-[#005f5a] text-white"
                  : "bg-white text-[#005f5a] hover:bg-[#BDD9D7]"
              }`}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {itemsToShow.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {itemsToShow.map((item, index) => (
                <div
                  className="bg-[#005f5a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all "
                  key={item.id}
                >
                  <div
                    className="relative group overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(item, index)}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-64 overflow-hidden">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          muted
                          loop
                          playsInline
                          poster={item.thumbnail}
                        />
                      </div>
                    )}

                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0000003d] bg-opacity-30">
                      {item.type === "image" ? (
                        <div className="p-3 bg-[#0000003d] bg-opacity-50 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <FaEye className="text-white text-xl" />
                        </div>
                      ) : (
                        <div className="p-3 bg-[#0000003d] bg-opacity-50 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {item.type == "video" ? (
                    <h1 className="text-lg font-semibold text-center py-4 w-[90%] mx-auto text-[#fdffff] ">
                      {item.alt}
                    </h1>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>

            {/* Load More button */}
            {visibleItems < filteredItems.length && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMoreItems}
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg transition-colors flex items-center justify-center mx-auto min-w-[150px] ${
                    isLoading
                      ? "bg-[#004a45] cursor-not-allowed"
                      : "bg-[#005f5a] hover:bg-[#004a45]"
                  } text-white`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 py-8">
            No items found in this category
          </p>
        )}

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-[#BDD9D7] transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={() => navigateItems("prev")}
              className="absolute left-4 text-white hover:text-[#BDD9D7] transition-colors"
              aria-label="Previous item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="max-w-4xl w-full">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  className="w-full max-h-[80vh]"
                  controls
                  autoPlay
                  muted
                />
              )}
              <p className="text-white text-center mt-4">{selectedItem.alt}</p>
            </div>

            <button
              onClick={() => navigateItems("next")}
              className="absolute right-4 text-white hover:text-[#BDD9D7] transition-colors"
              aria-label="Next item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
