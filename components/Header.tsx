import { useEffect, useRef, useState } from "react";
// import styles from '../styles/header.module.scss'
import { Transition } from '@tailwindui/react'
// import '@/styles/header.module.scss'
import { CrossIcon } from "./icons/CrossIcon";
import { MenuIcon } from "./icons/MenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/types";
import { setThemeMode } from "@/store/config/config.action";
import { ModeIcon } from "./icons/ModeIcon";
import { ArrowIcon } from "./icons/ArrowIcon";
function Header() {
    const dispatch = useDispatch();
    const configStore = useSelector((state: RootState) => state.config);
    const authStore = useSelector((state:RootState) => state.auth);
    const { darkMode } = configStore;
    const { isLogin, authUser } = authStore;

    const [open, setMenuStatus] = useState(true);
    const changeMenuOption = () => {
        const newOption = open ? false : true
        setMenuStatus(newOption)
    }

    const [subOpen, setSubMenuStatus] = useState(false);
   
    const modeChange = () =>{
        const newThemeMode = darkMode ? false : true;
        dispatch(setThemeMode(newThemeMode)) 
    }

    useEffect(() => {
        console.log('darkmode', darkMode);
        console.log('authUser', authUser);
        console.log('isLogin', isLogin);
    }, [darkMode])
    
    return (   
        <>
            <div className="headerMain fixed w-full">
                <div className="headerchaild">
                    <div className="navBody">
                        <div className="logoBody">
                            <a href="#" className="logoStyle">MY Shop</a>
                                <button className="menuButton"
                                onClick={changeMenuOption}>
                                { open ? <CrossIcon /> :  <MenuIcon /> }
                                
                            </button>
                        </div>
                        <nav className={"navMain "+ (open ? 'flex' : 'hidden')}>
                            <a className="menuClass" href="#">Blog</a>
                            <a className="menuClass" href="#">Portfolio</a>
                            <a className="menuClass" href="#">About</a>
                            <a className="menuClass" href="#">Contact</a>
                            {
                                !isLogin ? <>
                                    <a className="menuClass" href="/login">Login</a>
                                </> 
                                : <>
                                     <div className="relative">
                                        <button onClick={() => setSubMenuStatus((v) => !v)} className="menuClass">
                                            <span>User</span>
                                            <ArrowIcon rotate={subOpen ? 'rotate-180' : 'rotate-0'} />
                                        </button>
                                        { subOpen ? 
                                        <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                        <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800 transition">
                                        <a className="headerDropDown" href="#">Link #1</a>
                                        <a className="headerDropDown" href="#">Link #2</a>
                                        <a className="headerDropDown" href="#">Link #3</a>
                                        </div></div>
                                            :<></>
                                        }
                                    </div>
                                </> 
                            }
                           
                            <button type="button" className='modeButton' onClick={modeChange}>
                                <ModeIcon />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
