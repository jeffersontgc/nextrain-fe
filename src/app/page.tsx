"use client";
import React from "react";
import HeaderHome from "@/components/header";
import ModalForm from "@/components/utils/modal";
import ProductCreateForm from "@/components/products/forms/create";
import { categorys } from "../../../nextrain-be/src/database/seader/categorys";

const HomePage = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [selectCategory, setSelectCategory] = React.useState<string>("");
  const [formData, setFormData] = React.useState<any>({
    name: "",
    url: "",
    price: "",
    category_uuid: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      category_uuid: selectCategory,
    };
    console.log("PAYLOAD TO BACKEND", payload);
    setOpenModal(false);
  };

  return (
    <div>
      <HeaderHome />
      <button onClick={() => setOpenModal(!openModal)}>Click</button>
      <ModalForm
        title="Crear Producto"
        visible={openModal}
        handleVisible={() => setOpenModal(!openModal)}
      >
        <ProductCreateForm
          handleSubmit={handleSubmit}
          formData={formData}
          setSelectCategory={setSelectCategory}
          setFormData={setFormData}
          selectCategory={selectCategory}
        />
      </ModalForm>
    </div>
  );
};

export default HomePage;
