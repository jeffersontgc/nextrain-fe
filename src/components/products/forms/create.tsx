import React from "react";
import { API_BACKEND } from "@/config/apis";

interface Props {
  formData: {
    name: string;
    url: string;
    price: number;
    category_uuid: string;
    description: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      url: string;
      price: number;
      category_uuid: string;
      description: string;
    }>
  >;
  handleSubmit: (e: React.FormEvent) => void;
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ProductCreateForm: React.FC<Props> = ({
  formData,
  setFormData,
  handleSubmit,
  ...props
}) => {
  const [categorys, setCategorys] = React.useState([]);

  React.useEffect(() => {
    handleFetchCategorys();
  }, []);

  const handleFetchCategorys = async () => {
    const answer = await fetch(`${API_BACKEND}/categories/getAllCategories`);
    const data = await answer.json();
    setCategorys(data);
  };

  const handdleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <div className="flex flex-col w-auto">
          <div className="flex flex-row mb-4">
            <div className="mr-4 flex flex-col">
              <label htmlFor="nombre" className="mb-2">
                Nombre:
              </label>
              <input
                type="text"
                name="name"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
            <div className="ml-4 flex flex-col">
              <label htmlFor="url" className="mb-2">
                Url de la imagen:
              </label>
              <input
                type="text"
                name="url"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <div className="mr-4 flex flex-col">
              <label htmlFor="precio" className="mb-2">
                Precio (CS$):
              </label>
              <input
                type="number"
                name="price"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
            <div className="ml-4">
              <label className="mb-2">categoria:</label>
              <div className="flex items-center gap-x-1 mt-5">
                {categorys?.map((category: any, index: number) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="category_uuid"
                      onChange={() => props.setSelectCategory(category.uuid)}
                      checked={props.selectCategory === category.uuid}
                      className="mr-1"
                    />
                    <label htmlFor="category_uuid" className="cursor-pointer">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="descripcion" className="mb-2">
              Descripcion:
            </label>
            <input
              type="text"
              name="description"
              onChange={handdleOnChange}
              className="border p-1 w-full "
            ></input>
          </div>
          <div className="mb-4 text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-400 text-white px-8 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateForm;
