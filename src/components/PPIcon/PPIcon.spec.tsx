import { render } from "@testing-library/react-native";
import { PPIcon } from "./PPIcon";

describe("PPIcon Component", () => {
  it("should render a dynamic button text", async () => {
    const { getByTestId, debug } = render(
      <PPIcon testID="ppicon" name="rocket" type="font_awesome" />
    );
    expect(getByTestId("ppicon")).toBeTruthy();
  });
});
