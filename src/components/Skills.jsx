const skills = [
    {
      id: 1,
      name: "HTML/CSS/JAVASCRIPT",
      description:
        "Front-end development refers to creating the user interface and user experience of a website or application.",
      image: "https://img-c.udemycdn.com/course/480x270/3906220_be65_2.jpg",
    },
    {
      id: 2,
      name: "REACT.JS",
      description:
        "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png",
    },
    {
      id: 3,
      name: "NODE & EXPRESS",
      description:
        "Node js Express Framework - Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web.",
      image: "https://miro.medium.com/v2/resize:fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png",
    },
    {
      id: 4,
      name: "MONGODB & MYSQL",
      description:
        "As a relational database management system, MySQL has a more rigid structure than MongoDB. MySQL uses a fixed schema and organizes data into a row and table.",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*P4EFIlrq5oNOG9Xz.jpg",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
       
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">My Skills</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
