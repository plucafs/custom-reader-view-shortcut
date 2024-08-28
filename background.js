async function triggerReaderView(commandId) {
  switch(commandId) {
    case 'trigger-reader-view':
      let toggle = browser.tabs.toggleReaderMode();
      toggle.then(() => {}, (error) => {
        console.log(error);
      });
      break;
    default:
        break;
  }
}

browser.commands.onCommand.addListener(command => triggerReaderView(command));
