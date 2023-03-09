import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";
import { ImageList, ImageListItem, ImageListItemBar, Dialog, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import { MdZoomIn } from "react-icons/md";


import "./ProjectDetailsPagePlaces.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function ProjectDetailsPagePlaces() {
  // const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

    const useStyles = makeStyles((t) => ({
      // search: {
      //   color: theme.tertiary,
      //   width: "40%",
      //   height: "2.75rem",
      //   outline: "none",
      //   border: "none",
      //   borderRadius: "20px",
      //   padding: "0.95rem 1rem",
      //   fontFamily: "'Noto Sans TC', sans-serif",
      //   fontWeight: 500,
      //   fontSize: "0.9rem",
      //   backgroundColor: theme.secondary,
      //   boxShadow:
      //     theme.type === "dark"
      //       ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
      //       : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      //   "&::placeholder": {
      //     color: theme.tertiary80,
      //   },
      //   [t.breakpoints.down("sm")]: {
      //     width: "350px",
      //   },
      // },
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
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden"
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
    }));

    const classes = useStyles();
    
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
      <div className="ProjectDetailsPagePlaces" style={{ backgroundColor: theme.secondary }}>
        <Helmet>
          <title>{headerData.name} | Places</title>
        </Helmet>
        <div
          className="ProjectDetailsPagePlaces-header"
          style={{ backgroundColor: theme.primary }}
        >
          <Link to="/">
            <AiOutlineHome className={classes.home} />
          </Link>
          <h1 style={{ color: theme.secondary }}>Places</h1>
        </div>
        <div className="ProjectDetailsPagePlaces-container">
          {/* <div className="ProjectDetailsPagePlaces-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search project..."
              className={classes.search}
            />
          </div> */}
          <div className="projectDetails-container">
            <div className={classes.root}>
              <ImageList className={classes.imageList}
                cols={3}
                variant="masonry"
                >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={item.img}
                      alt={item.title}
                      onClick={() => handleOpen(item)}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>
                  {selectedImage && selectedImage.title}
                </DialogTitle> */}
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
          </div>
        </div>
      </div>
    );
  }

export default ProjectDetailsPagePlaces;