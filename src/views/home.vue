<template lang="pug">

h2.view-title {{ viewTitle }}
alert-success(title="Alerta" content="Este é um alerta de sucesso")
alert-success

</template>

<script lang="ts" setup>

import AlertSuccess from '@/components/alert-success.vue'

const viewTitle = 'Home'

</script>

<style lang="sass" scoped>

.view-title
  @apply text-2xl

</style>