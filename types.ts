export interface Testimonial {
  name: string
  avatar: string
  text: string
  githubLink?: string
  twitterLink?: string
  position?: string
}

export interface Feature {
  icon: string
  description: string
}

export interface SidebaseModule {
  title: string
  description: string
  getStartedLink: string
  docsLink: string
  gitHubLink: string
}
