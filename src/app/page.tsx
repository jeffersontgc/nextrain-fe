"use client";
import React from "react";
import HeaderHome from "@/components/header";
import ModalForm from "@/components/utils/modal";
import ProductCreateForm from "@/components/products/forms/create";

const HomePage = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<any>({
    name: "",
    url: "",
    precio: "",
    descripcion: "",
  });

  console.log(formData);

  const handleSubmit = async () => {};

  return (
    <div>
      <HeaderHome />
      <ModalForm
        title="Crear Producto"
        visible={!openModal}
        handleVisible={() => setOpenModal(!openModal)}
      >
        <ProductCreateForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </ModalForm>
    </div>
  );
};

export default HomePage;
