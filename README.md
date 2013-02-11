README.md

This is an assortment of JavaScript files designed
to be used when scripting Adobe InDesign to modify existing .indd files(templates).
They are being used with InDesign 6.0, although they will likely work with InDesign 5.5 as well.

InDesign has many scriptable elements and I created these to support changing text, delete text,
moving and manipulating text frames. For example, changeframesize.jsx includes
a basic funcion to change the frame size (bounding coordinates array) and helpers 
to move a keyed frame up, down, stretch up, down, left or right, etc.

Currently this code is somewhere between specific to my needs and generic code
used to manipulate InDesign documents.

Specific to my needs means: I have templates that get loaded with different "sized" content
that then needs to be arranged a bit for better layout. The documents are then exproted to pdfs.

Dave Robinson
2013-1-11
