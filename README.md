# dynamic landing page

## running on
https://udacity-landing-page23.netlify.app



## what does it do
creat dynamic navigation bar
whenever you add new section to the htmml file the navigation bar will be automatically update itself and add anew button to take u to the new section.

## how it works
the js code creat an array including all the sections on the webpage.
for every sectionin the array it create new li inside the nav bar.
it add an link tag with the data-nav as a content
it add an eventlistener for every link tag which scroll down to custom section.
it add all li to a document fragment then add it to the nav tag.

## show the active section
it changes the style of the current section and the linked part at the navigation bar.

## resources:
https://developer.mozilla.org/en-US/
https://stackoverflow.com/
https://www.w3schools.com/
