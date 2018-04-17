export default [
  {
    id: "1",
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
    webSiteUrl: "www.mywebsite.com",
    media: {
      featured: ["pexels-photo-316466.jpeg"],
      wall: [
        "pexels-photo-316466.jpeg",
        "pexels-photo-583846.jpeg",
        "pexels-photo-585752.jpeg"
      ],
      webSite: ["pexels-photo-316466.jpeg"],
      video: "178779-family-guy-herbert-gif.gif",
      mobile: ["image1", "image2", "image3"]
    },
    fullDescription: {
      techonologies: ["Ruby", "Active Record", "APIs access"],
      services: "CLI app",
      description: `An Art Collection Organizer, where users can browse through art pieces provided from Artsy API fetches.
CRUD functionality using Active Record. Users can create different collections, browse the art pieces and view, add and delete  art pieces to his collection, also able to view his own collections.

Application used Artsy API for displaying art pieces and worked around pagination to display and fetch them.
`,
      client: "Personal Project",
      year: "2017"
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
    webSiteUrl: "www.mywebsite.com",
    media: {
      video: "2017-12-15 05_33_41.gif",
      featured: ["pexels-photo-583846.jpeg"],
      wall: [
        "pexels-photo-316466.jpeg",
        "pexels-photo-583846.jpeg",
        "pexels-photo-585752.jpeg"
      ],
      webSite: ["pexels-photo-583846.jpeg"],
      mobile: ["image1", "image2", "image3"]
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

Upon sign up, the user would upload his picture, his profile would be built using data returned from a Clarifai API call using the demographics model. The user would then select his preferences in 4 different categories to finish his profile
        * On my weekend
        * I would prefer to eat
        * Drink of choice
        * celeb crush

This selection would generate your preferences profile (using data from Clarifai using different models, food, general and demographics).

Once you had your profile built you would be matched with other users that shared the same commonalities. And from there you could view, like, and dislike other users.
`,
      client: "Personal Project",
      year: "2017"
    }
  },
  {
    id: "3",
    name: "Manager",
    route: "manager",
    description: `A simple and Dynamic Application to organize and manage estimates, invoices, accounts payable and receivable, job progress and payroll.`,
    keyPoints: `MDI Layout
    Single & Grid View
    SQL Expression Builder
    Over 20 Pre-made Reports
    `,
    webSiteUrl: "www.mywebsite.com",
    media: {
      video: "2017-12-15 05_33_41.gif",
      featured: ["pexels-photo-585752.jpeg"],
      wall: [
        "pexels-photo-316466.jpeg",
        "pexels-photo-583846.jpeg",
        "pexels-photo-585752.jpeg"
      ],
      webSite: ["pexels-photo-585752.jpeg"],
      mobile: ["image1", "image2", "image3"]
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
