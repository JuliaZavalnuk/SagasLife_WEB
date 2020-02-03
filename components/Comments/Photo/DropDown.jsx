import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../../styles/CommentStyles/Comment.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className = 'top-right'>
        <div onClick={handleClick} style ={{width:'32px', height: '32px'}}>
                <img 
                src = {`../../static/else.png`}
                className = 'top-right'
                />
        </div>
        <Menu
            className = 'Menu'
            id="simple-menu"
            anchorEl={anchorEl} 
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Save to device</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
            <MenuItem onClick={handleClose}>Copy link</MenuItem>
        </Menu>
    </div>
  );
}