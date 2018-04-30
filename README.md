#personalWebSite
My personal website built using React and Redux.
To replace the mouse pointer I used HOC compoments wrapping the rest of the application with the new mouse pointer and tracking mouse movements. Changes in behaviour like (on hover, scroll and click) were updated to the store by each component.

Transitions were implemented in each page rendering using Custom CSS (Keyframes, and animations)

Links are handled using React Route. NavBar contains four links

HOME
WORK
ABOUT
CONTACT

The WORK page contains two components, A list with all projects and a tilting component with the feature image for the project. Two timers were used to cycle through the menu items, one for the menu and the other for the picture. They both were initiated at ComponentDidMount and terminated at ComponentWillUnmout. Feature image, brings the details page.

The Details page display details of the selected project. The page uses Custom scroll pointer, at the bottom of the page you have a link picture to previous and next project, and upon clicking on it the page automatically scrolls to the top of the page and initiates transition to the selected project.

ABOUT page display information about me, but also uses a picture that tilts and changes depending on mouse position. Clicking on the picture will open one modal that will display data from the user's picture taken while changing routes in the application, at the end of the presentation, another modal will be opened showing all the pictures taken. If access to camera is denied upon request, no modals would be opened.

Styling of application was done using a combination of Semantics and Custom Css, media queries were also used to make sure page would render in different size screens.
