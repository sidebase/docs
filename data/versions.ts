export interface Version {
    latest: boolean,
    preRelease: boolean
    link: string
}

const VERSIONS: Record<string, Record<string,Version>> = {
    'nuxt-auth': {
        '0.6.0': {
            latest: false,
            preRelease: true,
            link: '/nuxt-auth/v0.6.0/getting-started'
        },
        '0.5.0': {
            latest: true,
            preRelease: false,
            link: '/nuxt-auth/getting-started'
        },
    }
}

export const getLatestVersion = (module: string) => {
    return Object.keys(VERSIONS[module]).find(versionName => VERSIONS[versionName]?.latest)
}

export default VERSIONS