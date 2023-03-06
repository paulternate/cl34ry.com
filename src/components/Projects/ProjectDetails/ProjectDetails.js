import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { projectsPhotoData } from '../../data/projectsPhotoData'
// import { HiArrowRight } from "react-icons/hi";

import "./ProjectDetails.css";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ProjectDetailsPage() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

// function ProjectDetails() {

//     const { theme } = useContext(ThemeContext);

//     const useStyles = makeStyles(() => ({
//         viewAllBtn : {
//             color: theme.tertiary,
//             backgroundColor: theme.primary,
//             transition: 'color 0.2s',
//             "&:hover": {
//                 color: theme.secondary,
//                 backgroundColor: theme.primary,
//             }
//         },
//         viewArr : {
//             color: theme.tertiary,
//             backgroundColor: theme.secondary70,
//             width: '40px',
//             height: '40px',
//             padding: '0.5rem',
//             fontSize: '1.05rem',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s',
//             "&:hover": {
//                 color: theme.tertiary,
//                 backgroundColor: theme.secondary,
//             }
//         },
//     }));

//     const classes = useStyles();

//     return (
//         <>
//             {projectsPhotoData.length > 0 && (
//                 <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
//                     <div className="projects--header">
//                         <h1 style={{color: theme.primary}}>Photo Projects</h1>
//                     </div>
//                     <div className="projects--body">
//                         <div className="projects--bodyContainer">
//                             {projectsPhotoData.slice(0, 3).map(project => (
//                                 <SingleProject
//                                     theme={theme}
//                                     key={project.id}
//                                     id={project.id}
//                                     name={project.projectName}
//                                     desc={project.projectDesc}
//                                     tags={project.tags}
//                                     code={project.code}
//                                     seeMore={project.seeMore}
//                                     image={project.image}
//                                 />
//                             ))}
//                         </div>

//                         {projectsPhotoData.length > 3 && (
//                             <div className="projects--viewAll">
//                                 <Link to="/projects">
//                                     <button className={classes.viewAllBtn}>
//                                         View All
//                                         <HiArrowRight className={classes.viewArr} />
//                                     </button>
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}

//         </>
//     )
// }

// export default Projects
