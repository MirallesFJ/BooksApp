const timelineElements = [
    {
        id: 1,
        title: "BEng. in Mechanical Engineering",
        location: "Madrid, Spain",
        description: "Completed my Bachelor in Mechanical Engineering",
        buttonText: "Details",
        date: "2016-2020",
        icon: "school",
        color: "blue",
        tech: ["JavaScript", "HTML", "CSS", "Java"],
    },
    {
        id: 2,
        title: "Internship in Deimos Space",
        location: "Ciudad Real, Spain",
        description: `Designed and simulated CubeSats (satellites) as part of the engineering team. 
        Used FEM simulations to analyze the structural integrity of CubeSats.`,
        buttonText: "Details",
        date: "2018",
        icon: "work",
        color: "yellow",
        tech: ["React", "HTML", "CSS", "JavaScript", "Angular"],
    },
    {
        id: 3,
        title: "Simulations and Design engineer in UC3M's Moto-Student team",
        location: "Madrid, Spain",
        description: `
        Performed FEM simulations and dynamic multibody analysis for a racing
motorcycle. Designed new components for the motorcycle using CAD tool
        `,
        buttonText: "Details",
        date: "2018-2020",
        icon: "work",
        color: "red",
        tech: ["Node.js", "JavaScript", "SQL", "Python"],
      },
    {
      id: 4,
      title: "MSc. in Computational Mechanics",
      location: "Munich, Germany",
      description: "Completed my Masters in Computational Mechanics",
      buttonText: "Details",
      date: "2020-2022",
      icon: "school",
      color: "purple",
      tech: ["JavaScript", "React", "Node.js", "SQL"],
    },
    {
      id: 5,
      title: "Started Freelancing",
      location: "City5, State5",
      description: "Began working as a freelance developer",
      buttonText: "Details",
      date: "2023-present",
      icon: "work",
      color: "orange",
      tech: ["JavaScript", "React", "HTML", "CSS", "Python"],
    },
  ];
  
  export default timelineElements.reverse();