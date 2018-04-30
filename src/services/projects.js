export default [
  {
    id: "1",
    name: "Personal Website",
    route: "personal-website",
    description: "My personal Website built using React and Redux",
    keyPoints: `Page Transitions
  Pane tilting effects
  Custom Mouse React Component
  React Routes
  WebRtc to take pictures
  Clarifai Image Recognition to analyze pictures
  Custom CSS
  `,
    links: [
      //   { name: "Demo", url: "www.thisdemo.com" },
      //   { name: "GitHub", url: "www.github" },
      //   { name: "WebSite", url: "www.mywebsite.com" }
    ],
    media: {
      featured: ["personalwebsite-featured.png"],
      wall: [
        "personalwebsite-wall-1.png",
        "personalwebsite-wall-2.png",
        "personalwebsite-wall-3.png"
      ],
      webSite: ["personalwebsite-featured.png"],
      video: "personal-website-media-video.gif",
      mobile: ["personal-website-mobile.gif"]
    },
    fullDescription: {
      techonologies: [
        "Javascript",
        "React",
        "Redux",
        "React Routes",
        "CSS",
        "Clarifai API",
        "WebRtc"
      ],
      services: "WebApp",
      description: `My personal website built using React and Redux.
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
`,
      client: "Personal Project",
      year: "2018"
    }
  },

  {
    id: "2",
    name: "Peekr",
    route: "peekr",
    description: `Matchmaker - Utilizing Image Recognition to build your profile and present matches.`,
    keyPoints: `MVC Pattern
    API Application built using Ruby and Rails
    Bootstrap for styling
    Sessions for authentication
    Image Recognition`,
    links: [
      {
        name: "Slides",
        url:
          "https://docs.google.com/presentation/d/e/2PACX-1vRv3HvnfityJBw-2IKPUBmf-GX7DGt-zoLzKQYZ_JtQovACJEZ8Hiu-UaeTGdIJ-Z6B34UOJof57g84/pub?start=true&loop=false&delayms=3000"
      },
      {
        name: "Demo",
        url: "https://www.youtube.com/watch?v=bDJMm85v9so&feature=youtu.be"
      },
      { name: "GitHub", url: "https://github.com/cunhasb/mod2_project" }
    ],
    media: {
      video: "peekr-media-video.gif",
      featured: ["peekr-featured.png"],
      wall: ["peekr-wall-1.png", "peekr-wall-2.png", "peekr-wall-3.png"],
      webSite: ["peekr-featured.png"],
      mobile: ["Peekr-smallscreen.gif"]
    },
    fullDescription: {
      techonologies: [
        "Ruby",
        "Rails",
        "Boostrap",
        "Sessions for Authentication",
        "Clarifai - for Image recognition"
      ],
      services: "WebApp",
      description: `Matchmaker application, it uses image recognition to create your profile and present matches.

Upon sign up, the user would upload his or her picture, his or her profile would be built using data returned from a Clarifai API call using the demographics model. The user would then select his or her  preferences in 4 different categories to finish his or her profile
        * On my weekend
        * I would prefer to eat
        * Drink of choice
        * celeb crush

This selection would generate your preferences profile (using data from Clarifai using different models, food, general and demographics).

Once you have your profile built you would be matched with other users that share the same commonalities. And from there you could view, like, and dislike other users.
`,
      client: "Personal Project",
      year: "2017"
    }
  },
  {
    id: "3",
    name: "Art Collection Organizer",
    route: "art-gallery",
    description:
      "A CLI application built using Ruby and Active Record, to organize art Collections",
    keyPoints: `CLI Layout
    Ruby and Active Record
    CRUD Functionality
    Artsy API Gallery
    Presentation of Art Pieces in the terminal using Catpix
    `,
    links: [
      {
        name: "Demo",
        url: "https://www.youtube.com/watch?v=4bzTFbhLY1w&feature=youtu.be"
      },
      {
        name: "GitHub",
        url:
          "https://github.com/liamkillion/module-one-final-project-guidelines-web-100817"
      }
    ],
    media: {
      featured: ["art-gallery-featured.jpg"],
      wall: [
        "art-gallery-wall-1.png",
        "art-gallery-wall-2.png",
        "art-gallery-wall-3.png"
      ],
      webSite: ["art-gallery-website.png"],
      video: "art-collection-media-video.gif",
      mobile: ["art-gallery-mobile-1.png"]
    },
    fullDescription: {
      techonologies: ["Ruby", "Active Record", "APIs access"],
      services: "CLI app",
      description: `An Art Collection Organizer, where users can browse through art pieces provided from Artsy API fetches.
CRUD functionality using Active Record. Users can create different collections, browse the art pieces and view, add and delete  art pieces to his or her collection, also able to view his or her own collections.

Application used Artsy API for displaying art pieces and worked around pagination to display and fetch them.
`,
      client: "Personal Project",
      year: "2017"
    }
  },
  {
    id: "4",
    name: "Manager",
    route: "manager",
    description: `A simple and Dynamic Application to organize and manage estimates, invoices, accounts payable and receivable, job progress and payroll.`,
    keyPoints: `MDI Layout
    Single & Grid View
    SQL Expression Builder
    Over 20 Pre-made Reports
    `,
    links: [
      {
        name: "Demo",
        url: "https://www.youtube.com/watch?v=_w49oobvP_Y&feature=youtu.be"
      }
    ],
    media: {
      video: "manager-media-video.gif",
      featured: ["manager-featured.jpeg"],
      wall: ["manager-wall-1.png", "manager-wall-2.png", "manager-wall-3.png"],
      webSite: ["manager-website.png"],
      mobile: ["manager-mobile-1.png"]
    },
    fullDescription: {
      techonologies: ["Visual Basic", "SQL", "Gas"],
      services: "Custom Desktop Application",

      description: `A desktop Resource Managing system to automate invoices, estimates, job progress and payroll.

      Monetization - Application used authentication codes to allow access, depending on user profile, ranging from daily, monthly and unlimited access, all activated by unlocking codes.

      Privileged Access Login - Users inherited privileges defined to its parent group. Four types of privileges to each table (Add/Edit/View and Delete).

      SQL query builder - An automatic point and click query builder was available for all tables in grid view, reports, and Query constructor. Builder allowed the creation of joins, groups, conditions, sorting, and filter.

      All windows could be viewed in both single and grid mode. When in grid mode, the user could rearrange columns, sort, filter, search, total numeric columns, and graph.

      The application used MDI layout, where multiple children window would reside inside a single parent. Rearrangement, resizing, cascading, and toggling between grid and single view was possible for all windows. The toolbar would reflect allowed actions for each focused child.

      Query Constructor - User could create custom queries using the sql builder, where he could join select, filter, group, sort any table in the database (as long as he had privileges to do so).

      Application included more than 20 pre-made reports.
      `,
      client: "Various Small Business in the Service Industry",
      year: "2002"
    }
  }
];
