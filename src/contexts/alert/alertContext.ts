import {createContext} from 'react';
import {IAlertContext} from './type';

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);
