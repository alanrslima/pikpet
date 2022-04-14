import {useContext} from 'react';
import {DimensionContext} from '../contexts/dimension/dimensionContext';

export const useDimension = () => {
  const dimensionContext = useContext(DimensionContext);
  return dimensionContext;
};
