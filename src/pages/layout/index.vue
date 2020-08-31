<template>
  <div>
    <headers></headers>
    <mains></mains>
    <footers></footers>
  </div>
</template>

<script>
  import headers from './components/headers'
  import footers from './components/footers'
  import mains from './components/mains'

  export default {
    components: {
      headers,
      footers,
      mains
    },
    name: 'index'
  }
</script>

<style scoped>

</style>
