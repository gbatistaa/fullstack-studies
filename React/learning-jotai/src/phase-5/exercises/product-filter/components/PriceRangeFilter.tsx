import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import React from "react";

const priceRangeAtom = atomWithHash<number[]>("price-range", [0, 100], {
  serialize: (val) => `${val[0]}-${val[1]}`,
  deserialize: (str) => str.split("-").map((num) => parseInt(num)),
});

function PriceRangeFilter(): JSX.Element {
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);
  console.log(priceRange);

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const newValue = Math.max(0, parseInt(value) || 0);
    const [min, max] = priceRange;
    if (name === "price-min") {
      setPriceRange([Math.min(newValue, max), max]);
    }
    if (name === "price-max") {
      setPriceRange([min, Math.max(newValue, min)]);
    }
  };

  return (
    <div>
      <input
        type="number"
        name="price-min"
        placeholder="Min. price"
        onChange={(e) => handlePriceChange(e)}
        value={priceRange[0]}
      />
      <br />
      <input
        type="number"
        name="price-max"
        placeholder="Max. price"
        onChange={(e) => handlePriceChange(e)}
        value={priceRange[1]}
      />
    </div>
  );
}

export default PriceRangeFilter;
