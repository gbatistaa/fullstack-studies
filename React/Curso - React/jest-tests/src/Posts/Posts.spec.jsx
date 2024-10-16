import { render, screen } from "@testing-library/react";
import { Posts } from "./index"; // Importe o componente Posts corretamente

const props = {
  posts: [
    { id: 1, title: "title 1", body: "body 1", cover: "img/img.png" },
    { id: 2, title: "title 2", body: "body 2", cover: "img/img2.png" },
    { id: 3, title: "title 3", body: "body 3", cover: "img/img3.png" },
    // { id: 4, title: 'title 4', body: 'body 4', cover: 'img/img4.png' },
  ],
};

describe("<Posts />", () => {
  it("should render posts", () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /title /i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title /i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute(
      "src",
      "img/img3.png"
    );
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
