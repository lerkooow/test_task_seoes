import Menu from '@mui/material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import PropTypes from 'prop-types';
import { List, ListItemIcon } from '@mui/material';
import folder from "../../images/folder.png";
import share from "../../images/share.png";
import shareBlue from "../../images/shareBlue.png";
import { useState } from 'react';

const ProjectMenu = ({ project, openProjects, handleClickListItem, anchorEl, open, handleClose, openFolders, handleClickFolders, hiddenMenu, handleMenuItemClick }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <>
            <List component="nav">
                <ListItemButton aria-expanded={open ? 'true' : undefined} onClick={handleClickListItem} sx={{ p: 0 }}>
                    <ListItemText
                        primary={`Проект ${project}`}
                        sx={{
                            color: !openProjects && '#0076F5',
                            '& .MuiTypography-root': {
                                fontWeight: 700,
                                fontSize: '20px',
                                fontFamily: "PT Root UI"
                            },
                        }}
                    />
                    {!openProjects ? <ArrowDropUpIcon sx={{ width: '16px', height: '16px', color: !openProjects ? '#0076F5' : '#747474' }} /> : <ArrowDropDownIcon sx={{ width: '16px', height: '16px', color: !openProjects ? '#0076F5' : '#747474' }} />}
                </ListItemButton>
            </List>
            <Menu id="lock-menu" anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ "& .MuiList-root": { width: "210px" } }}>
                <ListItemButton onClick={() => handleClickFolders('folder1')} sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={folder} alt="icon folder" />
                    </ListItemIcon>
                    <ListItemText primary="Папка 1" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                    {openFolders.folder1 ? <ArrowDropUpIcon sx={{ width: '16px', height: '16px', color: '#747474' }} /> : <ArrowDropDownIcon sx={{ width: '16px', height: '16px', color: '#747474' }} />}
                </ListItemButton>

                <Collapse in={openFolders.folder1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => handleMenuItemClick(1)}
                            sx={{ pl: '44px' }}
                            onMouseEnter={() => setHoveredItem(1)}
                            onMouseLeave={() => setHoveredItem(null)}>
                            <ListItemText primary="Проект 1" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                            <img
                                src={hoveredItem === 1 ? shareBlue : share}
                                alt="icon share"
                                style={{ transition: 'filter 0.3s ease' }}
                            />
                        </ListItemButton>
                        <ListItemButton onClick={() => handleMenuItemClick(2)}
                            sx={{ pl: '44px' }}
                            onMouseEnter={() => setHoveredItem(2)}
                            onMouseLeave={() => setHoveredItem(null)}>
                            <ListItemText primary="Проект 2" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                            <img
                                src={hoveredItem === 2 ? shareBlue : share}
                                alt="icon share"
                                style={{ transition: 'filter 0.3s ease' }}
                            />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={() => handleClickFolders('folder2')} sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={folder} alt="icon folder" />
                    </ListItemIcon>
                    <ListItemText primary="Папка 2" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                    {openFolders.folder2 ? <ArrowDropUpIcon sx={{ width: '16px', height: '16px', color: '#747474' }} /> : <ArrowDropDownIcon sx={{ width: '16px', height: '16px', color: '#747474' }} />}
                </ListItemButton>
                <ListItemButton onClick={() => handleMenuItemClick(3)}
                    sx={{ pl: '44px' }}
                    onMouseEnter={() => setHoveredItem(3)}
                    onMouseLeave={() => setHoveredItem(null)}>
                    <ListItemText primary="Проект 3" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                    <img
                        src={hoveredItem === 3 ? shareBlue : share}
                        alt="icon share"
                        style={{ transition: 'filter 0.3s ease' }}
                    />
                </ListItemButton>
            </Menu>
        </>
    )
}

ProjectMenu.propTypes = {
    project: PropTypes.number.isRequired,
    handleClickListItem: PropTypes.func.isRequired,
    anchorEl: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    openProjects: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    openFolders: PropTypes.bool.isRequired,
    handleClickFolders: PropTypes.func.isRequired,
    hiddenMenu: PropTypes.bool.isRequired,
    handleMenuItemClick: PropTypes.func.isRequired,
};

export default ProjectMenu;
