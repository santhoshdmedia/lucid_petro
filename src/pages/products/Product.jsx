import React, { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router";
import { AppBreadcrumbs } from "../../components/layout";
// import './Product.css'

import automotiveProduct from '../../assets/product/productone.webp';
import engineOilProduct from '../../assets/product/producttwo.webp';
import GearOilProduct from '../../assets/product/productThree.webp'
import GreaseBucketProduct from '../../assets/product/productfour.webp'
import LubricatingGreaseProduct from '../../assets/product/productFive.webp'
import { LucidLoader } from "../../components/layout";
import oilBg from '../../assets/oils_bg.jpg'


const similarProducts = [
  {
    id: 1,
    productName: "Automotive Grease",
    productImg: automotiveProduct,
    productDescription: "Versatile grease suitable for automotive and industrial applications",
    productRoute: "/products/engine-oil"
  },
  {
    id: 2,
    productName: "Engine Oil",
    productImg: engineOilProduct,
    productDescription: "Advanced synthetic formula for superior engine protection",
    productRoute: "/products/Gear-oil"
  },
  {
    id: 3,
    productName: "Gear oil",
    productImg: GearOilProduct,
    productDescription: "Specially formulated for high-temperature bearing applications",
    productRoute: "/products/grease-bucket"
  },
  {
    id: 4,
    productName: "Grease Bucket",
    productImg: GreaseBucketProduct,
    productDescription: "High-performance oil for manual transmissions and differentials",
    productRoute: "/products/lubricating-grease"
  },
  {
    id: 5,
    productName: "Lubricating Grease",
    productImg: LubricatingGreaseProduct,
    productDescription: "High-performance oil for manual transmissions and differentials",
    productRoute: "/products/lubricating-grease"
  },
];
export const ProductLayout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Show loader on initial load and route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [location.key]);

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={2500} />;
  }

  return (
    <div className="">
      <LucidLoader nav="Product Catalog" duration={2500} />
    {/* carosal */}
      <section className="product__section flex flex-col px-10">
        <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#005f5a] mb-[2rem] my-12">Products</h1>
        <div className="w-full overflow-hidden">
          <div className="flex h-[500px]">
            {similarProducts.map((product, index) => (
              <div
                key={product.id}
                className={`relative transition-all duration-500 ease-in-out overflow-hidden ${hoveredIndex === index ? 'w-[60%]' : 'w-1/5'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <img
                  src={product.productImg}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  alt={product.productName}
                />

                {/* Overlay Content */}
                <div
                  className={`absolute inset-0 bg-[#0000003b] flex items-end p-8 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <div className="text-white max-w-md">
                    <h3 className="text-3xl font-bold">{product.productName}</h3>
                    <p className="mt-2">{product.productDescription}</p>
                    <a
                      href={product.productRoute}
                      className="mt-6 inline-flex items-center px-6 py-3 border border-[#005f5a] font-medium rounded-lg bg-[#005f5a] text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#005f5a] focus:ring-opacity-50"
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
      {/* products */}
      <section className=" sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
  {similarProducts.map((product) => (
    <div 
      key={product.id} 
      className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#bdd9d7]"
    >
      <img 
        src={product.productImg} 
        className="w-full h-full object-cover"
        alt={product.productName}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform">
          <h3 className="text-2xl font-bold">{product.productName}</h3>
          <p className="mt-2 line-clamp-2">{product.productDescription}</p>
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

  const toggleEnquiry = (product) => {
    setCurrentProduct(product);
    setShowEnquiry(prev => !prev);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="w-full py-10  individual__product__section" >
        <div className="container mx-auto px-4  z-40 relative ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f7f7] ">
            {title}
          </h1>
          <AppBreadcrumbs />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-40 shadow-lg  rounded-lg mt-6 pb-6">
        {/* Tabs Navigation */}
        <div className="relative w-full mt-12">
          <nav
            className="flex gap-1 w-full justify-start bg-transparent relative overflow-hidden"
            role="tablist"
            aria-orientation="horizontal"
          >
            {Object.keys(productData).map((tabKey) => (
              <button
                key={tabKey}
                role="tab"
                tabIndex={activeTab === tabKey ? 0 : -1}
                aria-selected={activeTab === tabKey}
                aria-controls={`${tabKey}-panel`}
                id={`${tabKey}-tab`}
                className={`px-4 py-2  transition-colors ${activeTab === tabKey
                  ? 'bg-[#000000] text-[#ffffff] font-medium '
                  : ' text-gray-600 cursor-pointer hover:bg-white hover:text-[#005f5a] font-normal'
                  }`}
                onClick={() => setActiveTab(tabKey)}
              >
                {productData[tabKey].productName}
              </button>
            ))}
            <span className="absolute inset-x-0 bottom-0 h-[1px] w-[100%] bg-[#d1d5dc] rounded-full lg:left-[0]" />
          </nav>
        </div>

        {/* Product Details Section */}
        <section
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={activeTab}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-20"
        >
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-8 lg:gap-0 text-teal-900 p-6 sm:p-8 lg:p-12 border border-gray-300 border-t-0">
            <div className="w-full lg:w-[48%]">
              <img
                src={productData[activeTab].image}
                alt={productData[activeTab].productName}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>

            <div className="w-full lg:w-[48%] p-2 lg:p-8">
              <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center mt-4 relative">
                {productData[activeTab].productName}
                <span className="absolute inset-x-0 bottom-[-30px] h-1 w-[30%] bg-teal-900 rounded-full left-1/2 transform -translate-x-1/2" />
              </h2>

              <div className="overflow-x-auto mt-16">
                <table className="table w-full">
                  <tbody>
                    {productData[activeTab].specifications.map((spec, idx) => (
                      <tr key={`spec-${idx}`} className="hover:bg-gray-300">
                        <td className="font-medium">{spec.label}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">
                  Description
                </h3>
                <p className="text-gray-700">{productData[activeTab].description}</p>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => toggleEnquiry(productData[activeTab])}
                  className="mt-6 inline-flex items-center px-6 py-3 border border-[#005f5a] text-[#005f5a] font-medium rounded-lg hover:bg-[#005f5a] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#005f5a] focus:ring-opacity-50"
                  aria-label={`Enquire about ${productData[activeTab].productName}`}
                >
                  Product Enquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005f5a] mb-6 relative inline-block">
              {similarProductsTitle}
              <span className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 h-1.5 bg-[#84b5d3] w-1/4 transition-all duration-300 ease-in-out" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {similarProductsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {similarProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <img
                    src={product.productImg}
                    alt={product.productName}
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                    width="300"
                    height="200"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#005f5a] mb-2">
                    {product.productName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.productDescription}
                  </p>
                  <Link
                    to={product.productRoute}
                    className="w-full block text-center bg-[#005f5a] hover:bg-[#004a47] text-white py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#005f5a] focus:ring-opacity-50"
                    aria-label={`View details of ${product.productName}`}
                  >
                    View Details
                  </Link>
                </div>
              </article>
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
      description: "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
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
      description: "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
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
      productImg: engineOilProduct,
      productDescription: "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/engine-oil"
    },
    {
      id: 2,
      productName: "Gear Oil",
      productImg: GearOilProduct,
      productDescription: "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/Gear-oil"
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription: "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket"
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription: "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease"
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
    whiteGrease: {
      productName: "White Lucid Automotive Grease",
      image: engineOilProduct,
      description: "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
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
      image: engineOilProduct,
      description: "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
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
      productDescription: "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease"
    },
    {
      id: 2,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription: "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/gear-oil"
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription: "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket"
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription: "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease"
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Engine oil"
      similarProducts={similarProducts}
    />
  );
}

export const Gearoil = () => {
  const productData = {
    whiteGrease: {
      productName: "White Lucid Automotive Grease",
      image: GearOilProduct,
      description: "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
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
      image: GearOilProduct,
      description: "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
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
      productDescription: "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease"
    },
    {
      id: 2,
      productName: "engine oil",
      productImg: engineOilProduct,
      productDescription: "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil"
    },
    {
      id: 3,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription: "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/grease-bucket"
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription: "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease"
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Gear oil"
      similarProducts={similarProducts}
    />
  );
}

export const GreaseBucket = () => {
  const productData = {
    whiteGrease: {
      productName: "White Lucid Automotive Grease",
      image: GreaseBucketProduct,
      description: "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
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
      image: GreaseBucketProduct,
      description: "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
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
      productDescription: "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease"
    },
    {
      id: 2,
      productName: "Engine Oil",
      productImg: engineOilProduct,
      productDescription: "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil"
    },
    {
      id: 3,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription: "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/gear-oil"
    },
    {
      id: 4,
      productName: "Lubricating Grease",
      productImg: LubricatingGreaseProduct,
      productDescription: "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/lubricating-grease"
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Grease Bucket"
      similarProducts={similarProducts}
    />
  );
}
export const Lubicatinggrease = () => {
  const productData = {
    whiteGrease: {
      productName: "White Lucid Automotive Grease",
      image: LubricatingGreaseProduct,
      description: "High-performance automotive grease designed for optimal lubrication and protection against wear. Ideal for various automotive applications including wheel bearings, chassis points, and universal joints.",
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
      image: LubricatingGreaseProduct,
      description: "Premium lithium complex grease with extreme pressure additives. Provides excellent protection in high-load applications and performs well in both high and low temperature conditions.",
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
      productDescription: "Versatile grease suitable for automotive and industrial applications",
      productRoute: "/products/automotive-grease"
    },
    {
      id: 2,
      productName: "Engine Oil",
      productImg: engineOilProduct,
      productDescription: "Advanced synthetic formula for superior engine protection",
      productRoute: "/products/engine-oil"
    },
    {
      id: 3,
      productName: "Gear oil",
      productImg: GearOilProduct,
      productDescription: "Specially formulated for high-temperature bearing applications",
      productRoute: "/products/gear-oil"
    },
    {
      id: 4,
      productName: "Grease Bucket",
      productImg: GreaseBucketProduct,
      productDescription: "High-performance oil for manual transmissions and differentials",
      productRoute: "/products/grease-bucket"
    },
  ];

  return (
    <LubricantProduct
      productData={productData}
      title="Grease Bucket"
      similarProducts={similarProducts}
    />
  );
}




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
