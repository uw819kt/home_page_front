'use client'
import React from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { Loading } from '@/components/ui/Loading'
import { Card } from '@/components/ui/Card'
import { GearAnimation } from '@/components/animations/GearAnimation'
import { useProfile } from '@/hooks/useApi'

export const About: React.FC = () => {
    const { profile, loading } = useProfile()

    if (loading) return <Loading />

    const journeySteps = [
        {
            icon: <GraduationCap size={24} />,
            title: '4年制大学卒業、資格取得',
            description: '大学卒業時に受けた国家試験に無事合格…！管理栄養士免許を取得!',
            period: '〜2018'
        },
        {
            icon: <Briefcase size={24} />,
            title: '管理栄養士として勤務',
            description: '6年間の実務経験を積む',
            period: '2018-2024'
        },
        {
            icon: <MapPin size={24} />,
            title: 'ITエンジニアへの転職を決意',
            description: 'プログラミングスクールでプログラミング学習開始（4ヶ月）',
            period: '2025'
        },
        {
            icon: <MapPin size={24} />,
            title: 'ITエンジニアへ転身',
            description: '受託開発のIT企業に転職',
            period: '2025'
        },
        {
            icon: <Calendar size={24} />,
            title: '個人開発に挑戦',
            description: '知識、興味のある技術のアウトプットなどをしつつ制作中…',
            period: '2025〜'
        }
    ]

    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* セクションタイトル */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        <GearAnimation size={40} speed="slow" className="mr-4" />
                        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-steampunk-brass">
                            The Journey of Transformation
                        </h2>
                        <GearAnimation size={40} speed="slow" className="ml-4" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-steampunk-brass to-transparent mx-auto"></div>
                </div>

                {/* プロフィール説明 */}
                <p className="text-lg md:text-xl text-steampunk-cream leading-relaxed max-w-4xl mx-auto mb-12">
                    管理栄養士からITエンジニアへの転身を決意。日々新しい技術を学びながら、過去の経験も活かせるサービス開発を目指していきます。チーム医療での協働経験を活かし、コミュニケーションを大切にした開発を心がけていきます。
                </p>

                {/* キャリアタイムライン */}
                <div className="relative">
                    <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-steampunk-bronze text-center mb-12">
                        Career Timeline
                    </h3>

                    <div className="relative">
                        {/* 中央ライン（PCのみ表示） */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-steampunk-brass via-steampunk-copper to-steampunk-bronze"></div>

                        {/* 各ステップ */}
                        <div className="space-y-12">
                            {journeySteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`
                                        relative 
                                        flex flex-col md:flex-row 
                                        items-center md:items-start 
                                        ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}
                                    `}
                                >
                                    {/* カード */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <Card hover className="relative">
                                            {/* 歯車アイコン */}
                                            <div className="absolute -top-4 -right-4">
                                                <div className="w-8 h-8 bg-steampunk-brass rounded-full flex items-center justify-center">
                                                    <GearAnimation size={16} speed="normal" />
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="text-steampunk-brass mt-1">
                                                    {step.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-cinzel text-lg font-semibold text-steampunk-brass">
                                                            {step.title}
                                                        </h4>
                                                        <span className="text-sm text-steampunk-bronze font-medium">
                                                            {step.period}
                                                        </span>
                                                    </div>
                                                    <p className="text-steampunk-cream/80">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* 中央ドット（PCのみ） */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-steampunk-brass rounded-full border-4 border-steampunk-dark shadow-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
