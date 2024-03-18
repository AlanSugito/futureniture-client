import CategoryButton from "./CategoryButton";

const CategoryButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <CategoryButton text={"All"} isActive />
      <CategoryButton text={"Lights"} />
      <CategoryButton text={"Chairs"} />
      <CategoryButton text={"Tables"} />
    </div>
  );
};

export default CategoryButtons;
