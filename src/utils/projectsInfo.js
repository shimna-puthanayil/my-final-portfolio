//This function returns details(name,description,deployment link, image url and github link) about all projects to display in portfolio
const getProjects = () => {
  const projects = [
    {
      name: "SparkShopper",
      url: "images/e-com.jpeg",
      deploymentLink: "https://spark-shopper-c35a92bbd283.herokuapp.com/",
      description:
        "Spark Shopper is an e-commerce application feature-packed with efficient search, easy registration, quick cart additions, share your thoughts, manage your wish list, order history and swift check out. ",
      gitHubLink: "https://github.com/Tristenh/spark-shopper",
      technologies: [
        "images/chakra-ui.png",
        "images/graph.png",
        "images/mon.png",
        "images/exp.png",
        "images/rr1.png",
        "images/no.png",

        "images/stripe.png",
      ],
    },
    {
      name: "RecipeBox",
      url: "images/rb.jpeg",
      deploymentLink:
        "https://powerful-sierra-12005-787af3607f3d.herokuapp.com/",
      description:
        "RecipeBox is a user-friendly platform designed to bridge the gap between food enthusiasts and professional chefs. This project followed the MVC paradigm in its architectural structure",
      gitHubLink: "https://github.com/J-D-garwood/recipe-forum",
      technologies: [
        "images/no.png",
        "images/exp.png",
        "images/my.png",
        "images/h.png",

        "images/bs.jpeg",
        "images/jquery.png",
        "images/js.png",
      ],
    },
    {
      name: "JustMovie",
      url: "images/jm.jpeg",
      deploymentLink: "https://shimna-puthanayil.github.io/movie-world/",
      description:
        "JustMovie is a movie website displaying a range of movies in conjunction with their ratings and reviews, enabling users to search for movies by title or through a series of categories including genre. ",
      gitHubLink: "https://github.com/sakshiarora04/just-movie",
      technologies: [
        "images/jquery.png",
        "images/js.png",
        "images/ff.png",
        "images/jquery-ui.svg",
        "images/cc.png",
        "images/html.png",
      ],
    },
    {
      name: "TechBlog",
      url: "images/tb.jpeg",
      deploymentLink:
        "https://murmuring-shelf-04632-c5a4a7d4538b.herokuapp.com/",
      description:
        "The project is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. They can also update or delete their posts. ",
      gitHubLink: "https://github.com/shimna-puthanayil/tech-diary-m-v-c",
      technologies: [
        "images/no.png",
        "images/exp.png",
        "images/my.png",
        "images/h.png",
        "images/bs.jpeg",
        "images/js.png",
      ],
    },
    {
      name: "JATE",
      url: "images/jate.jpeg",
      deploymentLink: "https://stark-stream-59161-d25cfda68e94.herokuapp.com/",
      description:
        "This single-page application builds a text editor that runs in the browser and meets the PWA criteria ",
      gitHubLink: "https://github.com/shimna-puthanayil/my-text-pad",
      technologies: ["images/no.png", "images/exp.png", , "images/js.png"],
    },

    {
      name: "Portfolio",
      url: "images/portfolio.jpeg",
      deploymentLink: "https://dapper-empanada-1db9b0.netlify.app/",
      description:
        "This application is a single-page application portfolio built using React for web developers to create a captivating showcase for their work.",
      gitHubLink: "https://github.com/shimna-puthanayil/my-final-portfolio",
      technologies: [
        "images/rr1.png",
        "images/no.png",
        "images/chakra-ui.png",
        "images/js.png",
      ],
    },
  ];
  return projects;
};

export default {
  getProjects,
};
