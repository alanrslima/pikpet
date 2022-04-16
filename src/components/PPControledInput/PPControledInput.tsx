import React from "react";
import { Control, Controller } from "react-hook-form";
import { PPInput, PPInputProps } from "../PPInput/PPInput";

type PPControledInputProps = PPInputProps & {
  control: Control<any>;
  name: string;
};

export const PPControledInput: React.FC<PPControledInputProps> = ({
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <PPInput onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
};
