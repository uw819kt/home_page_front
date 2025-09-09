'use client'
import React from 'react'
import { Settings } from 'lucide-react'

export type Speed = 'slow' | 'normal' | 'fast'

interface GearAnimationProps {
    size?: number
    className?: string
    speed?: Speed
}

export const GearAnimation: React.FC<GearAnimationProps> = ({
    size = 48,
    className = '',
    speed = 'normal',
}) => {
    const speedClasses: Record<Speed, string> = {
        slow: 'animate-spin-slow',
        normal: 'animate-spin',
        fast: 'animate-spin-fast',
    }

    return (
        <Settings
            size={size}
            className={`gear-icon ${speedClasses[speed]} opacity-80 ${className}`}
            style={{ stroke: '#B8860B' }}
        />
    )
}