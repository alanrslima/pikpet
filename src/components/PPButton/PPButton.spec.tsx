import { fireEvent, render } from "@testing-library/react-native";
import { PPButton } from "./PPButton";
import { Contexts } from "../../../src/contexts";

const mockButtonPress = jest.fn();

describe("PPButton Component", () => {
  it("should render a dynamic button text", async () => {
    const firstRender = render(
      <Contexts>
        <PPButton text="Enviar" />
      </Contexts>
    );
    expect(firstRender.getByText("Enviar")).toBeTruthy();
    firstRender.unmount();
    const secondRender = render(
      <Contexts>
        <PPButton text="Próximo" />
      </Contexts>
    );
    expect(secondRender.getByText("Próximo")).toBeTruthy();
    expect(secondRender.queryByText("Enviar")).not.toBeTruthy();
  });

  it("should render a left icon", async () => {
    const { getByTestId } = render(
      <Contexts>
        <PPButton leftIcon={{ name: "archive" }} />
      </Contexts>
    );
    expect(getByTestId("ppbutton-lefticon")).toBeTruthy();
  });

  it("should not render a left icon", async () => {
    const { queryByTestId } = render(
      <Contexts>
        <PPButton text="Pesquisar" />
      </Contexts>
    );
    expect(queryByTestId("ppbutton-lefticon")).not.toBeTruthy();
  });

  it("should render a right icon", async () => {
    const { getByTestId, debug } = render(
      <Contexts>
        <PPButton text="Pesquisar" rightIcon={{ name: "search" }} />
      </Contexts>
    );
    expect(getByTestId("ppbutton-righticon")).toBeTruthy();
  });

  it("should not render a right icon", async () => {
    const { queryByTestId } = render(
      <Contexts>
        <PPButton text="Pesquisar" />
      </Contexts>
    );
    expect(queryByTestId("ppbutton-righticon")).not.toBeTruthy();
  });

  it("should be able to disabled", async () => {
    const { getByTestId } = render(
      <Contexts>
        <PPButton disabled onPress={mockButtonPress} />
      </Contexts>
    );
    const button = getByTestId("ppbutton");
    fireEvent.press(button);
    expect(mockButtonPress).not.toHaveBeenCalled();
  });

  it("should be show a loading indicator", async () => {
    const { getByTestId } = render(
      <Contexts>
        <PPButton loading />
      </Contexts>
    );
    expect(getByTestId("ppbutton-loading")).toBeTruthy();
  });
});
