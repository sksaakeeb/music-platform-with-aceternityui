"use client";

import React from 'react'
import Link from 'next/link';
import courseData from "../data/course-data.json"
import { BackgroundGradient } from './ui/background-gradient';

function FeaturedCourses() {
    return (
        <div>
            <div className='mt-12'>
                <div className='text-center'>
                    <h2 className='text-2xl text-teal-500 text-center'>FEATURED COURSES</h2>
                    <p className='mt-5 text-sm text-white text-center'>Learn with the best teachers</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto p-10'>
                    <BackgroundGradient>
                        <div className='p-10 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga ex consequatur, adipisci rem, officia vitae eaque dolores autem placeat corrupti vel accusantium. Quia iusto laborum praesentium similique eius nisi!</div>
                    </BackgroundGradient>
                    <BackgroundGradient>
                        <div className='p-10 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga ex consequatur, adipisci rem, officia vitae eaque dolores autem placeat corrupti vel accusantium. Quia iusto laborum praesentium similique eius nisi!</div>
                    </BackgroundGradient>
                    <BackgroundGradient>
                        <div className='p-10 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga ex consequatur, adipisci rem, officia vitae eaque dolores autem placeat corrupti vel accusantium. Quia iusto laborum praesentium similique eius nisi!</div>
                    </BackgroundGradient>
                </div>
            </div>
            <div className='text-center'>
                <Link href={"/courses"}>View All Courses</Link>
            </div>
        </div>
    )
}

export default FeaturedCourses