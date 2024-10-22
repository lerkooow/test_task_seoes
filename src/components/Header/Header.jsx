import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItemButton from '@mui/material/ListItemButton';
import ProjectMenu from "../ProjectMenu/ProjectMenu";
import update from "../../images/update.png";
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';

import profile from "../../images/profile.png";
import settings from "../../images/settings.png";
import key from "../../images/key.png";
import exit from "../../images/exit.png";

const Header = ({ hiddenMenu, openProfile, handleClickHidden, project, openProjects, handleClickListItem, anchorEl, open, handleClose, handleUpdateClick, lastUpdated, openFolders, handleClickFolders, handleMenuItemClick, handleClickProfile }) => (
    <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {!hiddenMenu && <MenuIcon onClick={handleClickHidden} />}
            <ProjectMenu
                project={project}
                openProjects={openProjects}
                handleClickListItem={handleClickListItem}
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                openFolders={openFolders}
                handleClickFolders={handleClickFolders}
                hiddenMenu={hiddenMenu}
                handleMenuItemClick={handleMenuItemClick}
            />
            <ListItemButton onClick={handleUpdateClick} sx={{ '&:hover': { backgroundColor: '#F2F8FE' }, p: 1 }} >
                <img src={update} alt="icon update" />
            </ListItemButton>
            <p style={{ color: "#404040", fontSize: "12px" }}>{lastUpdated}</p>
            <Button variant="text" sx={{ textTransform: 'none', backgroundColor: "#DFEFFF", gap: "8px", fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" }} >
                <AddIcon />Новый проект
            </Button>
        </div>
        <div>
            <ListItemButton
                onClick={handleClickProfile}
                sx={{ maxWidth: "30px", height: "30px", p: 1, ":hover": { backgroundColor: "#F2F8FE" } }}>
                <img src={profile} alt="profile icon" />
            </ListItemButton>
            {!openProfile && (
                <Paper sx={{ width: 320, position: 'absolute', top: '65px', right: '35px', maxWidth: "210px" }}>
                    <MenuList>
                        <MenuItem sx={{ p: 1 }}>
                            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={settings} alt="icon settings" />
                            </ListItemIcon>
                            <ListItemText primary="Настройки аккаунта" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                        </MenuItem>
                        <MenuItem sx={{ p: 1 }}>
                            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={key} alt="icon key" />
                            </ListItemIcon>
                            <ListItemText primary="Управление доступами" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500" } }} />
                        </MenuItem>
                        <Divider sx={{ mx: "15px" }} />
                        <MenuItem sx={{ pl: "10px" }}>
                            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={exit} alt="icon exit" />
                            </ListItemIcon>
                            <ListItemText primary="Выйти из аккаунта" sx={{ '& .MuiTypography-root': { fontFamily: "PT Root UI", fontSize: "14px", fontWeight: "500", color: '#E50C00' } }} />
                        </MenuItem>
                    </MenuList>
                </Paper>
            )}
        </div>
    </div >
);

Header.propTypes = {
    hiddenMenu: PropTypes.bool.isRequired,
    handleClickHidden: PropTypes.func.isRequired,
    project: PropTypes.number.isRequired,
    handleClickListItem: PropTypes.func.isRequired,
    anchorEl: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    openProjects: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleUpdateClick: PropTypes.func.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    openFolders: PropTypes.bool.isRequired,
    handleClickFolders: PropTypes.func.isRequired,
    handleMenuItemClick: PropTypes.func.isRequired,
    handleClickProfile: PropTypes.func.isRequired,
    openProfile: PropTypes.bool.isRequired,
};


export default Header;
