const express = require("express");
const { google } = require("googleapis");

const app = express();
const port = 3345;

// this allows us to parse the incoming request body as JSON
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

async function authSheets() {
  //Function for authentication object
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  //Create client instance for auth
  const authClient = await auth.getClient();

  //Instance of the Sheets API
  const sheets = google.sheets({ version: "v4", auth: authClient });

  return {
    auth,
    authClient,
    sheets,
  };
}

const id = "1d3DTc6KRyBUmxhREVH-C1N2YEWSVGFjhxZeB7NAQCik"

app.get("/", async (req, res) => {
  const { sheets } = await authSheets();

  // Read rows from spreadsheet
  const getRows = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range: "Sheet1!A1:C5",
  });

  res.send(getRows.data);
});