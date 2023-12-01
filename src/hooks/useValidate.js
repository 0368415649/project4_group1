function useValidate(formValues, rules) {
  let result = {};

  for (const field in formValues) {
    const { value } = formValues[field];
    const { notEmpty, options, errorMsg: msg } = rules[field] || {};

    let errorMsg = null;

    if (options) {
      const isValid = options(value, formValues);
      if (!isValid) {
        errorMsg = msg || "Không hợp lệ";
      }
    }
    if (notEmpty && !value) {
      errorMsg = notEmpty;
    }

    result = {
      ...result,
      [field]: {
        ...formValues[field],
        errorMsg,
      },
    };
  }

  const isInvalid = Object.values(result).some(
    (fieldInput) => fieldInput.errorMsg
  );

  return { formInputs: result, isInvalid };
}

export default useValidate;
