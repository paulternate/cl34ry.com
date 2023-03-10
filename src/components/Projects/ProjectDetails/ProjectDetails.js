// import * as React from 'react';
// import { ImageList, ImageListItem } from '@mui/material';

// // import { ThemeContext } from '../../contexts/ThemeContext';
// // import { ProjectsPhotosetData } from '../../data/ProjectsPhotosetData'
// // import { HiArrowRight } from "react-icons/hi";

// import "./ProjectDetails.css";

// function ProjectDetailsPage() {
//   const { theme } = useContext(ThemeContext);

//   const useStyles = makeStyles(() => ({
//     viewAllBtn: {
//       color: theme.tertiary,
//       backgroundColor: theme.primary,
//       transition: "color 0.2s",
//       "&:hover": {
//         color: theme.secondary,
//         backgroundColor: theme.primary,
//       },
//     },
//     viewArr: {
//       color: theme.tertiary,
//       backgroundColor: theme.secondary70,
//       width: "40px",
//       height: "40px",
//       padding: "0.5rem",
//       fontSize: "1.05rem",
//       borderRadius: "50%",
//       cursor: "pointer",
//       transition: "background-color 0.2s",
//       "&:hover": {
//         color: theme.tertiary,
//         backgroundColor: theme.secondary,
//       },
//     },
//   }));

//   const classes = useStyles();
// }
//   export function StandardImageList() {
//     return (
//       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     );
//   }

//   const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     cols: 2,
//   },
// ];

// export default ProjectDetailsPage;
