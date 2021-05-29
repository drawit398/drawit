function execute() {
    chrome.tabs.executeScript(
        {file: 'p5.js'}
    ); 
    chrome.tabs.executeScript(
        {file: 'sketch.js'}
    ); 
}
  
document.getElementById('draw').addEventListener('click', execute);