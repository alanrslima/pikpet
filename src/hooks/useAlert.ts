import {useContext} from 'react';
import {AlertContext} from '../contexts/alert/alertContext';

export const useAlert = () => {
  const alertContext = useContext(AlertContext);
  return alertContext;
};
