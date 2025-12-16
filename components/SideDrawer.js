import { X, Grid3X3, MapPin, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function SideDrawer({ isOpen, onClose }) {
    return (
        <>
            {/* Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close button in drawer */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
                >
                    <X size={24} />
                </button>

                {/* Login Section */}
                <div className="p-6 border-b">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xl">👤</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Login to explore</p>
                            <p className="font-semibold">World of flavors</p>
                        </div>
                    </div>
                    <button className="w-full border-2 border-gray-800 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                        LOGIN
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-6 space-y-6 border-b">
                    <button className="flex items-center gap-3 w-full text-left hover:text-yellow-500 transition">
                        <Grid3X3 size={24} />
                        <span className="font-semibold">Explore Menu</span>
                    </button>
                    <button className="flex items-center gap-3 w-full text-left hover:text-yellow-500 transition">
                        <MapPin size={24} />
                        <span className="font-semibold">Branch Locator</span>
                    </button>
                </div>

                {/* Footer Links */}
                <div className="p-6 space-y-4">
                    <button className="text-left hover:text-yellow-500 transition font-medium">
                        Blog
                    </button>
                    <button className="text-left hover:text-yellow-500 transition font-medium">
                        Privacy Policy
                    </button>
                </div>

                {/* Hotline Section - Sticky Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🌶️</span>
                            <span className="font-semibold text-gray-800">Cheezious Hotline</span>
                        </div>
                        <Phone size={24} className="text-gray-800" />
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}
        </>
    );
}
