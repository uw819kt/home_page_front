'use client'
import React from 'react'
import { GearAnimation } from '@/components/animations/GearAnimation'
import { useSkills } from '@/hooks/useApi'
import { Loading } from '@/components/ui/Loading'
import { Card } from '@/components/ui/Card'

export const Skills: React.FC = () => {
    const { skills, loading } = useSkills()

    if (loading) return <Loading />

    return (
        <section id="skills" className="py-20 px-6 bg-steampunk-brown/20">
            <div className="container mx-auto max-w-6xl">
                {/* セクションタイトル */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        <GearAnimation size={40} speed="normal" className="mr-4" />
                        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-steampunk-brass">
                            Engineering Arsenal
                        </h2>
                        <GearAnimation size={40} speed="normal" className="ml-4" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-steampunk-brass to-transparent mx-auto"></div>
                    <p className="text-steampunk-cream/80 mt-4 text-lg">
                        現在習得中のスキル
                    </p>
                </div>

                {/* スキル一覧 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map(skill => (
                        <Card key={skill.id} className="p-6 bg-steampunk-dark text-steampunk-cream shadow-lg">
                            <h3 className="font-semibold text-xl mb-2">{skill.name}</h3>
                            <p className="text-steampunk-cream/80">{skill.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
