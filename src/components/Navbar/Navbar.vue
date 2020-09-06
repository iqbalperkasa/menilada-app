<template lang='pug'>
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    .container
      router-link.navbar-brand.mr-5(to='/') Menilada App
      button.navbar-toggler(
        type='button'
        @click='toggleNavbarCollapse'
      )
        span.navbar-toggler-icon
      #navbar-markup.collapse.navbar-collapse(:class='{ "show": isNavbarShow }')
        .navbar-nav
          router-link.nav-link(
            to='/'
            :class='{ "active": currentPath === `/` }'
          ) Home
          router-link.nav-link(
            to='/produk'
            :class='{ "active": currentPath === `/produk` }'
          ) Produk
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isNavbarShow: false,
      currentPath: window.location.pathname,
    };
  },
  watch: {
    $route(to) {
      this.currentPath = to.path;
    },
  },
  methods: {
    toggleNavbarCollapse() {
      this.isNavbarShow = !this.isNavbarShow;
    },
  },
}
</script>
