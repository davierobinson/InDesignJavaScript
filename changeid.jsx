/* Each InDesign template supports rendering multiple factsheets. 
Change the keyframe ID to the next one - make it ready for update and render - 
called from template-specific jsx files.
Dave Robinson 9/12/2012
*/
function changeToNextID(currentFsId,nextFsId,pageKeyFrameLabel)
{
//change the id
           //find and change text of the keys
         var thisDocument = app.activeDocument;
         //Clear the find/change text preferences.         
         var pgIds = [];
          for (var idx = 0; idx < document.allPageItems.length; idx++)
          {
            var pageItem = document.allPageItems[idx];
             
            //if (pageItem.label == "pid_01")
            if (pageItem.label == pageKeyFrameLabel)
            {
              pgIds.push(pageItem);
              var thePageId = pageItem.contents;
              //alert('found frame text: '  + thePageId + ' in frame labeled: '+ pageItem.label);
              pageItem.contents = nextFsId;
              
            }
          }
         return nextFsId;
}