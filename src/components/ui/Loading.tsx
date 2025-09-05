'use client'
import React from 'react'
import { GearAnimation } from '@/components/animations/GearAnimation'

export const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-center">
                <GearAnimation size={64} speed="fast" />
                <p className="mt-4 text-steampunk-brass font-cinzel text-lg">
                    Loading...
                </p>
            </div>
        </div>
    )
}