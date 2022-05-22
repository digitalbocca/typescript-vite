<template lang="pug">

div.alert-success(role="alert" data-test-id="alert-success")
  span.alert-success-title(data-test-id="alert-success-title") {{ title }} 
  span.alert-success-content(data-test-id="alert-success-content") {{ content }}

</template>

<script lang="ts" setup>

/*
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})
*/

interface Props {
  title: string
  content: string
}

const props = defineProps<Props>()

props.title
props.content

</script>

<style lang="sass">

.alert-success
  @apply p-4 mb-4
  @apply text-sm
  @apply text-green-700 bg-green-100
  @apply dark:bg-green-200 dark:text-green-800
  @apply rounded-lg 

.alert-success-title
  @apply font-medium
  @apply mr-2

</style>