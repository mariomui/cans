/**
 * @description makes a private method payload-maker: type, name, message
 */
const plopActionCreatorByTypeFactory = (type) => {
  return (name = '', message = '') => ({
    type,
    name,
    message,
  });
};

export default { plopActionCreatorByTypeFactory };
