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

import Link from "next/link";
import { logoutAction } from "@/store/auth/auth.action";
import { Dispatch } from "redux";
import { getCategories } from "@/store/category/category.action";
import { CartIcon } from "./icons/CartIcon";
import { ToastContainer, toast } from 'react-toastify';

function Header() {
    const dispatch:Dispatch<any> = useDispatch();
    const configStore = useSelector((state: RootState) => state.config);
    const { darkMode } = configStore;

    const authStore = useSelector((state:RootState) => state.auth);
    const { isLogin, authUser } = authStore;

    const categoryStore = useSelector((state:RootState) => state.category)
    const { categories } = categoryStore
    
    const { carts, addProductError } = useSelector((state:RootState) => state.cart)

    const [open, setMenuStatus] = useState(false);
    const changeMenuOption = () => {
        const newOption = open ? false : true
        setMenuStatus(newOption)
    }

    const [subOpen, setSubMenuStatus] = useState(false);
   
    const modeChange = () =>{
        const newThemeMode = darkMode ? false : true;
        dispatch(setThemeMode(newThemeMode)) 
    }

    const userLogout = () => {
        dispatch(logoutAction())
    }

    useEffect(() => {
    }, [darkMode])

    useEffect(() => {
        if(addProductError){
            toast.error(addProductError,{
                theme: 'colored',
            })
        }
    }, [addProductError])

    useEffect(() => {
        setSubMenuStatus(false);
    }, [isLogin])
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    const menus = [
        {title: 'Home', url:'/', id:1},
        // {title: 'About', url:'/about', id:2},
        // {title: 'Product', url:'/product', id:3},
        // {title: 'Users', url:'/users', id:4},
    ]

    return (   
        <>
            <ToastContainer />
            <div className="headerMain fixed w-full">
                <div className="headerchaild">
                    <div className="navBody">
                        <div className="logoBody">
                            <Link href="/" className="logoStyle">MY Shop</Link>
                                <button className="menuButton"
                                onClick={changeMenuOption}>
                                { open ? <CrossIcon /> :  <MenuIcon /> }
                                
                            </button>
                        </div>
                        <nav className={"navMain "+ (open ? 'flex' : 'hidden')}>
                            { menus.map((menu)=> (
                                <Link key={menu.id} className="menuClass" href={menu.url}>{menu.title}</Link>
                            ) ) }

                            { categories.map((category)=> (
                                <Link key={category} className="menuClass" href={'/category/'+ category}>{category}</Link>
                            ) ) }
                            {/* <a className="menuClass" href="#">Blog</a>
                            <a className="menuClass" href="#">Portfolio</a>
                            <a className="menuClass" href="#">About</a>
                            <a className="menuClass" href="#">Contact</a> */}


                            {
                                !isLogin ? <>
                                    <Link className="menuClass" href="/login">Login</Link>
                                </> 
                                : <>
                                     <div className="relative">
                                        <button onClick={() => setSubMenuStatus((v) => !v)} className="menuClass">
                                            <span>{authUser?.name.firstname} {authUser?.name.lastname}</span>
                                            <ArrowIcon rotate={subOpen ? 'rotate-180' : 'rotate-0'} />
                                        </button>
                                        { subOpen ? 
                                        <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                        <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800 transition">
                                        {/* <a className="headerDropDown" href="#">Link #1</a>
                                        <a className="headerDropDown" href="#">Link #2</a> */}
                                        <a className="headerDropDown cursor-pointer" onClick={userLogout}>Logout</a>
                                        </div></div>
                                            :<></>
                                        }
                                    </div>
                                </> 
                            }
                           
                            <button type="button" className='modeButton' onClick={modeChange}>
                                <ModeIcon />
                            </button>
                            <Link href="/cart">
                                <div className="relative m-2 inline-flex w-fit cursor-pointer">
                                    { carts.length > 0 ? <>
                                        <div
                                            className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-pink-500 px-[2px] py-[3px] text-center align-baseline text-xs font-bold leading-none text-white">
                                            {carts.length}
                                        </div>
                                    </> 
                                    :<>

                                    </> }
                                    
                                    <div
                                        className="flex items-center justify-center rounded-lg bg-indigo-700 px-1 py-1 text-center text-white shadow-lg dark:text-gray-200">
                                        <CartIcon />
                                    </div>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
