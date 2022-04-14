import { render } from "@testing-library/react-native";
import { Button, Text } from "react-native";
import { AuthContext } from "../../src/contexts/auth/authContext";
import { AuthProvider } from "../../src/contexts/auth/authProvider";

describe("AuthProvider", () => {
  it("user is empty by default", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => <Text>User id:{value.user?.id}</Text>}
        </AuthContext.Consumer>
      </AuthProvider>
    );
    expect(getByText("User id:")).toBeTruthy();
  });

  it("set user", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => (
            <>
              <Text>User id:{value.user?.id}</Text>
              <Button title="SignIn" onPress={value.signIn} />
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
    expect(getByText("User id:")).toBeTruthy();
  });
});
