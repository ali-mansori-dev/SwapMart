import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Index = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Navbar
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
