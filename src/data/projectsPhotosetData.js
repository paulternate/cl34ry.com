import one from "../assets/images/photos/nature/P1130650-2.jpg";
import two from "../assets/images/photos/people/P1090064.jpg"; 
import three from '../assets/images/designs/Logo-Square.jpg';


export const ProjectsPhotosetData = [
  {
    id: 1,
    projectName: "Places",
    projectDesc:
      "Landscape photography from the Pacific Northwest and my travels beyond.",
    tags: ["landscape", "nature", "photography", "travel"],
    code: "",
    seeMore: "/projects/project-details-places",
    image: one,
  },
  {
    id: 2,
    projectName: "People",
    projectDesc:
      "Pictures of people I've met along the way.",
    tags: ["street", "people", "models", "friends"],
    code: "",
    seeMore: "/projects/project-details-people",
    image: two,
  },
  {
    id: 3,
    projectName: "Designs",
    projectDesc:
      "Design work I've done for clients and personal projects.",
    tags: ["photoshop, illustrator", "design", "graphics"],
    code: "",
    seeMore: "/projects/project-details-designs",
    image: three,
  },
];


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    seeMore: '',
    image: ''
}, 
*/