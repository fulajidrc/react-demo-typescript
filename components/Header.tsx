import { useEffect, useState } from "react";
// import styles from '../styles/header.module.scss'

// import '@/styles/header.module.scss'
import { CrossIcon } from "./icons/CrossIcon";
import { MenuIcon } from "./icons/MenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/types";
import { setThemeMode } from "@/store/config/config.action";
import { ModeIcon } from "./icons/ModeIcon";
function Header() {
    const dispatch = useDispatch();
    const configStore = useSelector((state: RootState) => state.config);
    const { darkMode } = configStore;

    const [open, setMenuStatus] = useState(true);
    const changeMenuOption = () => {
        const newOption = open ? false : true
        setMenuStatus(newOption)
    }

    const modeChange = () =>{
        const newThemeMode = darkMode ? false : true;
        localStorage.setItem('themeMode', newThemeMode.toString())
        dispatch(setThemeMode(newThemeMode)) 
    }

    useEffect(() => {
        console.log('darkmode', darkMode);
    }, [darkMode])
    
    return (   
        <>
        <div className="min-h-screen">
                <div className="headerMain">
                    <div className="headerchaild">
                        <div className="navBody">
                            <div className="logoBody">
                                <a href="#" className="logoStyle">Flowtrail UI</a>
                                    <button className="menuButton"
                                    onClick={changeMenuOption}>
                                    { open ? <CrossIcon /> :  <MenuIcon /> }
                                    
                                </button>
                            </div>
                            <nav className={"navMain "+ (open ? 'flex' : 'hidden')}>
                             <a className="menuClass" href="#">Blog</a>

                             <button type="button" className='modeButton' onClick={modeChange}>
                                <ModeIcon />
                            {/* <span className="sr-only">Icon description</span> */}
                        </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
