function writeToSheet(){

        //Sheet1 is the name of the my sheet
        // "range":"Sheet1!"+A+":"+C, means column A to C since im writing 3 items
         var params = {
           "range":"Sheet1!"+A+":"+C,
           "majorDimension": "ROWS",
           "values": [
           ["name","address", "email"]
          ],
         }
         var xhr = new XMLHttpRequest();
         xhr.open('PUT', 'https://sheets.googleapis.com/v4/spreadsheets/'+myspreadsheetId+'/'+"values/"+"Sheet1!"+A+":"+C+"?"+'valueInputOption=USER_ENTERED');
         xhr.setRequestHeader('Authorization', 'Bearer ' + myAccessToken);

        xhr.send(JSON.stringify(params));
      }