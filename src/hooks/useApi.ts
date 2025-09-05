import { useState, useEffect } from 'react'
import { profileApi, skillsApi, projectsApi } from '@/lib/api'
import type { Skill, Profile, Project } from '@/types'

export const useProfile = () => {
    const [profile, setProfile] = useState<Profile | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProfile = async () => {
        try {
            setLoading(true)
            const response = await profileApi.get()
            setProfile(response.data)
            setError(null)
        } catch (err) {
            setError('Failed to fetch profile')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return { profile, loading, error, refetch: fetchProfile }
}

export const useSkills = () => {
    const [skills, setSkills] = useState<Skill[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchSkills = async () => {
        try {
            setLoading(true)
            const response = await skillsApi.getAll()
            setError(null)
        } catch (err) {
            setError('Failed to fetch skills')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSkills()
    }, [])

    return { loading, error, refetch: fetchSkills }
}

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProjects = async () => {
        try {
            setLoading(true)
            const response = await projectsApi.getAll()
            setProjects(response.data)
            setError(null)
        } catch (err) {
            setError('Failed to fetch projects')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return { projects, loading, error, refetch: fetchProjects }
}