/**
 * GroupCal Lead Capture - Standalone Google Apps Script
 * Writes to the same Google Sheet as your other projects
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Name it "GroupCal Lead Capture"
 * 4. Delete all code and paste this script
 * 5. Save (Cmd+S)
 * 6. Click Deploy > New deployment
 * 7. Click gear icon next to "Select type"
 * 8. Choose "Web app"
 * 9. Settings:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 10. Click "Deploy"
 * 11. Copy the deployment URL
 * 12. Replace PLACEHOLDER_URL in all 4 GroupCal landing pages
 */

function doPost(e) {
  try {
    // Open the same Google Sheet as your other projects
    const spreadsheet = SpreadsheetApp.openById(
      "19g0Bf1QgAnZeFkfxXV0ELrUJjvs3zg4EvIGAmdZOTtY"
    );

    // Parse the incoming data
    let email, source;

    if (e.postData && e.postData.type === "application/json") {
      const data = JSON.parse(e.postData.contents);
      email = data.email;
      source = data.source || "website";
    } else {
      email = e.parameter.email;
      source = e.parameter.source || "website";
    }

    // Get or create the GroupCal sheet
    let sheet = spreadsheet.getSheetByName("GroupCal");
    if (!sheet) {
      sheet = spreadsheet.insertSheet("GroupCal");
      sheet.appendRow(["Timestamp", "Email", "Source"]);
    }

    // Check for duplicate emails in column B
    const existingEmails = sheet.getRange("B:B").getValues().flat();
    if (existingEmails.includes(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Email already registered"
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Add the new row
    sheet.appendRow([new Date(), email, source]);

    // Return success
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Submitted successfully"
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("");
}
