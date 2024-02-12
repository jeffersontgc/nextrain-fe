import { API_BACKEND } from "@/config/apis";
import React from "react";

interface Props {
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  categorySelected: string;
}
const FilterProductsSections: React.FC<Props> = ({
  setSearch,
  setCategorySelected,
  categorySelected,
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

  return (
    <div className="flex gap-x-5 justify-start">
      <div className="flex items-start gap-y-1 flex-col">
        <label htmlFor="">Buscar</label>
        <input
          className="border border-black rounded-lg py-1"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label>Seleciona una categoria</label>
        <div className="flex items-center gap-x-2">
          {categorys?.map((category: any, index: number) => (
            <div key={index}>
              <input
                type="checkbox"
                name="category_uuid"
                onChange={() => setCategorySelected(category.uuid)}
                checked={categorySelected === category.uuid}
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
  );
};

export default FilterProductsSections;
