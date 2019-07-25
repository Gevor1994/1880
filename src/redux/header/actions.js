const actions = {

  HEADER_DATA_SET    : 'HEADER_DATA_SET',

  dataSet: items => ({
    type: actions.HEADER_DATA_SET,
    payload: {
      items,
    }
  }),
};

export default actions;
