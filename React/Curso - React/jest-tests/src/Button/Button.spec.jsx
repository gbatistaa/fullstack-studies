import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it("should render the button with the text 'Load more'", () => {
    render(<Button text="Load more" />);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument(); // sintaxe: espera-se que...
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button); // simula uma disparada de evento pelo usuário
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should be enabled when disabled is false", () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
