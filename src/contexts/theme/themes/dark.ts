import {
  ThemeProps,
  ThemeColorProps,
  ThemeFontProps,
  ThemeSpaceProps,
} from "../type";
const colors: ThemeColorProps = {
  primary: "rgba(1,176,156,1)",

  secundary: "rgba(255,192,125,1)",

  background: "#111111",
  on_background_primary: "rgba(255,255,255,1)",
  on_background_secundary: "rgba(255,255,255,0.5)",
  on_background_disable: "rgba(255,255,255,0.3)",

  surface: "#222",
  on_surface_primary: "rgba(255,255,255,1)",
  on_surface_secundary: "rgba(255,255,255,0.5)",
  on_surface_disable: "rgba(255,255,255,0.3)",

  input: "#F7F7F7",
  on_input_primary: "rgba(0,0,0,1)",
  on_input_placeholder: "#989898",

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

export const ThemeDark: ThemeProps = {
  discriminator: "dark",
  colors,
  spaces,
  fonts,
};
