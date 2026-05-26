const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    autoHideMenuBar: true
  });

  mainWindow.loadFile('index.html');
}

function generateScript(responseObj) {
  const script = `console.log("🔥 SCRIPT LOADED");

sharedState.savedResponse = null;

async function onRequest(context, url, request) {
  console.log("➡️ onRequest:", url);

  if (sharedState.savedResponse?.data) {
    request.headers["X-Debug"] = "From-Proxyman";
  }

  return request;
}

async function onResponse(context, url, request, response) {
  console.log("⬅️ onResponse:", url);
  console.log("Status:", response.statusCode);

  const MOCK_RESPONSE = ${JSON.stringify(responseObj, null, 4)};

  // ✅ FORCE override response
  response.headers["Content-Type"] = "application/json";
  response.body = MOCK_RESPONSE;

  sharedState.savedResponse = MOCK_RESPONSE;

  console.log("✅ RESPONSE OVERRIDDEN");

  return response;
}`;
  return script;
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

module.exports = { generateScript };
