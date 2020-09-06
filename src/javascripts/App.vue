<template lang="pug">
  div
    Navbar
    router-view
</template>

<script>
import Navbar from 'components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>
