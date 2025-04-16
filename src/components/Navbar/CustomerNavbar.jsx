import { useEffect } from 'react';
// import { motion } from 'framer-motion';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import ShoaLogo from "../../assets/shoa_homes_logo.jpg"
import "./CustomerNavbar.css"
import {useLocation} from "react-router";

import { IoCaretDownOutline } from "react-icons/io5";

import {useTranslation} from "react-i18next"
import "../../i18n"

// import LoginIcon from '@mui/icons-material/Login';
import { LoginOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {

  // const [loading, setLoading] = useState(true);
  // const [navigation, setNavigation] = useState(initialNavigation);

  const {t, i18n} = useTranslation();

  let location = useLocation()

  const pathName = location.pathname.split('/')[1];

  const AdminEditorData = JSON.parse(localStorage.getItem('adminEditorData'))
  const customerData = JSON.parse(localStorage.getItem('customerData'))


  const navigation = [
  { name: t("home.home"), href: '/'},
  { name: t("home.orderFreight"), href: '/user/order-freight'},
  { name: t("home.about"), href: '/about'},
  { name: t("home.contactUs"), href: '/contact'},
]

  // const handleNavigationClick = () => {
  //     setNavigation(prevNavigation =>
  //         prevNavigation.map(item => ({
  //           ...item,
  //           current: item.href === pathName 
  //         })
  //       ));
  //     };

    // useEffect(() => {
        // setLoading(false);
    // }, []);

    
    // console.log(navigation);
    // console.log(location);
    // console.log(pathName);
    // const shoaHomes = "SHOA".split("");

    // console.log(shoaHomes);

    const changeLanguage = (language) => {

      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language)
      
    }



  return (
    <>
      {/* Spinner Start */}
        {/* {loading && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="show bg-white absolute inset-0 flex items-center justify-center z-50"
            >
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
            </motion.div>
        )} */}
      {/* Spinner End */}

      {/* Tailwind Navbar start */}
      <Disclosure as="nav" className="bg-custom-primary sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div 
                // initial="initial"
                // whileHover="hovered"
                // animate="hovered"
                // transition={{
                //   staggerChildren: 0.15
                // }}
                className="flex shrink-0 items-center hover:cursor-pointer">
                {/* <img
                  alt="Shoa Homes"
                  // src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  src={ShoaLogo}
                  className="block h-12 w-14"
                /> */}
                <h1 className="text-[20px] font-bold text-gray-200">
                  FREIGHT APP
                </h1>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      // onClick={() => handleNavigationClick()}
                      aria-current={item.href === pathName || (item.name === "Home" && location.pathname === "/") ? 'page' : undefined}
                      className={classNames(
                        item.href === pathName || (item.name === "Home" && location.pathname === "/") ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* Change Language dropdown begin*/}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex justify-center items-center text-white text-sm focus:outline-hidden cursor-pointer p-[2px]">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open language menu</span>
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  /> */}
                  {/* <div style={{backgroundColor: 'white'}}><LoginOutlined /></div> */}
                  <span className=''>{t("language.select")}</span>
                  <IoCaretDownOutline />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                               
                <MenuItem onClick={() => changeLanguage("am")}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    {t("language.amharic")}
                  </a>
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("en")}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    {t("language.english")}
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* Change Language dropdown end*/}

              {/* Profile dropdown begin*/}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {
                    customerData ? <AccountCircleIcon/> : <LoginOutlined color='primary' size="40px"/>
                  }
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  /> */}
                  {/* <div style={{backgroundColor: 'white', width:'15px', height:'15px', borderRadius: '5px'}}> */}
                    
                  {/* </div> */}
                  
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >                
                {
                  !customerData ? (
                    <MenuItem>
                      <a
                        href="/user/order-freight"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        User
                      </a>
                    </MenuItem>
                    ) : ''
                }                
                
                
                {
                  !AdminEditorData ? (
                    <MenuItem>
                    <a
                      href="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Admin
                    </a>
                    </MenuItem>
                  ) : ''
                  
                }
                  
                {
                  customerData ? (
                    <MenuItem>
                      <a
                        href="/user/signout"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                      ) : ''
                }
                
              </MenuItems>
            </Menu>
            {/* Profile dropdown end*/}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 ">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                // onClick={() => handleNavigationClick(item.name)}
                aria-current={item.href === pathName || (item.name === "Home" && location.pathname === "/") ? 'page' : undefined}
                className={classNames(
                  item.href === pathName || (item.name === "Home" && location.pathname === "/") ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* Tailwind Navbar end */}


    </>
  )
}

export default Navbar