/* Each InDesign template supports rendering multiple documents. 
Find a frame by keyframe ID and change geometricbounds.
Included in template-specific jsx files.
Works for simple moving - not tested for all possiblities

Dave Robinson 1/03/2013

Added move and shrink functions - 1/7/2013
Update Move functions to clean up at use.
*/
    var moveUpDownAmount = ''; 
    var moveLeftRightAmount = '';
    var stretchUpDownAmount = '';
    var stretchLeftRightAmount = '';

function changeFrameMoveUp(topy,pageKeyFrameLabel)
{
  if (isNumber(topy))
  {
   //alert("got here mu " + topy + " " + pageKeyFrameLabel);
    moveUpDownAmount = -topy; //negative number
	stretchUpDownAmount = -topy; //negative number
    //alert('Move up amount is: '+moveUpDownAmount+ ' for '+pageKeyFrameLabel);
	var moveitup = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);      
      moveUpDownAmount = '';
	  stretchUpDownAmount = '';
  }
  else
  {
    alert('Move up amount is not valid for '+ pageKeyFrameLabel);
  }
}

 function changeFrameMoveDown(topy,pageKeyFrameLabel)
 {
   if (isNumber(topy))
  {
	//alert("got here md " + topy);
    moveUpDownAmount = topy; //positive number
	stretchUpDownAmount = topy //positive number
    try{
		var moveitdown = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);
		//alert('Move down amount is: '+moveUpDownAmount+ ' for '+pageKeyFrameLabel);
		moveUpDownAmount = '';
		stretchUpDownAmount = '';
      }
      catch(error){      
      alert('problem with move down and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
    alert('movedown amount is not valid for '+ pageKeyFrameLabel);
  }
  
 }
 function changeFrameMoveLeft(leftx,pageKeyFrameLabel)
 {
   if (isNumber(leftx))
  {
	//alert("got here ml " + leftx);
    moveLeftRightAmount = -leftx; //negative number
	stretchLeftRightAmount =  -leftx; //negative number
    try{
		var moveitleft = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);   
		//alert('Move left amount is: '+moveLeftRightAmount+ ' for '+pageKeyFrameLabel);
		moveLeftRightAmount = '';
		stretchLeftRightAmount = '';
		}
      catch(error){      
      alert('problem with move left and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Move left amount is not valid for '+ pageKeyFrameLabel);
  }
  
}
function changeFrameMoveRight(leftx,pageKeyFrameLabel)
{
  if (isNumber(leftx))
  {
	//alert("got here mr " + leftx + " " + pageKeyFrameLabel);
    moveLeftRightAmount = leftx; //positive number
	stretchLeftRightAmount =  leftx; //positive number
    try{
		var moveitright = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);  
		// alert('Move right amount is: '+moveLeftRightAmount+ ' for '+pageKeyFrameLabel);
		moveLeftRightAmount = '';
		stretchLeftRightAmount = '';
		}
      catch(error){      
      alert('problem with move right and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Move right amount is not valid for '+ pageKeyFrameLabel);
  }
}

function changeFrameExpandDown(boty,pageKeyFrameLabel)
{
  if (isNumber(boty))
  {
	//alert("got here ed " + boty + " " + pageKeyFrameLabel);
    stretchUpDownAmount = boty; //positive number
    try {
		var stretchitdown = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);
		//alert('expand down amount is: '+stretchUpDownAmount+ ' for '+pageKeyFrameLabel);
		stretchUpDownAmount = '';
		}
      catch(error){      
      alert('problem with expand down and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Expand down amount is not valid for '+ pageKeyFrameLabel);
  }
}

function changeFrameShrinkUp(boty,pageKeyFrameLabel)
{
  if (isNumber(boty))
  {
	//alert("got here su " + boty + " " + pageKeyFrameLabel);
    stretchUpDownAmount = -boty; //negative number
    try {
		var shrinkitup = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);
		// alert('Shrink up amount is: '+stretchUpDownAmount+ ' for '+pageKeyFrameLabel);
		stretchUpDownAmount = '';
		}
      catch(error){      
      alert('problem with shrink up and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Shrink up amount is not valid for '+ pageKeyFrameLabel);
  }
}

function changeFrameExpandRight(rightx,pageKeyFrameLabel)
{
  if (isNumber(rightx))
  {
	//alert("got here er " + rightx + " " + pageKeyFrameLabel);
    stretchLeftRightAmount = rightx; //positive number
    try {
		var stretchitdown = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);
		//alert('Expand right amount is: '+stretchLeftRightAmount+ ' for '+pageKeyFrameLabel);
		stretchLeftRightAmount = '';
		}
      catch(error){      
      alert('problem with expand ritht and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Expand right amount is not valid for '+ pageKeyFrameLabel);
  }
}

function changeFrameShrinkLeft(rightx,pageKeyFrameLabel)
{
  if (isNumber(rightx))
  {
	//alert("got here sl " + rightx + " " + pageKeyFrameLabel);
    stretchLeftRightAmount = -rightx; //negative number
    try {
		var shrinkitup = changeFrameSize(moveUpDownAmount,moveLeftRightAmount,stretchUpDownAmount,stretchLeftRightAmount,pageKeyFrameLabel);
		//alert('Shrink left amount is: '+stretchLeftRightAmount+ ' for '+pageKeyFrameLabel);
		stretchLeftRightAmount = '';
		}
      catch(error){      
      alert('problem with shrink left and this label: ' +pageKeyFrameLabel , error);
      }
  }
  else
  {
  alert('Shrink left amount is not valid for '+ pageKeyFrameLabel);
  }
}


function changeFrameSize(topy,leftx,boty,rightx,pageKeyFrameLabel)
{
//alert("cfs: t: " + topy +" l: "+ leftx  +" b: "+ boty +" r: "+rightx+" "+ pageKeyFrameLabel); 
//change the coords
           //find the text frame key
         var thisDocument = app.activeDocument;
         //Clear the find/change text preferences.   
         var pgIds = [];
          for (var idx = 0; idx < document.allPageItems.length; idx++)
          {
            var pageItem = document.allPageItems[idx];
            
            if (pageItem.label == pageKeyFrameLabel)
            {
              pgIds.push(pageItem);
              var oldbounds = pageItem.geometricBounds;              
              var newbounds = oldbounds;              
              if (topy !== null  && topy !== "")
                { 
                  //alert('here is topy: '+topy);
                  newbounds[0] = oldbounds[0] + topy;
                  newbounds[1] = oldbounds[1];
                  newbounds[2] = oldbounds[2];
                  newbounds[3] = oldbounds[3];
                  //alert('got here top y new: '+newbounds[0]);
				  //Since we changed the topy the newbounds is now the oldbound for next function
				  oldbounds[0] = newbounds[0];
                  //alert("new bounds first: " + newbounds);
                }
                
              if (leftx !== null && leftx !== "")
                {                   
                  newbounds[1] = oldbounds[1] + leftx;
                  newbounds[0] = oldbounds[0];
                  newbounds[2] = oldbounds[2];
                  newbounds[3] = oldbounds[3];
				//Since we changed the leftx the newbounds is now the oldbound for next function
				  oldbounds[1] = newbounds[1];
				  //alert("new bounds second: " + newbounds);
                }
                
              if (boty !== null && boty !== "")
                { 
                  //alert('here is boty: '+boty);
                  newbounds[2] = oldbounds[2] + boty;
                  newbounds[0] = oldbounds[0];
                  newbounds[1] = oldbounds[1];
                  newbounds[3] = oldbounds[3];				  
				  
                   var frameHeight = newbounds[2] - newbounds[0];
                   //alert('got here boty: top: '+newbounds[0]+' bot: '+ newbounds[2] + ' height: '+frameHeight);
                   // if (frameHeight < .05){ 
					   // alert('Too much up/down shrinking for frame: ' + pageKeyFrameLabel + '. No shrinking done!');
					   // newbounds[2] = oldbounds[2];
                   // } 
				  //Since we changed the boty the newbounds is now the oldbound for next function
				  oldbounds[2] = newbounds[2];
				  //alert("new bounds third: " + newbounds);
                }
                
              if (rightx !== null  && rightx !== "")
                {
                  newbounds[3] = oldbounds[3] + rightx;
                  newbounds[0] = oldbounds[0];
                  newbounds[1] = oldbounds[1];
                  newbounds[2] = oldbounds[2];
				  
                   var frameWidth = newbounds[3] - newbounds[1];
                 //alert('got here rightx: right: '+newbounds[3]+' left: '+ newbounds[1] + ' width: '+frameWidth);
                   // if (frameWidth < .05){
					   // alert('Too much left/right shrinking for frame: ' + pageKeyFrameLabel + '. No shrinking done!');
					   // newbounds[3] = oldbounds[3];
                   // }
				   //Since we changed the rightx the newbounds is now the oldbound for next function
				  oldbounds[3] = newbounds[3];
				  //alert("new bounds fourth: " + newbounds);
                }              
              
              //if we want to add, say 0.125 outer dimension instead of providing new coords. something like this
              //newbounds = [oldbounds[0] - 0.125, oldbounds[1] - 0.125, oldbounds[2] + 0.125, oldbounds[3] + 0.125 ];              
              //alert('old frame size: '  +oldbounds + ' new frame size: '+newbounds );
              //page the change on the frame
              pageItem.geometricBounds = newbounds;
			  //alert("new bounds final: " + newbounds);
              //alert('new frame size: '  + pageItem.geometricBounds + ' in frame labeled: '+ pageItem.label);
              //pageItem.paragraphs.everyItem().pointSize = "17pt";//.maximumLetterSpacing = 45;
              
            }
          }
         return pageKeyFrameLabel;
}

