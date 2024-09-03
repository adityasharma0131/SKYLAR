import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singpro = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/src/products.json"); // Adjust path if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (error) {
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

  // Render the product details
  return (
    <div className="singpro">
      <div className="single-bgbox">
        <img
          className="singpro__image"
          src={product.image}
          alt={product.name}
        />
        <div className="single-content">
          <h1 className="singpro__title">{product.name}</h1>
          <p className="singpro__description">{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Singpro;
