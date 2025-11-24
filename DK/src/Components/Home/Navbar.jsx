import React, { useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const logoSrc = 'https://image2url.com/images/1763956603504-226fdfd9-5a18-4092-9fdd-5485e758c169.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleNotificationClick = () => {
    if (!showNotification) {
      setShowNotification(true);
      setNotificationVisible(true);
      
      setTimeout(() => {
        setNotificationVisible(false);
        setTimeout(() => {
          setShowNotification(false);
        }, 300);
      }, 3000);
    }
  };

  return (
    <Disclosure as="nav" className="relative sticky top-0 z-50 bg-gradient-to-r from-red-500 to-red-600 shadow-2xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
            <div className="relative flex h-16 sm:h-20 items-center justify-between">
              <div className="flex items-center sm:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white transition-transform duration-300 hover:scale-110 mr-2"
                  aria-label="Open main menu"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <Link to="/" className="group relative inline-block">
                  <div className="absolute -inset-1 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                  <img
                    alt="DK Krishna Dairy"
                    src={logoSrc}
                    className="h-8 w-auto border border-white/30 bg-slate-50 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 z-10"
                  />
                </Link>
              </div>

              <div className="hidden sm:flex flex-1 items-center justify-start">
                <div className="flex shrink-0 items-center">
                  <Link to="/" className="group relative inline-block">
                    <div className="absolute -inset-2 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                    <img
                      alt="DK Krishna Dairy"
                      src={logoSrc}
                      className="h-12 w-auto border-2 border-white/30 bg-slate-50 rounded-xl shadow-lg transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300 z-10"
                    />
                  </Link>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:justify-center flex-1">
                <div className="flex space-x-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          isActive
                            ? 'bg-white/20 text-white shadow-lg scale-105'
                            : 'text-white/90 hover:bg-white/10 hover:text-white hover:scale-105',
                          'relative rounded-xl px-4 lg:px-6 py-2 lg:py-3 text-sm font-semibold transition-all duration-300 transform hover:shadow-xl group'
                        )}
                      >
                        {isActive && (
                          <span className="absolute bottom-1 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-0.5 bg-white rounded-full animate-pulse pointer-events-none" />
                        )}
                        <span className="relative z-10 pointer-events-auto whitespace-nowrap">
                          {item.name}
                        </span>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* Right side icons */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative">
                  <button
                    onClick={handleNotificationClick}
                    type="button"
                    className="relative rounded-2xl p-2 sm:p-3 text-white hover:bg-white/10 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white transition-all duration-300 group hover:scale-110"
                    aria-label="View notifications"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:animate-bounce z-10" aria-hidden="true" />

                    <span className="absolute top-1 right-1 sm:top-2 sm:right-2 inline-flex h-2 w-2 sm:h-3 sm:w-3 pointer-events-none">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-70" />
                      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-yellow-400" />
                    </span>
                  </button>

                  {showNotification && (
                    <div className={`
                      absolute right-0 top-16 sm:top-20 z-50
                      transform transition-all duration-300 ease-out
                      ${notificationVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-2 opacity-0 scale-95'
                      }
                    `}>
                      <div className="bg-white rounded-2xl shadow-2xl p-4 min-w-64 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-gray-900">Notifications</span>
                          </div>
                          <button 
                            onClick={() => {
                              setNotificationVisible(false);
                              setTimeout(() => setShowNotification(false), 300);
                            }}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-3 py-2">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                              <BellIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              No New Notifications
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              You're all caught up! 🎉
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-3000 ease-linear"
                            style={{
                              width: notificationVisible ? '0%' : '100%'
                            }}
                          />
                        </div>

                        <div className="mt-2 text-xs text-gray-400 text-right">
                          Just now
                        </div>
                      </div>

                      <div className="absolute -top-2 right-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                    </div>
                  )}
                </div>

                <Menu as="div" className="relative">
                  <Menu.Button className="relative flex items-center gap-1 sm:gap-2 rounded-2xl bg-white/20 px-3 sm:px-5 py-2 sm:py-3 text-white font-semibold hover:bg-white/30 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300 z-10"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <span className="relative transform group-hover:translate-x-0.5 transition-transform duration-300 z-10 pointer-events-auto text-xs sm:text-sm whitespace-nowrap">
                      <a href="/products">Shop Now</a>
                    </span>

                    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300 pointer-events-none text-xs sm:text-sm">
                      →
                    </span>
                  </Menu.Button>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transform origin-top transition-all duration-300">
            <div className="space-y-1 px-3 py-3 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-lg rounded-b-2xl border-t border-white/10">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive ? 'bg-white/20 text-white shadow-lg transform scale-105' : 'text-white/90 hover:bg-white/10 hover:text-white hover:scale-105',
                      'block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 transform hover:shadow-xl relative overflow-hidden group w-full text-left'
                    )}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none" />
                    <span className="relative z-10 flex items-center pointer-events-auto">
                      {item.name}
                      {isActive && <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse" />}
                    </span>
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}