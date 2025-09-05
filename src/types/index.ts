export interface Profile {
    id: number
    name: string
    description: string
    github_url: string
    updated_at: string
}

export interface Skill {
    id: number
    name: string
    description: string
}

export interface Project {
    id: number
    title: string
    description: string
    tech_stack: string[]
    status: string
    github_url: string
    demo_url: string
    created_at: string
}

export interface ApiResponse<T> {
    data: T
    message?: string
}

export interface ApiError {
    errors: string[]
}