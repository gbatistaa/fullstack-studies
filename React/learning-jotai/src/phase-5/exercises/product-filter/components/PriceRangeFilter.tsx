import { atomWithHash } from "jotai-location";

const priceRangeAtom = atomWithHash("price-range", [0, 100], {
  serialize: (val) => `${val[0]}-${val[1]}`,
  deserialize: (str) => str.split("-").map((num) => Number(num)),
});

function PriceRangeFilter(): JSX.Element {
  return (
    <div>
      <input type="number" name="price-min" placeholder="Min. price" />
      <br />
      <input type="number" name="price-max" placeholder="Max. price" />
    </div>
  );
}

export default PriceRangeFilter;
