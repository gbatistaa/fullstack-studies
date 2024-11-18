import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import React from "react";

const priceRangeAtom = atomWithHash("price-range", [0, 100], {
  serialize: (val) => `${val[0]}-${val[1]}`,
  deserialize: (str) => str.split("-").map((num) => Number(num)),
});

function PriceRangeFilter(): JSX.Element {
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    const { name, value } = event.target;
    setPriceRange((prevRange) =>
      name === "price-min"
        ? [Number(value), prevRange[1]]
        : [prevRange[0], Number(value)],
    );
  };

  return (
    <div>
      <input
        type="number"
        name="price-min"
        placeholder="Min. price"
        onChange={(e) => handlePriceChange(e)}
      />
      <br />
      <input
        type="number"
        name="price-max"
        placeholder="Max. price"
        onChange={(e) => handlePriceChange(e)}
      />
    </div>
  );
}

export default PriceRangeFilter;
