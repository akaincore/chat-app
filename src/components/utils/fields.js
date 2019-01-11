const getFieldsInitialState = fields => fields.reduce((result, field) => ({ ...result, [field.name]: '' }), {});

export default getFieldsInitialState;
