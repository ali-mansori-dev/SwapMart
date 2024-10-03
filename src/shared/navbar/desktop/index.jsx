import { AppBar, Typography, Button, Container } from "@mui/material";

import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="lg">
        <div className="flex justify-between items-center h-[65px]">
          <div className="flex">
            <Link to={`/new`}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={Logo} className="h-9" />
              </Typography>
            </Link>
          </div>
          <div className="flex flex-row gap-5">
            <Button color="inherit">Home</Button>
            <Button color="inherit">Home</Button>
            <Link to={`/new`}>
              <Button variant="contained">Create Post</Button>
            </Link>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}

export default Navbar;
