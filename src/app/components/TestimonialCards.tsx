"use client";

import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
    const testimonials = [
        {
            quote:
                'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
            name: 'Alex Johnson',
            title: 'Guitar Student',
        },
        {
            quote:
                "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
            name: 'Samantha Lee',
            title: 'Piano Student',
        },
        {
            quote:
                "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
            name: 'Michael Chen',
            title: 'Vocal Student',
        },
        {
            quote:
                'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
            name: 'Emily Taylor',
            title: 'Violin Student',
        },
        {
            quote:
                'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
            name: 'Chris Morales',
            title: 'Music Production Student',
        },
    ];

    return (
        <div className='h-[rem] mt-20 sm:m-5 sm: p-10'>
            <h2 className='text-3xl text-white text-center'>Hear our Harmony: Voices of success</h2>
            <div>
                <div className='flex justify-center mt-10'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards