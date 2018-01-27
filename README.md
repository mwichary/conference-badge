# conference-badge

This is a bunch of scripts to make conference badges in InDesign, a companion to [this article](https://medium.com/p/db6fa0925c5b).

### Preparing
- Download and install [Montserrat font](https://fonts.google.com/specimen/Montserrat?selection.family=Montserrat)
- If you expect people to be using emoji on their badges, download and install one of the emoji fonts (e.g. [Color Noto Emoji](https://www.google.com/get/noto/help/emoji/))
- Open InDesign, open Scripts panel (Window | Utilities | Scripts), right click on User, click on Reveal in Finder, move "Badges.js" from this repo to that folder.

### Exporting spreadsheet as CSV
- Make a list of people in the Google Spreadsheet or elsewhere (look at the included CSV file for an expected format)
- Export spreadsheet as CSV (File | Download As… | CSV)
- Open the resulting CSV in a text editor (e.g. Sublime), and File > Save With Encoding > UTF-16 LE (InDesign will only understand UTF-16, sigh)

### Merging the file with data
- Open InDesign file NAME.indd.

- Open Data Merge pane (Window | Utilities | Data Merge).
- Click on three lines in the upper right corner, choose Select Data Source… (If you’ve done this once already, use Use Data Source, and skip below to Created Merged Document…)
- Ignore the warning about “Changing to a new data source”.
- In the open dialog box, click Options and check Show Import Options.
- Find and click on the exported CSV in the filesystem.
- In the Data Source Import Options dialog, switch Encoding from ASCII to Unicode. Press OK.
- Click on three lines in the upper right corner again, choose Created Merged Document…
- In the dialog box, deselect Generate Overset Text Report.
- In the third tab, make sure Link Images is selected.
- Press OK.
- Wait for a bit – this will create a new document with the right amount of pages, but data not yet in the badge itself (you can see it in the temporary fields at the bottom of each page).
- Save this new file, just in case InDesign crashes. It will.

### Moving the data into fields and getting the script to lay out badges

- In the new document, open Scripts (Window | Utilities | Script).
- In User section, double-click on Badges.js.
- This might take a while (10 badges per minute on my computer). There should be a progress bar.
- You will end up with the finished file. Save it.

### Manual fixes

- The script will highlight in red any characters that are not rendered properly (e.g. emoji). You need to swap them one by one with the proper font, since InDesign doesn’t have the same concept of fallback fonts as browsers do.
- Also, do any other manual fixes/editing that are necessary.
- Export to PDF and send to your printer!

-----

### Wish list

- Better handling of emoji and fall back fonts
- Something, *anything* else than InDesign
