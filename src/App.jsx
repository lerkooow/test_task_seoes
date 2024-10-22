import { useState, useEffect } from 'react';
import Sidebar from './components/SideBar/Sidebar';
import Header from "./components/Header/Header";
import './App.css';

function App() {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [openPosition, setOpenPosition] = useState(false);
  const [openPositionHidden, setOpenPositionHidden] = useState(true);
  const [openFolders, setOpenFolders] = useState({ folder1: false, folder2: false });
  const [project, setProject] = useState(1);
  const [openProjects, setOpenProjects] = useState(true);
  const [openProfile, setOpenProfile] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [lastUpdated, setLastUpdated] = useState("Обновлено 18.10.2024 в 10:11");

  useEffect(() => {
    const storedLastUpdated = localStorage.getItem('lastUpdated');
    if (storedLastUpdated) {
      setLastUpdated(storedLastUpdated);
    }
  }, []);

  const handleClickHidden = () => {
    setHiddenMenu(!hiddenMenu)
    setOpenPositionHidden(true)
    setOpenPosition(false)
  };
  const handleClickPosition = () => setOpenPosition(!openPosition);
  const handleClickPositionHidden = () => setOpenPositionHidden(!openPositionHidden);
  const handleClickFolders = (folder) => setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
    setOpenProjects(!openProjects)
    setOpenPositionHidden(true)
  }
  const handleClickProfile = () => { setOpenProfile(!openProfile) };
  const handleClose = () => {
    setAnchorEl(null)
    setOpenProjects(true);
  };
  const handleUpdateClick = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString("ru-RU", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    const updatedText = `Обновлено ${formattedDate}`;
    setLastUpdated(updatedText);
    localStorage.setItem('lastUpdated', updatedText);
  };
  const handleMenuItemClick = (index) => {
    setProject(index);
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        hiddenMenu={hiddenMenu}
        handleClickHidden={handleClickHidden}
        handleClickPosition={handleClickPosition}
        handleClickPositionHidden={handleClickPositionHidden}
        openPosition={openPosition}
        openPositionHidden={openPositionHidden}
      />
      <Header
        hiddenMenu={hiddenMenu}
        handleClickHidden={handleClickHidden}
        project={project}
        openProjects={openProjects}
        handleClickListItem={handleClickListItem}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        handleUpdateClick={handleUpdateClick}
        lastUpdated={lastUpdated}
        openFolders={openFolders}
        handleClickFolders={handleClickFolders}
        handleMenuItemClick={handleMenuItemClick}
        handleClickProfile={handleClickProfile}
        openProfile={openProfile}
      />
    </div>
  );
}

export default App;
