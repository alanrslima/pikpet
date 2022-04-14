import {useContext} from 'react';
import {ThemeContext} from '../contexts/theme/themeContext';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
