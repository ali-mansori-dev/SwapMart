import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="lg">
        <Toolbar className="!pl-0 !pr-0">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} className="h-9" />
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Link to={`/new`}>
            <Button variant="contained">
              Create Post
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
