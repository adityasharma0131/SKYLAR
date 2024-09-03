import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singpro = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch product data by ID
  useEffect(() => {
    fetch("/src/products.json") // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singpro">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default Singpro;
