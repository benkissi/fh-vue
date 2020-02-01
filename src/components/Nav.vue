<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart - {{ cartCount }}</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: mapGetters(["cartCount"])
};
</script>
