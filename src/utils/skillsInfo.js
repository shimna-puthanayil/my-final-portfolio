//This function returns the front end skills to display in the section 'Resume'
const getFrontEndSkills = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "BootStrap",
    "Chakra UI",
    "Material UI",
    "Handlebars",
    "Responsive Design",
  ];
  return frontEndSkills;
};
//This function returns the back end skills to display in the section 'Resume'
const getBackEndSkills = () => {
  const backEndSkills = [
    "Node",
    "Express",
    "APIs",
    "MySQL Sequalize",
    "MongoDB Mongoose",
    "GraphQL",
  ];
  return backEndSkills;
};
export default {
  getFrontEndSkills,
  getBackEndSkills,
};
