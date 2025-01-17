import React, { useState } from 'react';
import { NavLink,Route,Routes } from 'react-router-dom';
import { FaHome, FaBook, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import Students from '../pages/Students';
import CourseUpload from '../pages/courseUpload';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex w-full'>
            <button onClick={toggleSidebar} className="sticky  top-0 right-4 z-50 p-3 text-white bg-indigo-600 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-indigo-300 lg:hidden">
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <div className={`sticky h-lvh top-0 left-0 bg-gradient-to-b bg-indigo-500 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-64`}>
                <div className="p-6 text-2xl font-bold border-b border-indigo-700">
                    <span className="block text-center">Dashboard</span>
                </div>
                <ul className="mt-4 space-y-2">
                    <li>
                        <NavLink
                            to="/sidebar/students"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 text-lg font-medium transition duration-200 hover:bg-indigo-700 ${isActive ? 'bg-indigo-700' : ''
                                }`
                            }
                        >
                            <PiStudentFill className="mr-3" /> Student
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sidebar/courses"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 text-lg font-medium transition duration-200 hover:bg-indigo-700 ${isActive ? 'bg-indigo-700' : ''
                                }`
                            }
                        >
                            <FaBook className="mr-3" /> Courses
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='w-full relative'>
                <Routes>
                    <Route path='/students' element={<Students />} />
                    <Route path='/courses' element={<CourseUpload />} />
                </Routes>
            </div>

            {isOpen && (
                <div onClick={toggleSidebar} className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"></div>
            )}
        </div>
        
    );
};

export default Sidebar;
