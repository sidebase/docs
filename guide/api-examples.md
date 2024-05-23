---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```vue twoslash
<script setup lang="ts">
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```
