import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Mail, Lock } from 'lucide-react';
import Router from 'next/router';
import SideDrawer from './SideDrawer';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const handleLoginClick = () => {
        Router.push('/auth/login');
    };

    const handleBackToHome = () => {
        setCurrentPage('home');
    };



    return (
        <>
            <div className=" bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Left side - Menu and Logo */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
                                >
                                    {isMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </button>

                                <button
                                    onClick={handleBackToHome}
                                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
                                >
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-orange-600">
                                        <button
                                            onClick={() => setIsDrawerOpen(true)}
                                            className="p-2 hover:bg-gray-100 rounded-lg"
                                        >
                                            <Menu size={24} />
                                        </button>
                                    </div>
                                    <span className="font-bold text-xl text-gray-900 hidden sm:inline">
                                        Cheezious
                                    </span>
                                </button>
                            </div>

                            {/* Right side - Cart and Login */}
                            <div className="flex items-center gap-3">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="hidden sm:inline">CART</span>
                                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        0
                                    </span>
                                </button>

                                <button
                                    onClick={handleLoginClick}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <User className="w-5 h-5" />
                                    <span className="hidden sm:inline">LOGIN</span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="lg:hidden pb-4 border-t border-gray-200">
                                <nav className="flex flex-col gap-2 mt-4">
                                    <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                        Home
                                    </a>
                                    <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                        Menu
                                    </a>
                                    <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                        About
                                    </a>
                                    <a href="#" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                        Contact
                                    </a>
                                </nav>
                            </div>
                        )}
                    </div>
                </header>
            </div>
            <SideDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </>
    );
}