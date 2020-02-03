import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../../styles/CommentStyles/Comment.css'

export default function CommentSimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className = 'little-top-right'>
        <div onClick={handleClick} style ={{width:'16px', height: '16px'}}>
                <img 
                src = {`../../static/felse.png`}
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
            <MenuItem onClick={handleClose}>Report</MenuItem>
        </Menu>
    </div>
  );
}