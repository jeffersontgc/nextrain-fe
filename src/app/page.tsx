"use client";
import React from "react";
import axios from "axios";

import HeaderHome from "@/components/header";
import ModalForm from "@/components/utils/modal";
import ProductCreateForm from "@/components/products/forms/create";
import SuccessNotification from "@/components/utils/success";
import ErrorNotification from "@/components/utils/error";
import { API_BACKEND } from "@/config/apis";
import ProductsLists from "@/components/products/list";

const HomePage = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [selectCategory, setSelectCategory] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<any>({
    name: "",
    price: "",
    category_uuid: "",
    description: "",
  });

  const clearState = () => {
    setFormData({
      name: "",
      price: "",
      category_uuid: "",
      description: "",
    });
    setSelectCategory("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      category_uuid: selectCategory,
    };
    setLoading(true);
    const response = await axios.post(
      `${API_BACKEND}/products/createProduct`,
      payload
    );

    if (response.data.status === "ok") {
      setSuccess(true);
      setRefetch(!refetch);
    } else {
      setError(true);
    }
    clearState();
    setOpenModal(!openModal);
  };

  return (
    <div>
      <HeaderHome />
      <button
        onClick={() => setOpenModal(!openModal)}
        className="py-10 px-10 bg-red-500"
      >
        Show
      </button>
      <ProductsLists refetch={refetch} />

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
      <SuccessNotification
        visible={success}
        setVisible={() => setSuccess(!success)}
        message="Creado correctamente"
      />
      <ErrorNotification
        visible={error}
        setVisible={() => setError(!error)}
        message="Error al crear el producto"
      />
    </div>
  );
};

export default HomePage;
