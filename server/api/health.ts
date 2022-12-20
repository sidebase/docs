export default defineEventHandler((event) => {
    return {
        service: process.env.ALGOLIA_API_KEY
    }
})
