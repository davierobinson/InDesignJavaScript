/* InDesign pdf export called from template-specific jsx files.
Dave Robinson 9/12/2012 */
function outputPDF(outputDocName)
{
//output options here - do not open the pdf in acrobat
       with(app.pdfExportPreferences){
       viewPDF = false;
       }
       var myPDFExportPreset = app.pdfExportPresets.item("[High Quality Print]");
       app.activeDocument.exportFile(ExportFormat.pdfType, File(outputDocName), false, myPDFExportPreset);
}