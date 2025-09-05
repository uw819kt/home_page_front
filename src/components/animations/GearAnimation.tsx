'use client'
import React from 'react'
import { Settings } from 'lucide-react'

interface GearAnimationProps {
    size?: number
    className?: string
    speed?: 'slow' | 'normal' | 'fast'
}

export const GearAnimation: React.FC<GearAnimationProps> = ({
    size = 48,
    className = '',
    speed = 'normal'
}) => {
    const speedClasses = {
        slow: 'animate-[spin_30s_linear_infinite]',
        normal: 'animate-[spin_20s_linear_infinite]',
        fast: 'animate-[spin_10s_linear_infinite]'
    }

    return (
        <Settings
            size={size}
            className={`gear-icon ${speedClasses[speed]} ${className}`}
        />
    )
}