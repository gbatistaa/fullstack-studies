import { render, screen } from "@testing-library/react";
import { TextInput } from "."; // Importe o componente Posts corretamente
import userEvent from "@testing-library/user-event";

describe("<Posts />", () => {
  it("should call handle change function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
  });

  it("should have a value of search value", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);

    expect(container).toMatchSnapshot();
  });
});
