import { render } from "@testing-library/react-native";
import { PPSectionHeader } from "./PPSectionHeader";
import { Contexts } from "../../../src/contexts";

describe("PPSectionHeader Component", () => {
  it("should render a dynamic title and subtitle", async () => {
    const firstRender = render(
      <Contexts>
        <PPSectionHeader title="título" subTitle="subtitulo" />
      </Contexts>
    );
    expect(firstRender.getByText("título")).toBeTruthy();
    expect(firstRender.getByText("subtitulo")).toBeTruthy();
    firstRender.unmount();
    const secondRender = render(
      <Contexts>
        <PPSectionHeader title="título2" subTitle="subtitulo2" />
      </Contexts>
    );
    expect(secondRender.getByText("título2")).toBeTruthy();
    expect(secondRender.getByText("subtitulo2")).toBeTruthy();
    expect(secondRender.queryByText("título")).not.toBeTruthy();
    expect(secondRender.queryByText("subtitulo")).not.toBeTruthy();
  });

  it("should not render a subtitle", async () => {
    const { queryByTestId, getByTestId } = render(
      <Contexts>
        <PPSectionHeader title="título" />
      </Contexts>
    );
    expect(getByTestId("ppsectionheader_title")).toBeTruthy();
    expect(queryByTestId("ppsectionheader_subtitle")).not.toBeTruthy();
  });

  it("should render a title", async () => {
    const { getByTestId, debug } = render(
      <Contexts>
        <PPSectionHeader title="título" />
      </Contexts>
    );
    expect(getByTestId("ppsectionheader_title")).toBeTruthy();
  });
});
