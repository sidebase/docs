export interface Version {
    latest: boolean,
    preRelease: boolean
    link: string
}

const VERSIONS: Record<string, Record<string,Version>> = {
    'nuxt-auth': {
        '0.5': {
            latest: false,
            preRelease: false,
            link: '/nuxt-auth/v0.5/getting-started'
        },
        '0.6': {
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
