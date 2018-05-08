export default [
  {
    id: "1",
    name: "SMS - Messenger",
    route: "sms-messenger",
    description:
      "Send and Receive Text Messages From you Computer Using Plivo API",
    keyPoints: `Flask Security
  API Endpoints
  MultiUser
  API Clients (CRUD Functionality)
  Customers (CRUD Functionality)
  Messages (CD Functionality)
  Create Customers by adding from the dashboard or receiving a message from their phone
  `,
    links: [
      { name: "Demo", url: "https://youtu.be/_wLxd8H-I1A" },
      { name: "GitHub", url: "https://github.com/cunhasb/sms-messages" },
      { name: "WebSite", url: "https://sms-messages.herokuapp.com/" }
    ],
    media: {
      featured: ["sms-messenger-menu.jpg"],
      wall: [
        "sms-messenger-wall-1.png",
        "sms-messenger-wall-2.png",
        "sms-messenger-wall-3.png"
      ],
      webSite: ["sms-messenger-featured.png"],
      video: "sms-messenger-media-video.gif",
      mobile: ["sms-messenger-mobile.gif"]
    },
    fullDescription: {
      techonologies: [
        "Python",
        "Flask",
        "Bootstrap",
        "Plivo SMS API",
        "Postgresql"
      ],
      services: "WebApp",
      description: `SMS - Messenger
      MVP for a SMS - Messenger confirmation system.
Use Case:

I small Spa business with a client base of almost 4000, has to confirm all the scheduled appointments. Appointments are confirmed either by phone, email or text messages. The prefered method would be automatic text messages, but the cost of sending them using his current system is cost prohibited about $0.30 per message, the main advantage of this system is that SMS it's native to it, so no need to export or check other dashboards, the biggest disadvantage is cost.

There are plenty of SMS text services available which are a very close solution to his problem. They offer cheaper rates, the ability to import contacts and some offer limited ability to create special keywords, used to reply custom made information. But as you increase the number of features its cost also increases, and some are bound by design constraints of the application, not flexible enough.

We decided  to take a different approach where a custom application will be built to send and receive Text Messages, the application would have to meet the following requirements.
Cost per message reduction from the  current system and compared to available off the shelf systems.

  - Ability to send, receive and reply to individual messages
  - Ability to send messages in bulk
  - Ability to manage Customer lists
  - Ability to add Customers by simply receiving a subscribe message from them.

Desired Features

  - Ability to create different Mailing lists, that could also be used for marketing purposes
  - Ability to import and manage list of contacts.
  - Integration to email confirmations, where current system will send confirmations to an email server, information of the confirmation (Customer name, phone, appointment time, etc…) will then  be parsed, and a SMS message will be sent to the customer instead of the email.
  - Ability to create actions through keywords like Unsubscribe, Subscribe, Cancel Appointment, Reschedule, etc…

This MVP was created using Python and Flask and it solves the basic requirements, especially in regards to cost which I was able to bring from $15,600.00 to $260.00 a reduction of about 99.16% saving the company about $15,340.00 per year, even when compared with off shelf solutions, which would net a savings of $13,000.00 from the current system, it was  still 10 times more expensive than the MVP solution.

Savings were so substantial that client will start using MVP until final product is developed.


Send and receive messages using Plivo API.

Crud functionality

Multi-User

Add/Remove/Edit API Clients (Plivo Information)
Add/Remove/Edit Customers (Contacts to send and receive Messages) Add/Delete Messages (Messages Sent and Received)

Application uses Plivo API, Does not work if you don't have your own API and Auth keys.

Flow:

1 - Login or Register yourself.
2 - Create one Client API - containing your api key and auth code . You can get a free Account here: https://manage.plivo.com/accounts/login/?next=/dashboard/
Documentation is found here: https://developers.plivo.com/.
In order to send messages in the USA, Plivo requires a Plivo Number. Using free account will send messages only to international numbers but will receive all messages coming to your account.
3 - Create a customer to send messages.
4 - Create a message to send message.
5 - All messages (sent and received) are displayed in the message page.

 Whenever someone sends you a message and his number is not in your database it will create a new customer with that number.  `,
      client: "The Spa at the Commons",
      year: "2018"
    }
  },

  {
    id: "2",
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
      { name: "GitHub", url: "https://github.com/cunhasb/personalWebSite" }
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
