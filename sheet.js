const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
    keyFile: "client_secret.json"
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});
// Create client instance for auth
const client = await auth.getClient();
// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client});
const spreadsheetID = "1R2FRkCqcLEFUCXf-cPyfGVV_Pt7VGhwpzEU_tcvA7qQ"
//get metadata about spreadsheet
const metadata = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
});
