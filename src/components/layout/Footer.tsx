import React from 'react'
import { Github } from 'lucide-react'
import { GearAnimation } from '@/components/animations/GearAnimation'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-steampunk-darker border-t border-steampunk-copper">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <GearAnimation size={24} speed="slow" />
                        <span className="font-cinzel text-steampunk-brass font-bold">
                            Miya Portfolio
                        </span>
                        <GearAnimation size={24} speed="slow" />
                    </div>

                    <div className="flex justify-center space-x-6 mb-4">
                        <a
                            href="https://github.com/uw819kt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-steampunk-cream hover:text-steampunk-brass transition-colors duration-300"
                        >
                            <Github size={24} />
                        </a>

                    </div>

                    <p className="text-steampunk-cream/70 text-sm">
                        © 2025 Miya Portfolio. Built with Next.js & Rails.
                    </p>
                </div>
            </div>
        </footer>
    )
}