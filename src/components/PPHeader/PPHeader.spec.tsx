import { render } from "@testing-library/react-native";
import { PPHeader } from "./PPHeader";
import { Contexts } from "../../../src/contexts";

const mockButtonPress = jest.fn();

describe("PPHeader Component", () => {
  it("should render a left header button", async () => {
    // const { getByRole } = render(
    //   <Contexts>
    //     <PPHeader leftButtons={[{ icon: { name: "arrow-left" } }]} />
    //   </Contexts>
    // );
    // expect(getByRole("button")).toBeTruthy();
  });
});
