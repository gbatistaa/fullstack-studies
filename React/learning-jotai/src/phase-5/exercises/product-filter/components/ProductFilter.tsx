import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";

function ProductFilter(): JSX.Element {
  return (
    <div>
      <CategoryFilter />
      <PriceRangeFilter />
    </div>
  );
}

export default ProductFilter;
