import Grid from "@mui/material/Unstable_Grid2";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid className="firstNav" item xs={4}>
      </Grid>
      <Grid className="firstNav" item xs={4}>
        <h1>LOGO</h1>
      </Grid>
      <Grid className="firstNav" item xs={4}>
        <SearchTwoToneIcon className="icon" />
        <FavoriteBorderTwoToneIcon className="icon" />
        <LocalMallTwoToneIcon className="icon" />
        <Person2SharpIcon className="icon" />
        <h5 className="language">ENG</h5>
        <KeyboardArrowDownSharpIcon className="icon" />
      </Grid>
      <Grid className="subNav subHeader" item xs={12}>
        <ul>
          <li className="subNav">SHOP</li>
          <li className="subNav">SKILLS</li>
          <li className="subNav">STORIES</li>
          <li className="subNav">ABOUT</li>
          <li className="subNav">CONTACT US</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Header;
