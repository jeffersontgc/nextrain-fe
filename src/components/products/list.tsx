import React from "react";
import Image from "next/image";
import axios from "axios";

import { Products } from "@/types/products";
import { API_BACKEND } from "@/config/apis";
import FilterProductsSections from "./filter-sections";

interface Props {
  refetch: boolean;
}

const ProductsLists: React.FC<Props> = ({ refetch }) => {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [categorySelected, setCategorySelected] = React.useState<string>("");

  React.useEffect(() => {
    fetchProducts();
  }, [refetch]);

  const fetchProducts = async () => {
    const response = await axios.get(`${API_BACKEND}/products/getAllProducts`);

    const data = await response.data;

    setProducts(data);
  };

  return (
    <div className="m-5">
      <FilterProductsSections
        categorySelected={categorySelected}
        setSearch={setSearch}
        setCategorySelected={setCategorySelected}
      />
      <div className="grid grid-cols-3 items-center justify-between w-full gap-5  mt-10">
        {products?.map((product, index) => {
          return (
            <div key={index} className="border w-full bg-green-400 rounded-lg">
              <Image
                width={550}
                height={400}
                src={product.image as string}
                alt=""
              />
              <div className="px-2 py-2">
                <h1 className="text-white font-light">
                  {" "}
                  Nombre del producto: {product.name}
                </h1>
                <h1 className="text-white font-light">
                  {" "}
                  Precio del producto: {product.price}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsLists;
