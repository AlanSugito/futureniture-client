import { Card, Title } from "../../components";
import Results from "./Results";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <Card
      className={
        "glassmorph h-[450px] w-[300px] overflow-clip md:h-[520px] md:w-[1160px]"
      }
    >
      <Title text={"Find Products"} className={"mt-3 text-center text-white"} />
      <SearchBar />
      <Results />
    </Card>
  );
};

export default Search;
