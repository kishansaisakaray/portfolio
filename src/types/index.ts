export interface Project {
    title: string;
    description: string;
    repository: string;
    liveDemo: string;
}

export interface PortfolioData {
    projects: Project[];
}