import {useTheme} from './useTheme';
import {useDimension} from './useDimension';

type ThemeType<T> = (t: any, d: any) => T;

export const useStyle = <T = any>(type: ThemeType<T>): T => {
  const theme = useTheme();
  const dimension = useDimension();
  const style = type(theme.theme, dimension) as T;
  return style;
};
