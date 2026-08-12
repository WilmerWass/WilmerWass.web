// 1. Definición estricta de la estructura de un Proyecto
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'active' | 'in-development' | 'archived';
}

// 2. Lista de proyectos iniciales de tu ecosistema
const myProjects: Project[] = [
  {
    id: 'wass-control',
    title: 'WassControlSys',
    description: 'Sistema de control y automatización centrado en Windows/Sistemas.',
    tags: ['C#', '.NET', 'Windows'],
    githubUrl: 'https://github.com/WilmerWass/WassControlSys',
    status: 'in-development'
  },
  {
    id: 'aimytime',
    title: 'AIMYtime',
    description: 'Herramienta de gestión de tiempo e integración con IA.',
    tags: ['TypeScript', 'AI', 'CLI'],
    status: 'active'
  }
];

// 3. Renderizador dinámico en el DOM
export class ProjectRenderer {
  private container: HTMLElement;

  constructor(containerId: string) {
    const element = document.getElementById(containerId);
    if (!element) {
      throw new Error(`El contenedor con ID '${containerId}' no fue encontrado en el DOM.`);
    }
    this.container = element as HTMLElement;
  }

  public renderProjects(projects: Project[]): void {
    this.container.innerHTML = projects.map(project => `
      <article class="project-card status-${project.status}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">Ver GitHub</a>` : ''}
      </article>
    `).join('');
  }
}
