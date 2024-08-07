//This function returns the skills to display in the section 'Resume'
const getSkills = () => {
  const skills = [
    //front end
    "React,images/rr1.png",
    "JavaScript,images/js.png",
    "HTML,images/htm.png",
    "CSS,images/cs.webp",
    "jQuery,images/jq.webp",
    "Chakra UI,images/chakra-ui.png",
    "Material UI,images/mui.png",
    "BootStrap,images/boot.png",
    "Responsive Design,images/resp.png",
    //backend
    "Node,images/njs.png",
    "Express,images/e.webp",
    "APIs,images/api.png",
    "MySQL,images/my.png",
    "MongoDB ,images/mong.png",
    "GraphQL,images/grr.webp",
    //others
    "AWS S3 & EC2,images/aws.png",
    "CI/CD,images/ci.png",
    "Git,images/git.png",
  ];
  return skills;
};

export default {
  getSkills,
};
