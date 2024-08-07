---
description: "Guide that describes how to perform breakpoint JS debugging of Vue 3 + Nuxt 3 + sidebase apps in VS Code."
---
# Breakpoint Debugging

JavaScript and TypeScript support breakpoint debugging. When you use VS Code as your code editor, breakpoint debugging is supported out-of-the box 🎉 To use it:
1. Open the command palette (CMD / CTRL + SHIFT + P)
2. Select "Debug: JavaScript Debug Terminal"
3. Run any `npm` command, e.g.: `npm run test`
4. Your code editor colors should change a bit (e.g.: to orange) while executing the command, the left side should show deep execution insights
5. Set breakpoints (click left of line count in editor - red dot should appear) - the debugger will automatically work and stop at the breakpoints and allow you to inspect variables
6. Run a command that runs the code you set breakpoints at, e.g., `npm run test`

Stuck? Ask for help: https://discord.gg/VzABbVsqAc

Checkout the [official VS Code guide](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) for more in depth info.
