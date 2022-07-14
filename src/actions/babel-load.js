// never use default when the reciever is import * as
export function plopper(plop) {
  plop.setActionType('babel-load', function (answers, config, plop) {
    console.log(config, prop, answers);

    return 'success status message';
  });

  // use the custom action
  plop.setGenerator('install', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please',
      },
    ],
    actions: [
      {
        type: 'doTheThing',
        configProp: 'available from the config param',
      },
    ],
  });
}
