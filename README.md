# Booking Website (Static + Free)

This is a simple static website with a home page and a booking form that submits to Google Sheets via Google Apps Script.

## 🔧 Setup

### 1. Create a Google Sheet

- Open [Google Sheets](https://sheets.new)
- Create columns: `Name | Email | Date`

### 2. Add Google Apps Script

- Click **Extensions > Apps Script**
- Replace code with:
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.email, data.date]);
  return ContentService.createTextOutput("Success");
}
```
- Deploy as a Web App:
  - Select **"Anyone"** for access
  - Copy the Web App URL

### 3. Update script.js

Replace `YOUR_GOOGLE_SCRIPT_URL` with the Web App URL.

### 4. Run Locally or Deploy

To view locally:
- Open `index.html` in your browser

To deploy:
- Upload to [GitHub Pages](https://pages.github.com) or [Netlify](https://netlify.com)

Done!
