<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from "@lehoczky/vue-termynal"
</script>

<template>
    <v-termynal>
        <vt-input>pip install spaCy</vt-input>
        <vt-progress />
        <vt-text>Successfully installed spacy</vt-text>
    </v-termynal>
</template>