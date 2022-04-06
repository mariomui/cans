export default MyConfirmPluginConstructor;
function MyConfirmPluginConstructor() {
  // ...your main plugin code
  this.bypass = (rawValue, promptConfig) => {
    const lowerVal = rawValue.toString().toLowerCase();
    const trueValues = ['t', 'true', 'y', 'yes'];
    const falseValues = ['f', 'false', 'n', 'no'];
    if (trueValues.includes(lowerVal)) return true;
    if (falseValues.includes(lowerVal)) return false;
    throw Error(`"${rawValue}" is not a valid ${promptConfig.type} value`);
  };
  return this;
}
