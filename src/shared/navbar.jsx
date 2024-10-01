import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="lg">
        <Toolbar className="!pl-0 !pr-0">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SWAP MART
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
