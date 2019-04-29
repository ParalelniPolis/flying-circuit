# Flying Circuit

Website of Hackatoshi's Flying Circuit

## Development

```bash
git clone git@github.com:ParalelniPolis/flying-circuit.git
cd flying-circuit
npm install # or yarn
npm run dev
```

## Deploy

First, build the static site and push changes to GitHub:

```bash
npm run export
git add .
git commit . -m "new build"
```

Second, deploy to gh-pages:

```bash
npm run deploy
```

or manually using this command:

```bash
git subtree push --prefix out origin gh-pages
```

TODO (michal): fix loading pages from wrong subdir `flyingcircuit.com/out`

## Sending RSVP info to Google spreadsheets

1. Create a Google Spreadsheet (with sheet called `responses`) where the first row has `email` and `name`
2. Go to `Tools -> Script Editor` and copy-paste this code (it is based on [this original gist](https://gist.github.com/tayiorbeii/cc8dc6a1028f0e8040c82d34d857bd64)):

```javascript
function doGet(e){
  return handleResponse(e);
}

// Enter sheet name where data is to be written below
var SHEET_NAME = "responses";

var SCRIPT_PROP = PropertiesService.getScriptProperties();

function handleResponse(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.

  try {
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(SHEET_NAME);

    // we'll assume header is in row 1 but you can override with header_row in GET/POST data
    var headRow = e.parameter.header_row || 1;
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row = [];
    // loop through the header columns
    for (i in headers){
      if (headers[i] == "Timestamp"){ // special case if you include a 'Timestamp' column
        row.push(new Date());
      } else { // else use header name to get data
        row.push(e.parameter[headers[i]]);
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    // return json success results
    return ContentService
          .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}
```

3. `Run -> Setup`
4. `Publish -> Deploy as web app...` and set to `Execute as me` and access for `Anyone, even anonymous`
5. Copy the deployment URL, and paste it [here](https://github.com/ParalelniPolis/flying-circuit/blob/master/config/index.js#L7).
