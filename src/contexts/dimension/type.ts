export enum OrientationEnum {
  Landscape,
  Portrait,
}

export enum SizeEnum {
  Small,
  Medium,
  Large,
}

export interface DimensionProps {
  orientation: OrientationEnum;
  size: SizeEnum;
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  statusBarHeight: number;
}

export interface DimensionContextProps extends DimensionProps {}
