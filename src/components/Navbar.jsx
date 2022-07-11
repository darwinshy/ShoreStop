import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Chat, Cart, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent title={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />

        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => {
              handleClick('cart');
            }}
            color="blue"
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick('chat')}
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notification"
            dotColor="#03C9D7"
            customFunc={() => handleClick('notification')}
            color="blue"
            icon={<RiNotification3Line />}
          />
          <TooltipComponent
            title="Profile"
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('profile')}
          >
            <img src={avatar} className="rounded-full w-8 h-8" alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shashwat
              </span>
            </p>
          </TooltipComponent>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.profile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
