import React from "react";

interface Props {
  formData: {
    name: string;
    url: string;
    precio: string;
    categoria: "comida" | "bebidas" | "licor";
    descripcion: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      url: string;
      precio: string;
      categoria: "comida" | "bebidas" | "licor";
      descripcion: string;
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
            <div className="mr-4">
              <label htmlFor="nombre" className="mb-4">
                Nombre:
              </label>{" "}
              <br />
              <input
                type="text"
                id="nombre"
                name="name"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
            <div className="ml-4">
              <label htmlFor="url" className="mb-4">
                Url de la imagen:
              </label>
              <br />
              <input
                type="text"
                id="url"
                name="url"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <div className="mr-4">
              <label htmlFor="precio" className="mb-4">
                Precio (CS$):
              </label>
              <br />
              <input
                type="text"
                id="precio"
                name="precio"
                onChange={handdleOnChange}
                className="border p-1"
              />
            </div>
            <div className="ml-4">
              <label className="mb-6">Categoría:</label>
              <br />
              <input
                type="radio"
                id="comida"
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
                id="bebidas"
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
                id="licor"
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
          <div className="mb-4">
            <label htmlFor="descripcion" className="mb-4">
              Descripción:
            </label>
            <br />
            <input
              type="text"
              id="descripcion"
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
