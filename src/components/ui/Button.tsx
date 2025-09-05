import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'default',
    size = 'md',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300'

    const variants = {
        default: 'steampunk-button',
        outline: 'border-2 border-steampunk-brass text-steampunk-brass hover:bg-steampunk-brass hover:text-steampunk-dark',
        ghost: 'text-steampunk-brass hover:bg-steampunk-brass/10'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-md',
        md: 'px-6 py-3 text-base rounded-lg',
        lg: 'px-8 py-4 text-lg rounded-xl'
    }

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    )
}