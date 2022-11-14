const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const app = express();
const port = 3347;

// this allows us to parse the incoming request body as JSON
app.use(express.json());
app.use(cors());

const id = "1d3DTc6KRyBUmxhREVH-C1N2YEWSVGFjhxZeB7NAQCik";

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

app.get("/insights", async (req, res) => {
  try {
    const { sheets } = await authSheets();

    // Read rows from spreadsheet
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: "Sheet2!A2:G2",
    });

    res.send(getRows.data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/click", async (req, res) => {
  try {
    const { sheets } = await authSheets();

    // Write rows to spreadsheet
    const getRows = await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: "Sheet1!A1:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        majorDimension: "COLUMNS",
        values: [[req.body.date], [req.body.user], [req.body.issue]],
      },
    });

    console.log(req.body);

    res.send(getRows.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
