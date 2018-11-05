<template>
  <v-app>
    <Sidebar :state="state"/>
    <Toolbar :state="state"/>
    <!-- <v-content> -->
      <!-- <v-container fluid fill-height> -->
        <nuxt/>
      <!-- </v-container> -->
    <!-- </v-content> -->
    <appFooter />
  </v-app>
</template>

<script>
import Toolbar from '@/components/toolbar';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';

export default {
  data: () => ({
    state: {
      drawer: true
    }
  }),
  components: {
    Toolbar,
    Sidebar,
    appFooter: Footer
  },
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
