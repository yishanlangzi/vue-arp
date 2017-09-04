
export function callJsAlert (calParams) {
  alert('Objective-C call js to show alert')
  window.webkit.messageHandlers.AppModel.postMessage(calParams)
}
