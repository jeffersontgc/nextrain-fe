import React from "react";

interface Props {
  formData: {
    name: string;
    url: string;
    price: string;
    category: "comida" | "bebidas" | "licor";
    description: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      url: string;
      price: string;
      category: "comida" | "bebidas" | "licor";
      description: string;
    }>
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
      [e.target.name]: e.target.value as "comida" | "bebidas" | "licor",
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
                type="text"
                name="precio"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
            <div className="ml-4">
              <label className="mb-2">Categoría:</label>
              <div className="mt-5">
                <input
                  type="radio"
                  name="categoria"
                  value="comida"
                  onChange={handdleOnChange}
                  className="mr-1"
                />
                <label htmlFor="comida" className="cursor-pointer mr-2">
                  Comida
                </label>
                <input
                  type="radio"
                  name="categoria"
                  value="bebidas"
                  onChange={handdleOnChange}
                  className="mr-1"
                />
                <label htmlFor="bebidas" className="cursor-pointer mr-2">
                  Bebidas
                </label>
                <input
                  type="radio"
                  name="categoria"
                  value="licor"
                  onChange={handdleOnChange}
                  className="mr-1"
                />
                <label htmlFor="licor" className="cursor-pointer">
                  Licor
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="descripcion" className="mb-2">
              Descripción:
            </label>
            <input
              type="text"
              name="descripcion"
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
