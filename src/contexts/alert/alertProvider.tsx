import React, { useState } from "react";
import { AlertContext } from "./alertContext";
import { PPAlertProps, PPAlert } from "../../components";
import { AlertProps } from "./type";

export const AlertProvider: React.FC = ({ children }) => {
  const [alertProps, setAlertProps] = useState<PPAlertProps>({
    visible: false,
  });

  const show = (props: AlertProps) => {
    setAlertProps({ ...props, visible: true });
  };

  const close = () => {
    setAlertProps({ visible: false });
  };

  return (
    <AlertContext.Provider value={{ show }}>
      <PPAlert
        title={alertProps.title}
        subTitle={alertProps.subTitle}
        // buttons={alertProps.buttons}
        visible={alertProps.visible}
        onClose={close}
      />
      {children}
    </AlertContext.Provider>
  );
};
