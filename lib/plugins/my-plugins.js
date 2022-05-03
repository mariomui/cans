export default MyConfirmPluginConstructor;

function MyConfirmPluginConstructor() {
  // ...your main plugin code
  this.bypass = function (rawValue, promptConfig) {
    var lowerVal = rawValue.toString().toLowerCase();
    var trueValues = ['t', 'true', 'y', 'yes'];
    var falseValues = ['f', 'false', 'n', 'no'];
    if (trueValues.includes(lowerVal)) return true;
    if (falseValues.includes(lowerVal)) return false;
    throw Error("\"" + rawValue + "\" is not a valid " + promptConfig.type + " value");
  };

  return this;
}