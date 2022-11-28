![sidebase website](./.github/preview.png)

# sidebase docs

This is the mono-repo website of all `sidebase` projects.

## Quick start

1. Clone the repository
    ```sh
    git clone https://github.com/sidebase/docs
    ```
2. Install the dependencies
    ```sh
    npm ci
    ```
3. Start developing (with [docus](https://docus.dev)) at [localhost:3000](http://localhost:3000)
    ```sh
    npm run dev
    ```

## Contributing

In order to correctly edit the docs, please visit the respective module repository. These are currently:
- [sidebase/nuxt-auth](https://github.com/sidebase/nuxt-auth)
- [sidebase/nuxt-session](https://github.com/sidebase/nuxt-session)
- [sidebase/nuxt-parse](https://github.com/sidebase/nuxt-parse)

Once changes to the docs are merged into the `main` branch in der folder
`/docs/content` or `/docs/public` (for images and other media files), the changes will automatically
be merged into this repository and the website will be redeployed.

If you wish to edit the landing page or any blog entries, please open a PR on this repository.
