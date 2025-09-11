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