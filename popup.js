document.getElementById('startButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: startAutomation
    });
  });
});

function startAutomation() {
  // This function will be injected into the page
  function automateAction() {
    const config = {
      delays: { action: 1000, modal: 1000, scroll: 1000, load: 2000 },
      selectors: {
        button: ".artdeco-button__text",
        dialog: ".artdeco-modal",
        confirm: ".artdeco-modal__actionbar .artdeco-button--primary",
        dismiss: ".artdeco-modal__dismiss"
      },
      targetText: "Following"
    };

    const findAndClick = sel => document.querySelector(sel)?.click();
    const delayedAction = (fn, delay) => setTimeout(fn, delay);

    const targetButton = Array.from(document.querySelectorAll(config.selectors.button))
      .find(btn => btn.innerText.trim() === config.targetText);

    if (targetButton) {
      targetButton.click();
      delayedAction(() => {
        if (findAndClick(config.selectors.dialog)) {
          findAndClick(config.selectors.confirm);
          findAndClick(config.selectors.dismiss);
        }
        delayedAction(automateAction, config.delays.action);
      }, config.delays.modal);
    } else {
      delayedAction(() => {
        window.scrollTo(0, document.body.scrollHeight);
        delayedAction(automateAction, config.delays.load);
      }, config.delays.scroll);
    }
  }

  automateAction();
}
