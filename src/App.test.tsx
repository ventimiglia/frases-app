import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render without cards", () => {
    const { container, getByText, getByPlaceholderText, getByLabelText } =
    render(<App />);
    const input = getByPlaceholderText("Ahora un poema...");
    const label = getByLabelText("Agregar frase");
    const button = getByText("Guardar");
    
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should save a phrase and display it in the grid", () => {
    const { container, getByText, getByPlaceholderText, getByRole } =
    render(<App />);
    const input = getByPlaceholderText("Ahora un poema...");
    const button = getByText("Guardar");
    
    fireEvent.change(input, { target: { value: "Test phrase" } });
    fireEvent.click(button);

    const card = getByRole("article");

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Test phrase");
    expect(container).toMatchSnapshot();
  })

  it("should filter the grid by the search input", () => {
    const { getByText, getByPlaceholderText, getByLabelText } =
    render(<App />);
    const input = getByPlaceholderText("Ahora un poema...");
    const button = getByText("Guardar");
    const phrases = ["Phrase", "Poem", "Letter"];

    for(let phrase of phrases) {
      fireEvent.change(input, { target: { value: phrase } });
      fireEvent.click(button);
    }

    const phrase1 = getByText("Phrase");
    const phrase2 = getByText("Poem");
    const phrase3 = getByText("Letter");
    
    expect(phrase1).toBeInTheDocument();
    expect(phrase2).toBeInTheDocument();
    expect(phrase3).toBeInTheDocument();
    
    const searchInput = getByLabelText("Buscar frase");
    fireEvent.change(searchInput, { target: { value: "Phrase" } });
    
    expect(phrase1).toBeInTheDocument();
    expect(phrase2).not.toBeInTheDocument();
    expect(phrase3).not.toBeInTheDocument();
  })
});
