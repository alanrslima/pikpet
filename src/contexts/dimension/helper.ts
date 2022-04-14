import { SizeEnum } from "./type";

export const calculateSize = (width: number) => {
  if (width > 1000) {
    return SizeEnum.Large;
  } else if (width > 600) {
    return SizeEnum.Medium;
  }
  return SizeEnum.Small;
};
