const APP_NAME = 'Pointer'

function run() {
  SpreadsheetApp.getUi()
    .createMenu(APP_NAME)
    .addItem('Registrar entrada', 'registerEntry_')
    .addItem('Registrar saída', 'registerOut_')
    .addToUi();
}

const pointerConfirm_ = () => {
  const confirmUI = SpreadsheetApp.getUi();
  return confirmUI.alert( APP_NAME, 'Deseja continuar com o registro?', confirmUI.ButtonSet.YES_NO);
}

const registerEntry_ = () => {
  const dateTimeNow = new Date();

  const entryUI = SpreadsheetApp.getUi();
  const confirmResult = pointerConfirm_()

  if (confirmResult == entryUI.Button.YES) {
    SpreadsheetApp.getActiveSheet()
      .appendRow([dateTimeNow, dateTimeNow]);

    entryUI.alert('Entrada registrada com sucesso :)');
  } else {
    entryUI.alert('Entrada não foi registrada :(');
  }
}

const registerOut_ = () => {
  const expenseUI = SpreadsheetApp.getUi();
  const confirmResult = pointerConfirm_()

  if (confirmResult == expenseUI.Button.YES) {
    expenseUI.alert('Saída registrada com sucesso :)');
  } else {
    expenseUI.alert('Saída não foi registrada :(');
  }
}
