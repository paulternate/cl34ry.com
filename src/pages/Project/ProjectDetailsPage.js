import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";
import { ImageList, ImageListItem, ImageListItemBar, Dialog, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import { MdZoomIn } from "react-icons/md";


import "./ProjectDetailsPage.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function ProjectDetailsPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

    const useStyles = makeStyles((t) => ({
      search: {
        color: theme.tertiary,
        width: "40%",
        height: "2.75rem",
        outline: "none",
        border: "none",
        borderRadius: "20px",
        padding: "0.95rem 1rem",
        fontFamily: "'Noto Sans TC', sans-serif",
        fontWeight: 500,
        fontSize: "0.9rem",
        backgroundColor: theme.secondary,
        boxShadow:
          theme.type === "dark"
            ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
            : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
        "&::placeholder": {
          color: theme.tertiary80,
        },
        [t.breakpoints.down("sm")]: {
          width: "350px",
        },
        root: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
          backgroundColor: theme.primary,
        },
        imageList: {
          width: "100%",
          height: "100%",
        },
        icon: {
          color: "rgba(255, 255, 255, 0.54)",
        },
        dialogImage: {
          maxWidth: "100%",
          maxHeight: "100%",
        },
        dialogPaper: {
          height: "100%",
        },
        dialogPaperFullScreen: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      home: {
        color: theme.secondary,
        position: "absolute",
        top: 25,
        left: 25,
        padding: "7px",
        borderRadius: "50%",
        boxSizing: "content-box",
        fontSize: "2rem",
        cursor: "pointer",
        boxShadow:
          theme.type === "dark"
            ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
            : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          color: theme.tertiary,
          transform: "scale(1.1)",
        },
        [t.breakpoints.down("sm")]: {
          fontSize: "1.8rem",
        },
      },
    }));

    const classes = useStyles();

    // const itemData = [
    //   {
    //     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    //     title: "Breakfast",
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
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    //     title: "Hats",
    //   },
    //   {
    //     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    //     title: "Honey",
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
    //   },
    // ];
    
    const handleOpen = (image) => {
      setSelectedImage(image);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const importAll = (r) =>
      r.keys().map((filename) => ({
        img: r(filename).default,
        title: filename.replace("./", ""),
        author: "author name",
      }));

    const images = importAll(
      require.context("../../../src/assets/images/photos/nature", false, /\.(png|jpe?g|svg)$/)
    );

    const itemData = images.map((image) => ({
      ...image,
      cols: 1,
    }));


    return (
      <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
        <Helmet>
          <title>{headerData.name} | Photo Projects</title>
        </Helmet>
        <div
          className="projectPage-header"
          style={{ backgroundColor: theme.primary }}
        >
          <Link to="/">
            <AiOutlineHome className={classes.home} />
          </Link>
          <h1 style={{ color: theme.secondary }}>Photo Projects</h1>
        </div>
        <div className="projectPage-container">
          <div className="projectPage-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search project..."
              className={classes.search}
            />
          </div>
          <div className="project-container">
            <div className={classes.root}>
              <ImageList className={classes.imageList} cols={3}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={item.img}
                      alt={item.title}
                      onClick={() => handleOpen(item)}
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>by: {item.author}</span>}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${item.title}`}
                          className={classes.icon}
                        >
                          <MdZoomIn onClick={() => handleOpen(item)} />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                  {selectedImage && selectedImage.title}
                </DialogTitle>
                <DialogContent>
                  <Grid container justify="center">
                    <Grid item>
                      <img
                        src={selectedImage && selectedImage.img}
                        alt={selectedImage && selectedImage.title}
                        className={classes.dialogImage}
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
              </Dialog>
            </div>

            {/* <ImageList
              sx={{ width: 1, height: 1, overflow: "hidden" }}
              cols={3}
              rowHeight={300}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList> */}
          </div>
        </div>
      </div>
    );
  }

export default ProjectDetailsPage;