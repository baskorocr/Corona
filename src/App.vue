<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
