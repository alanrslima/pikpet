import { fireEvent, render } from "@testing-library/react-native";
import { PPButton } from "../../src/components";
import { Contexts } from "../../src/contexts";

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
});
