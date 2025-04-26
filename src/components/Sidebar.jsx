import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {
  return (
    <div style={{ width: 250, height: '100vh', backgroundColor: '#f5f5f5' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/my-list">
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="My List" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;