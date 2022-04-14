import { PPAlertProps } from "../../components";

export interface AlertProps extends Omit<PPAlertProps, "visible"> {}

export interface AlertContextProps {
  show: (props: AlertProps) => void;
}
