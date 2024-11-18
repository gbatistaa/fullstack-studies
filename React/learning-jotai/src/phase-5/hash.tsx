import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import React from "react";

// 1. Definindo os átomos de hash para categoria e faixa de preço
const categoryAtom = atomWithHash<string | null>("category", null);
const priceRangeAtom = atomWithHash<[number, number] | null>("price", null);

const FilteredProductList: React.FC = () => {
  const [category, setCategory] = useAtom(categoryAtom);
  const [priceRange, setPriceRange] = useAtom(priceRangeAtom);

  const products = [
    { id: 1, name: "Produto A", category: "Eletrônicos", price: 150 },
    { id: 2, name: "Produto B", category: "Roupas", price: 50 },
    // Outros produtos...
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (!category || product.category === category) &&
      (!priceRange ||
        (product.price >= priceRange[0] && product.price <= priceRange[1]))
    );
  });

  return (
    <div>
      {/* Interface para selecionar categoria e faixa de preço */}
      <select onChange={(e) => setCategory(e.target.value || null)}>
        <option value="">Todas as Categorias</option>
        <option value="Eletrônicos">Eletrônicos</option>
        <option value="Roupas">Roupas</option>
      </select>

      <button onClick={() => setPriceRange([0, 100])}>Preço: Até $100</button>
      <button onClick={() => setPriceRange([100, 200])}>
        Preço: $100 - $200
      </button>
      <button onClick={() => setPriceRange(null)}>Limpar Filtros</button>

      {/* Renderizando a lista de produtos filtrados */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProductList;
