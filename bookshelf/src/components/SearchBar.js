// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";

// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";

// import SearchIcon from "@mui/icons-material/Search";

// import { Button } from "@mui/material";
// import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
// import DonateBookModal from "./DonateBookModal";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(1),
//   marginLeft: 0,
//   width: "100%",

//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function SearchBar() {

//   const handleSearchInput = () => {

//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         style={{
//           background: "#f1f5ff",
//           height: 60,
//           color: "black",
//           paddingBottom: 5,
//           marginBottom: 5,
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h7"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             Search library
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               onChange={handleSearchInput}
//               placeholder="Book title…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Button
//             endIcon={<SearchIcon />}
//             style={{
//               background: "#ffa722",
//               color: "white",
//               margin: 8,
//               fontSize: 9,
//             }}
//           >
//             Search
//           </Button>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <DonateBookModal />
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
