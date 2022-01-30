type ValidateType = (value: string) => string | undefined;

export const required: ValidateType = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator =
  (maxLength: number): ValidateType =>
  (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
  };
