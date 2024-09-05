import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Adjust the path as needed
import WhatsAppButton from "../components/WhatsaapButton"; // Adjust the path as needed

const Singpro = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to capitalize the first letter of each word
  const capitalizeHeader = (header) => {
    return header
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        console.log("Fetching products from:", response.url); // Log the fetch URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log fetched data
        const foundProduct = data.find((item) => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product data:", error); // Log any errors
        setError(error.message || "Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle loading state
  if (loading) {
    return <div className="singpro__loading">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="singpro__error">{error}</div>;
  }

  // Render dynamically based on product keys
  const renderProductDetails = () => {
    return Object.entries(product).map(([key, value]) => {
      if (key === "id" || key === "name" || key === "image") return null; // Skip certain keys

      // Handle rendering of known complex structures like features and tables
      if (key === "features" && Array.isArray(value)) {
        return (
          <div key={key} className="grid-item">
            <h2 className="sing-heading2">
              {capitalizeHeader("Features And Benefits")}
            </h2>
            <ul className="feature-list">
              {value.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        );
      }

      if (key === "aac_block_size_chart" && Array.isArray(value)) {
        return (
          <div key={key} className="grid-item">
            <h2 className="sing-heading2">
              {capitalizeHeader("AAC Block Size Chart")}
            </h2>
            <table className="aac-block-size-chart">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Dimensions</th>
                  <th>Pieces per CBM</th>
                </tr>
              </thead>
              <tbody>
                {value.map((block, index) => (
                  <tr key={index}>
                    <td>{block.size}</td>
                    <td>{block.dimensions}</td>
                    <td>{block.pieces_per_cbm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      if (typeof value === "object" && !Array.isArray(value)) {
        return (
          <div key={key} className="grid-item">
            <h2 className="sing-heading2">{capitalizeHeader(key)}</h2>
            <ul className="property-list">
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>
                  <strong>{capitalizeHeader(subKey)}:</strong> {subValue}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Default rendering for other string or simple keys
      return (
        <div key={key} className="grid-item">
          <h2 className="sing-heading2">{capitalizeHeader(key)}</h2>
          <p className="singpro__description">{value}</p>
        </div>
      );
    });
  };

  // Render the product details
  return (
    <>
      <div className="singpro">
        <div className="single-bgbox">
          <img
            className="singpro__image"
            src={product?.image || "/placeholder-image.jpg"} // Add default image
            alt={product?.name || "Product Image"}
          />
          <div className="single-content">
            <h1 className="heading3">{product?.name || "Product Name"}</h1>
            <div className="product-grid">{renderProductDetails()}</div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <WhatsAppButton phoneNumber="9969929292" /> {/* Replace with your actual WhatsApp number */}
    </>
  );
};

export default Singpro;
