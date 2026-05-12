import { useEffect, useState } from "react";

import axiosInstance from "../api/axiosInstance";

import Navbar from "../components/Navbar";

function Home() {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } =
          await axiosInstance.get(
            "/products"
          );

        setProducts(data);
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data?.message
        );
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-bold mb-10">
          Latest Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-2xl font-semibold">
                  {product.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;