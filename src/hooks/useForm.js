import { useMemo, useState } from 'react';

function useForm(rules) {
  const [formData, setFormData] = useState({});
  const [dirtyFields, setDirtyFields] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  const register = (name, defaultValue = '') => {
    const onChange = (e) => {
      if (!isDirty) setIsDirty(true);

      const target = e.target;
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    };

    const onBlur = (e) => {
      const target = e.target;
      setDirtyFields((prev) => ({
        ...prev,
        [target.name]: true,
      }));
    };

    return {
      name,
      value: formData[name] || defaultValue || '',
      onChange,
      onBlur,
      defaultValue,
    };
  };

  const handleSubmit = (submitFn) => {
    return (e) => {
      e.preventDefault();
      submitFn(formData);
    };
  };

  const errors = useMemo(() => {
    const entries = Object.keys(rules).map((name) => {
      const { required, option, errorMsg } = rules[name] || {};
      const msg = (() => {
        if (required && !formData[name])
          return typeof required === 'boolean'
            ? 'Can not be empty'
            : String(required);

        if (
          option &&
          typeof option === 'function' &&
          !option(formData[name], formData)
        ) {
          return errorMsg || 'Invalid';
        }

        return null;
      })();

      return [name, msg];
    });

    return Object.fromEntries(entries);
  }, [formData, rules]);

  const dirtyErrors = useMemo(() => {
    const result = {};
    for (const field in dirtyFields) {
      result[field] = errors[field];
    }

    return result;
  }, [dirtyFields, errors]);

  const isError = Object.values(errors).some((e) => e);

  const setValue = (nameField, value) => {
    setFormData((prev) => ({
      ...prev,
      [nameField]: value,
    }));
  };

  return {
    handleSubmit,
    register,
    setValue,
    setFormData,
    formState: {
      isDirty,
      dirtyFields,
      errors,
      dirtyErrors,
      isError,
      data: formData,
    },
  };
}

export default useForm;
