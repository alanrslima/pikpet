import {
  ThemeProps,
  ThemeColorProps,
  ThemeFontProps,
  ThemeSpaceProps,
} from "../type";

const colors: ThemeColorProps = {
  primary: "rgba(1,176,156,1)",
  secundary: "rgba(241, 154, 62, 1)",

  background: "#FFF",
  on_background_primary: "rgba(0,0,0,1)",
  on_background_secundary: "rgba(0,0,0,0.4)",
  on_background_disable: "rgba(0,0,0,0.05)",

  surface: "#FFFFFF",
  on_surface_primary: "rgba(0,0,0,1)",
  on_surface_secundary: "rgba(0,0,0,0.5)",
  on_surface_disable: "rgba(0,0,0,0.1)",

  input: "#FFFFFF",
  on_input_primary: "rgba(0,0,0,1)",
  on_input_placeholder: "rgba(0,0,0,0.1)",

  shadow: "rgba(0, 0, 0, 0.1)",

  success: "rgba(106, 194,89,0.2)",
  on_success_primary: "rgba(106, 194,89,1)",

  danger: "rgba(255, 0,0,0.2)",
  on_danger_primary: "rgba(255, 0,0,1)",
};

const spaces: ThemeSpaceProps = {
  space_1: 4,
  space_2: 6,
  space_3: 12,
  space_4: 16,
  space_5: 24,
  space_6: 32,
  space_7: 40,
  space_8: 48,
};

const fonts: ThemeFontProps = {
  heading_1: 30,
  heading_2: 26,
  heading_3: 22,
  heading_4: 16,
  body: 14,
  small: 12,
  caption: 10,
};

export const ThemeLight: ThemeProps = {
  discriminator: "light",
  colors,
  spaces,
  fonts,
};
