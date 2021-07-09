<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<script>
import Header from '/src/views/Layout/components/Header.vue'
import Footer from '/src/views/Layout/components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>
