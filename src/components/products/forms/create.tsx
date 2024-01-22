import React from "react";

interface Props {
  formData: {
    name: string;
    description: string;
    price: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; description: string; price: string }>
  >;
  handleSubmit: () => void;
}

const ProductCreateForm: React.FC<Props> = ({
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handdleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return <div>ProductCreateForm</div>;
};

export default ProductCreateForm;
