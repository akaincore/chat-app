const getFieldsInitialState = (fields) => (fields.reduce(
    (result, field) => {
      return { ...result, [field.name]: '' }
    },
    {}
  )
);

export default getFieldsInitialState;
