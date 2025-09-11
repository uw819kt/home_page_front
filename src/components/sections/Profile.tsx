'use client'
import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'
import { GearAnimation } from '@/components/animations/GearAnimation'
import { Button } from '@/components/ui/Button'
import { useProfile } from '@/hooks/useApi'

export function Profile() {
    const { profile, loading } = useProfile()

    // ▼ ロード進捗用 state（擬似的に増加させる）
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!loading) return
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 10
                return next >= 100 ? 100 : next
            })
        }, 150)

        return () => clearInterval(interval)
    }, [loading])

    if (loading) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center space-y-6 px-6">
                {/* 歯車アイコン */}
                <GearAnimation size={64} speed="fast" />

                {/* パーセンテージ */}
                <span className="text-steampunk-brass font-medium text-lg">
                    {Math.floor(progress)}%
                </span>

                {/* プログレスバー */}
                <div className="w-full max-w-md bg-steampunk-darker rounded-full h-4 overflow-hidden border border-steampunk-brass shadow-inner">
                    <div
                        className="h-full bg-gradient-to-r from-steampunk-brass to-steampunk-bronze transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </section>
        )
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 背景の歯車アニメーション */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 opacity-20">
                    <GearAnimation size={120} speed="slow" />
                </div>
                <div className="absolute top-40 right-20 opacity-15">
                    <GearAnimation size={80} speed="normal" />
                </div>
                <div className="absolute bottom-32 left-1/4 opacity-10">
                    <GearAnimation size={150} speed="slow" />
                </div>
                <div className="absolute bottom-20 right-1/3 opacity-25">
                    <GearAnimation size={60} speed="fast" />
                </div>
            </div>

            {/* メインコンテンツ */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* 中央の大きな歯車 */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <GearAnimation size={120} speed="normal" className="text-steampunk-brass opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-steampunk-brass rounded-full shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* 名前とタイトル */}
                <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-steampunk-brass mb-4 tracking-wider">
                    {profile?.name || 'MIYA'}
                </h1>

                <p className="text-lg md:text-xl text-steampunk-cream mb-8 font-light italic">
                    From Nutritionist to Engineer
                </p>

                {/* 説明文 */}
                <p className="text-base md:text-lg text-steampunk-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {profile?.description || '管理栄養士からITエンジニアへ転身。Next.js、Ruby on Railsを中心に学習中です。個人開発にも挑戦していきたいです。'}
                </p>

                {/* リンク */}
                <div className="flex justify-center space-x-6 mb-12">
                    {profile?.github_url && (
                        <a
                            href={profile.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Button variant="outline" size="lg" className="group-hover:scale-110 transition-transform duration-300">
                                <Github className="mr-2" size={20} />
                                GitHub
                            </Button>
                        </a>
                    )}
                </div>
            </div>

            {/* 蒸気エフェクト（装飾） */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-steampunk-dark/50 to-transparent"></div>
        </section>
    )
}