---
description: "Guide that describes how to correctly configure Node, npm and VS Code with nvm and Volar for Vue 3 and Nuxt 3."
---
# Node, npm, VS Code setup for Vue and Nuxt 3

If this is the first time you run a `npm` / `node` app on your setup, this guide will help you to set both of them up for your sidebase project:

1. Install the `node` version manager `nvm` by running:
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
2. Install the required `node` and `npm` version:
    - Specific version:
        ```sh
        nvm install 18
        ```
    - Create a `.nvmrc`-file that contains a node version like `16.14.2`, then use it like this:
        ```sh
        # uses existing `.nvmrc`-file to install required version
        nvm install
        ```
3. Use the required `node` and `npm` version:
    - Specific version (in the current terminal session!):
        ```sh
        nvm use 18
        ```
    - Create a `.nvmrc`-file that contains a node version like `16.14.2`, then use it like this (in the current terminal session!):
        ```sh
        # uses existing `.nvmrc`-file to use required version
        nvm use
        ```
    - Permanently change used `node` and `npm` version:
        ```sh
        # Make node 16.14.2 your default node version:
        nvm alias default 16.14.2
        ```
4. Install a code editor (recommended: VS Code), [get it here](https://code.visualstudio.com/)
5. Uninstall or disable the old Vue VS Code extension `Vetur`, else conflicts may arise between `volar` and `Vetur`
6. Install the `volar` extension to support `vue`, `nuxt` and `typescript` development help
    - for vs code: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
    - sublime LSP: https://github.com/sublimelsp/LSP-volar
    - vim: https://github.com/yaegassy/coc-volar
7. Enable "take over mode" for volar for this project.
    - documented here: https://github.com/johnsoncodehk/volar/discussions/471
    - for VS Code:
        1. Run (CMD/CTRL + SHIFT + P): Extensions: Show Built-in Extensions
        2. Find "TypeScript and JavaScript Language Features"
        3. Right click and select "disable for workspace"
        4. Reload the editor
        5. A message "Take over mode enabled" (or similar) should appear
8. Done! You can now run `npm install and it should work as expected

Stuck? Ask for help: https://discord.gg/VzABbVsqAc

If you have type-problems (e.g., unexpected squiggly lines in your code-editor) after running `npm i` for the first time:
- Ensure you have `vetur` disabled or uninstalled (see above),
- Ensure you have the builtin `typescript` extention of VS Code disabled (see above),
- Reload the `vue` volar server (VS Code command: "Volar: Restart Vue Server"),
- Close and re-open the file you have problems with,
- Ensure that the nuxt-postinstall step ran to generate nuxt-types by running: `npm run postinstall` in your sidebase project

If none of this works, file an issue (preferrably with a reproduction) [here](https://github.com/sidebase/sidebase/issues/new/choose) or join our Discord to ask: https://discord.gg/VzABbVsqAc
