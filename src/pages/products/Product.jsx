import React, { useEffect, useState, useRef,useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";
import { AppBreadcrumbs } from "../../components/layout";
// import './Product.css'

import automotiveProduct from "../../assets/product/productone.webp";
import engineOilProduct from "../../assets/product/productTwo.webp";
import GearOilProduct from "../../assets/product/productThree.webp";
import GreaseBucketProduct from "../../assets/product/productfour.webp";
import LubricatingGreaseProduct from "../../assets/product/productFive.webp";
import { LucidLoader } from "../../components/layout";
import oilBg from "../../assets/oils_bg.jpg";
import engineOilOne from "../../assets/product/engineOil/10w-30.webp"
import engineOiltwo from "../../assets/product/engineOil/15w-40.webp"
import engineOilthree from "../../assets/product/engineOil/20w-40.webp"
import engineOilfour from "../../assets/product/engineOil/20w-50.webp"


const similarProducts = [
  {
    id: 1,
    productName: "Automotive Grease",
    productImg: automotiveProduct,
    productDescription:
      "Versatile grease suitable for automotive and industrial applications",
    productRoute: "/products/engine-oil",
  },
  {
    id: 2,
    productName: "Engine Oil",
    productImg: engineOilProduct,
    productDescription:
      "Advanced synthetic formula for superior engine protection",
    productRoute: "/products/Gear-oil",
  },
  {
    id: 3,
    productName: "Gear oil",
    productImg: GearOilProduct,
    productDescription:
      "Specially formulated for high-temperature bearing applications",
    productRoute: "/products/grease-bucket",
  },
  {
    id: 4,
    productName: "Grease Bucket",
    productImg: GreaseBucketProduct,
    productDescription:
      "High-performance oil for manual transmissions and differentials",
    productRoute: "/products/lubricating-grease",
  },
  {
    id: 5,
    productName: "Lubricating Grease",
    productImg: LubricatingGreaseProduct,
    productDescription:
      "High-performance oil for manual transmissions and differentials",
    productRoute: "/products/lubricating-grease",
  },
];



export const ProductLayout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Memoize similarProducts to prevent unnecessary recalculations
  const memoizedProducts = useMemo(() => similarProducts, []);

  // Show loader on initial load and route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500); // Reduced duration
    return () => clearTimeout(timer);
  }, [location.key]);

  // Optimized particle data
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({ // Reduced number of particles
      id: i,
      size: Math.random() * 8 + 3, // Smaller size range
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 8, // Shorter duration
      delay: Math.random() * 3
    }));
  }, []);

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={1500} />;
  }

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Section */}
      <section className="product__section flex flex-col px-4 md:px-10">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl w-[80%] md:w-full font-bold mx-auto text-[#005f5a] my-8 md:my-12">
          Products
        </h1>
        <div className="w-full overflow-hidden">
          <div className="flex h-[400px] md:h-[500px]"> {/* Reduced height */}
            {memoizedProducts.map((product, index) => (
              <div
                key={product.id}
                className={`relative transition-all duration-300 ease-in-out overflow-hidden will-change-transform ${
                  hoveredIndex === index ? "w-[60%]" : "w-1/5"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image with optimized loading */}
                <img
                  src={product.productImg}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-105" : "scale-100" // Reduced scale
                  }`}
                  alt={product.productName}
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay Content */}
                <div
                  className={`absolute inset-0 bg-black/25 flex items-end p-4 md:p-8 transition-opacity duration-200 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {product.productName}
                    </h3>
                    <p className="mt-2 text-sm md:text-base">{product.productDescription}</p>
                    <a
                      href={product.productRoute}
                      className="mt-4 md:mt-6 inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-[#005f5a] font-medium rounded-lg bg-[#005f5a] text-white"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
     {/* products */}
      <div className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Particle Animation */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `move ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Diagonal Gradient Background Layers */}
          <div className="bg absolute h-[200%] w-[200%] bg-gradient-to-r from-[#6c3] via-[#6c3] to-[#bdd9d7] opacity-50 animate-slide-3s-diagonal origin-top-left"></div>
          <div className="bg absolute h-[200%] w-[200%] bg-gradient-to-r from-[#6c3] via-[#6c3] to-[#bdd9d7] opacity-50 animate-slide-4s-diagonal origin-bottom-right"></div>
          <div className="bg absolute h-[200%] w-[200%] bg-gradient-to-r from-[#bdd9d7] via-[#bdd9d7] to-[#6c3] opacity-50 animate-slide-5s-diagonal origin-center"></div>
        </div>
        
        <section className="sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[rgba(255,255,255,.8)]"
              >
                <img
                  src={product.productImg}
                  className="w-full h-full object-cover"
                  alt={product.productName}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold">
                      {product.productName}
                    </h3>
                    <p className="mt-2 line-clamp-2">
                      {product.productDescription}
                    </p>
                    <a
                      href={product.productRoute}
                      className="inline-block mt-4 px-6 py-2 bg-[#005f5a] text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <style jsx>{`
        @keyframes slide-diagonal {
          0% { transform: translate(-25%, -25%) rotate(45deg); }
          100% { transform: translate(25%, 25%) rotate(45deg); }
        }
        .animate-slide-3s-diagonal {
          animation: slide-diagonal 8s ease-in-out infinite alternate;
        }
        .animate-slide-4s-diagonal {
          animation: slide-diagonal 12s ease-in-out infinite alternate-reverse;
        }
        .animate-slide-5s-diagonal {
          animation: slide-diagonal 16s ease-in-out infinite alternate;
        }
        @keyframes move {
          0% { transform: translate(0, 0); }
          25% { transform: translate(50px, 30px); }
          50% { transform: translate(20px, 60px); }
          75% { transform: translate(70px, 20px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-animate {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .pulse-animate {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};



export const LubricantProduct = ({
  productData,
  title,
  similarProductsTitle = "Similar Products",
  similarProductsDescription = "Explore these related products that might interest you",
  similarProducts,
}) => {
  const [activeTab, setActiveTab] = useState(Object.keys(productData)[0]);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const toggleEnquiry = (product) => {
    setCurrentProduct(product);
    setShowEnquiry((prev) => !prev);
  };

  // Set main image to first image if available
  const currentProductData = productData[activeTab];
  const productImages = currentProductData.images || [currentProductData.image];
  if (!mainImage && productImages.length > 0) {
    setMainImage(productImages[0]);
  }

  return (
    <div className="bg-white">
      {/* Hero Header Section */}
      <header className="w-full py-12 individual__product__section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-40 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <AppBreadcrumbs className="text-teal-100" />
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Tabs Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Product tabs">
            {Object.keys(productData).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setMainImage(null); // Reset main image when tab changes
                }}
                className={`whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === tabKey
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {productData[tabKey].productName}
              </button>
            ))}
          </nav>
        </div>

        {/* Product Details Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Product Image Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex items-center justify-center h-full min-h-[400px]">
                <img
                  src={mainImage || productImages[0]}
                  alt={currentProductData.productName}
                  className="w-full h-auto max-h-[500px] object-contain"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto py-2 px-1">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(img)}
                      className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all ${
                        mainImage === img ? 'border-teal-500 scale-105' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${currentProductData.productName} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-4">
                {/* Product Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {currentProductData.productName}
                </h2>

                {/* Key Features */}
                {currentProductData.keyFeatures && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {currentProductData.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications Table */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {currentProductData.specifications.map((spec, idx) => (
                          <tr 
                            key={`spec-${idx}`} 
                            className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-teal-50`}
                          >
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <div className="prose text-gray-700">
                    {currentProductData.description}
                  </div>
                </div>

                {/* Enquiry Button */}
                <button
                  onClick={() => toggleEnquiry(currentProductData)}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Request Product Information
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 relative inline-block">
              {similarProductsTitle}
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 h-1 bg-teal-500 w-1/4" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {similarProductsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-4 bg-gray-50 flex items-center justify-center h-48">
                  <img
                    src={product.productImg}
                    alt={product.productName}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.productName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.productDescription}
                  </p>
                  <Link
                    to={product.productRoute}
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    View Details
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Enquiry Form Modal */}
      {showEnquiry && currentProduct && (
        <EnquiryForm
          productName={currentProduct.productName}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>
  );
};

export const Automobile = () => {
  const productData = {
    whiteGrease: {
      productName: "White Lucid Automotive Grease",
      image: automotiveProduct,
      description:
        "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Usage/Application", value: "Automotive" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Black" },
        { label: "Packaging Size", value: "180 Kg" },
        { label: "Brand", value: "Lucid" },
        { label: "Base Oil Viscosity", value: "ISO 220" },
        { label: "Dropping Point", value: "260°C min" },
      ],
    },
    lithiumGrease: {
      productName: "Automotive Lucid Lithium Grease",
      image: automotiveProduct,
      description:
        "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Grade", value: "EP 1" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Green" },
        { label: "Packaging Size", value: "180 kg" },
        { label: "Brand", value: "Lucid" },
        { label: "NLGI Grade", value: "2" },
        { label: "Timken OK Load", value: "60 lbs" },
      ],
    },
  };

  const similarProducts = [
    {
      id: 1,
      productName: "Engine Oil",
      productImg: engineOilOne,
      productDescription:
        "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/engine-oil",
    },
    {
      id: 2,
      productName: "Gear Oil",
      productImg: GearOilProduct,
      productDescription:
        "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/Gear-oil",
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription:
        "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket",
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription:
        "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease",
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Automotive Lubricants"
      similarProducts={similarProducts}
    />
  );
};


export const Engineoil = () => {
  const productData = {
    Lucid_Extreme_20W50 : {
      productName: "High Mileage 50L Lucid Extreme 20W50 API SM Four Stroke Engine Oil",
      image: engineOilfour,
      description:
        "The two main types of lubricants are oils and greases. Both aim to lubricate equipment and prevent damage through metal to metal contact. However, there are a few key differences in how they are used. To put it simply, grease is oil mixed with a thickener and other additives.",
      specifications: [
        { label: "Engine Oil Type", value: "High Mileage" },
        { label: "Vehicle Type", value: "Bike" },
        { label: "Brand", value: "Lucid" },
        { label: "Product Size", value: "50 L" },
        { label: "Packaging Type", value: "Can" },
        { label: "Model No", value: "Extreme 20W-50 API SM" },
        
      ],
    },
    Lucid_Super_20W40 : {
      productName: "High Mileage 50L Lucid Super 20W 40 API SL Four Stroke Engine Oil",
      image: engineOilthree,
      description:
        "The two main types of lubricants are oils and greases. Both aim to lubricate equipment and prevent damage through metal to metal contact. However, there are a few key differences in how they are used. To put it simply, grease is oil mixed with a thickener and other additives.",
      specifications: [
       { label: "Engine Oil Type", value: "High Mileage" },
        { label: "Vehicle Type", value: "Bike" },
        { label: "Brand", value: "Lucid" },
        { label: "Usage", value: "Automotive" },
        { label: "Product Size", value: "50 L" },
        { label: "Packaging Type", value: "Can" },
        { label: "Model No", value: "Active 10W-30 API SL" },
      ],
    },
    Lucid_Active_10W30 : {
      productName: "Full Synthetic 50L Lucid Active 10W 30 API SL Four Stroke Engine Oil",
      image: engineOilOne,
      description:
        "The two main types of lubricants are oils and greases. Both aim to lubricate equipment and prevent damage through metal to metal contact. However, there are a few key differences in how they are used. To put it simply, grease is oil mixed with a thickener and other additives.",
      specifications: [
       { label: "Engine Oil Type", value: "High Mileage" },
        { label: "Vehicle Type", value: "Bike" },
        { label: "Brand", value: "Lucid" },
        { label: "Usage", value: "Automotive" },
        { label: "Product Size", value: "50 L" },
        { label: "Packaging Type", value: "Can" },
        { label: "Model No", value: "Active 10W-30 API SL" },
      ],
    },
    
  };

  const similarProducts = [
    {
      id: 1,
      productName: "Automotive Grease",
      productImg: automotiveProduct,
      productDescription:
        "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease",
    },
    {
      id: 2,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription:
        "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/gear-oil",
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription:
        "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket",
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription:
        "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease",
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Engine oil"
      similarProducts={similarProducts}
    />
  );
};

export const Gearoil = () => {
  const productData = {
    LUCIDFLEETEP_90: {
      productName: "LUCID FLEET EP-90 (API-GL-4)",
      image: GearOilProduct,
      description:
        "Oils are extreme pressure automotive gearlubricants. These Oils are blended from selected base stocks and include specific addit•ve package to provide extreme pressure, anti-rust cottosion characteristics.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Usage/Application", value: "Automotive" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Black" },
        { label: "Packaging Size", value: "180 Kg" },
        { label: "Brand", value: "Lucid" },
        { label: "Base Oil Viscosity", value: "ISO 220" },
        { label: "Dropping Point", value: "260°C min" },
      ],
    },
    LUCIDFLEETEP_140: {
      productName: "LUCID FLEET EP-140 (API-GL-4)",
      image: GearOilProduct,
      description:
        "Oils are extreme pressure automotive gearlubricants. These Oils are blended from selected base stocks and include specific addit•ve package to provide extreme pressure, anti-rust cottosion characteristics.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Grade", value: "EP 1" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Green" },
        { label: "Packaging Size", value: "180 kg" },
        { label: "Brand", value: "Lucid" },
        { label: "NLGI Grade", value: "2" },
        { label: "Timken OK Load", value: "60 lbs" },
      ],
    },
  };

  const similarProducts = [
    {
      id: 1,
      productName: "Automotive Grease",
      productImg: automotiveProduct,
      productDescription:
        "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease",
    },
    {
      id: 2,
      productName: "engine oil",
      productImg: engineOilOne,
      productDescription:
        "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil",
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription:
        "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket",
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription:
        "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease",
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Gear oil"
      similarProducts={similarProducts}
    />
  );
};

export const GreaseBucket = () => {
  const productData = {
    LUCID_PREMIUM_MP_3: {
      productName: "LUCID PREMIUM MP-3",
      image: GreaseBucketProduct,
      description:
        "Multtpurpose Grease Prov•des Maxtmum Lubrication. Suitable for Medium and Heavy Automobile Ball Bearings, Acts as Antifr•ction Agent 'n Ball And Roller Bearing of Heavily Loaded Equ•pments_",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Usage/Application", value: "Automotive" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Black" },
        { label: "Packaging Size", value: "180 Kg" },
        { label: "Brand", value: "Lucid" },
        { label: "Base Oil Viscosity", value: "ISO 220" },
        { label: "Dropping Point", value: "260°C min" },
      ],
    },
    LUCIDAP_3: {
      productName: "LUCID AP-3",
      image: GreaseBucketProduct,
      description:
        "Alt Purpose APO grease iS a superjor quality buttery textured soap base grease tt is recommended for umversat joints. larger beartng. water pump, wheel beanng chassis fittings. tractors. constructions. alt types of automotive and industrial equipment. It has executive service stabli'ty and high drop po.nt of 192 C It prevents water wash out, leakage rust and have good corrosion properties that provides long life lubrications.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Grade", value: "EP 1" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Green" },
        { label: "Packaging Size", value: "180 kg" },
        { label: "Brand", value: "Lucid" },
        { label: "NLGI Grade", value: "2" },
        { label: "Timken OK Load", value: "60 lbs" },
      ],
    },
    LUCID_POWER_EP_EPL_2: {
      productName: "LUCID AP-3",
      image: GreaseBucketProduct,
      description:
        "Excellent performance under heavy / shock loads at very high temperature Non-agejng and structurally very stable Resistance to hot/cold water Perform well in alkaline or acidic atmosphere Pump able through centralized lubrication system Reliable corrosion protection which extends component life",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Grade", value: "EP 1" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Green" },
        { label: "Packaging Size", value: "180 kg" },
        { label: "Brand", value: "Lucid" },
        { label: "NLGI Grade", value: "2" },
        { label: "Timken OK Load", value: "60 lbs" },
      ],
    },
  };

  const similarProducts = [
    {
      id: 1,
      productName: "Automotive Grease",
      productImg: automotiveProduct,
      productDescription:
        "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease",
    },
    {
      id: 2,
      productName: "Engine Oil",
      productImg: engineOilOne,
      productDescription:
        "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil",
    },
    {
      id: 3,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription:
        "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/gear-oil",
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription:
        "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease",
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Grease Bucket"
      similarProducts={similarProducts}
    />
  );
};
export const Lubicatinggrease = () => {
  const productData = {
    HYDRAULIC_OIL: {
      productName: "LUCID HYDRAULIC OIL - (32/46/68)",
      image: LubricatingGreaseProduct,
      description:
        "Ant' weat type Hydraulic 011 for circulating or bath type iubncatvng system and for enclosed Gear Box & Chatn Dnvers Anti Rust and Ant' wear propert'es Htgh viscosity. •nde-v. wtth ajr release valve Foarn Stability. Excellent Oxidation stabil•ty.",
      specifications: [
        { label: "Form", value: "Grease" },
        { label: "Usage/Application", value: "Automotive" },
        { label: "Packaging Type", value: "Barrel" },
        { label: "Color", value: "Black" },
        { label: "Packaging Size", value: "180 Kg" },
        { label: "Brand", value: "Lucid" },
        { label: "Base Oil Viscosity", value: "ISO 220" },
        { label: "Dropping Point", value: "260°C min" },
      ],
    }
  };

  const similarProducts = [
    {
      id: 1,
      productName: "Automotive Grease",
      productImg: automotiveProduct,
      productDescription:
        "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease",
    },
    {
      id: 2,
      productName: "Engine Oil",
      productImg: engineOilOne,
      productDescription:
        "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil",
    },
    {
      id: 3,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription:
        "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/gear-oil",
    },
    {
      id: 4,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription:
        "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/grease-bucket",
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Grease Bucket"
      similarProducts={similarProducts}
    />
  );
};

export const EnquiryForm = ({ productName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: `Enquiry about ${productName}`,
    message: `I would like to get more information about ${productName}. Please contact me with details.`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Close the form after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-teal-900">Enquiry Form</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
