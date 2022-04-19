export interface ThemeProps {
  discriminator: ThemeDiscriminatorsType;
  colors: ThemeColorProps;
  spaces: ThemeSpaceProps;
  fonts: ThemeFontProps;
}

export type ThemeDiscriminatorsType = "light" | "dark";

export interface ThemeFontProps {
  heading_1: number;
  heading_2: number;
  heading_3: number;
  heading_4: number;
  body: number;
  small: number;
  caption: number;
}

export interface ThemeSpaceProps {
  space_1: number;
  space_2: number;
  space_3: number;
  space_4: number;
  space_5: number;
  space_6: number;
  space_7: number;
  space_8: number;
}

export interface ThemeColorProps {
  primary: string;

  secundary: string;

  background: string;
  on_background_primary: string;
  on_background_secundary: string;
  on_background_disable: string;

  surface: string;
  on_surface_primary: string;
  on_surface_secundary: string;
  on_surface_disable: string;

  input: string;
  on_input_primary: string;
  on_input_placeholder: string;

  shadow: string;

  success: string;
  on_success_primary: string;

  danger: string;
  on_danger_primary: string;
}
