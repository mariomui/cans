/**
 * @description makes a private method payload-maker: type, name, message
 */
export const plopActionCreatorByTypeFactory = (type) => {
  return (name = '', message = '') => ({
    type,
    name,
    message,
  });
};
