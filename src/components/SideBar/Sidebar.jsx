
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import spanner from "../../images/spanner.png";
import spannerBlack from "../../images/spannerBlack.png";
import laptop from "../../images/laptop.png";
import grid from "../../images/grid_view.png";
import loupe from "../../images/loupe.png";

const Sidebar = ({
    hiddenMenu, handleClickHidden, handleClickPosition, handleClickPositionHidden, openPosition, openPositionHidden
}) => (
    <div className={`aside ${hiddenMenu ? '' : 'hidden'}`}>
        <div className={`title ${!hiddenMenu ? 'hidden' : ''}`}>
            {hiddenMenu ? <h1>SEO</h1> : <h1>S</h1>}
            {hiddenMenu && <ArrowBackIcon sx={{ color: "#747474" }} onClick={handleClickHidden} />}
        </div>
        <List sx={{ width: '100%' }} component="nav">
            <ListItemButton sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={laptop} alt="icon project analytics" />
                </ListItemIcon>
                <ListItemText primary="Аналитика проекта" />
            </ListItemButton>
            <ListItemButton onClick={handleClickPosition} sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleClickPositionHidden}>
                    {openPosition ? <img src={spannerBlack} alt="icon positions from" /> : <img src={spanner} alt="icon positions from" />}
                </ListItemIcon>
                <ListItemText primary="Позиции из Я.Вебмастера" />
                {openPosition ? <ArrowDropUpIcon sx={{ width: '16px', height: '16px', color: openPosition ? "#000" : "#747474", display: hiddenMenu ? 'block' : 'none' }} /> : <ArrowDropDownIcon sx={{ width: '16px', height: '16px', color: openPosition ? "#000" : "#747474", display: hiddenMenu ? 'block' : 'none' }} />}
            </ListItemButton>
            {!openPositionHidden && !hiddenMenu && (
                <Paper sx={{ width: 320, position: 'absolute', top: '65px', left: '45px', maxWidth: "210px" }}>
                    <MenuList>
                        <MenuItem>
                            <Typography variant="body2">Ключевые слова</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>URLs</Typography>
                        </MenuItem>
                    </MenuList>
                </Paper>
            )}
            <Collapse in={openPosition} timeout="auto" unmountOnExit sx={{ display: hiddenMenu ? 'block' : 'none' }}>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: '44px', gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                        <ListItemText primary="Запросы Я.Вебмастер" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: '44px', gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                        <ListItemText primary="URLs Я.Вебмастер" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={loupe} alt="icon removing positions" />
                </ListItemIcon>
                <ListItemText primary="Съем позиций (Live/XML)" />
            </ListItemButton>
            <hr />
            <ListItemButton sx={{ p: 1, gap: '8px', justifyContent: hiddenMenu ? 'flex-start' : 'center' }}>
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={grid} alt="icon my projects" />
                </ListItemIcon>
                <ListItemText primary="Мои проекты" />
            </ListItemButton>
        </List>
    </div >
);

Sidebar.propTypes = {
    hiddenMenu: PropTypes.bool.isRequired,
    handleClickHidden: PropTypes.func.isRequired,
    handleClickPosition: PropTypes.func.isRequired,
    handleClickPositionHidden: PropTypes.func.isRequired,
    openPosition: PropTypes.bool.isRequired,
    openPositionHidden: PropTypes.bool.isRequired,

};

export default Sidebar;
