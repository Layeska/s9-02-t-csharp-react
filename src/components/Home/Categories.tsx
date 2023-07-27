import { useCategoriesQuery } from "../../services/categoryApi";
import useCategory from "../../hooks/useCategory";
import Card from "./Card";

export default function Categories() {
  const { data: lists } = useCategoriesQuery(null);
  const { selectId, handleSelectId } = useCategory();

  return (
    <>
      <div className="flex flex-row justify-center gap-x-2">
        {lists?.map((list:any) => (
          <div
            key={list.id}
            className="w-[180px] h-[97px] p-2.5 bg-neutral-700 rounded-lg 
              cursor-pointer text-white "
            onClick={() => handleSelectId(list.id)}
          >
            {list.nombre}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-6 gap-y-6">
        <Card selectedId={selectId} />
      </div>
    </>
  );
}
