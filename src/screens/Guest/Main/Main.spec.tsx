import { fireEvent, render } from "@testing-library/react-native";
import { Main } from "./Main";
import { Contexts } from "../../../contexts";
import { NavigationContainer } from "@react-navigation/native";
import { GestRoutes } from "../../../routes/guest.routes";

describe("Main Screen", () => {
  it("should render the main screen", async () => {
    const { getByText } = render(
      <Contexts>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Contexts>
    );
    const title = "Encontre o barbeiro perfeito para você";
    const subTitle =
      "Os melhores profissionais estão a poucos cliques de distância";
    const button = "Começar agora";
    expect(getByText(title)).toBeTruthy();
    expect(getByText(subTitle)).toBeTruthy();
    expect(getByText(button)).toBeTruthy();
  });

  it("should open to signup screen when clicked ", async () => {
    const { findByText, queryByText } = render(
      <Contexts>
        <NavigationContainer>
          <GestRoutes />
        </NavigationContainer>
      </Contexts>
    );
    const title = "Encontre o barbeiro perfeito para você";
    const oldScreen = queryByText(title);
    const button = await findByText("Começar agora");
    expect(oldScreen).toBeTruthy();
    fireEvent.press(button);
    const newScreen = await findByText("Criar uma conta");
    expect(newScreen).toBeTruthy();
  });
});
