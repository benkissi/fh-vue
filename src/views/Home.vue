<template>
  <div id="home">
    <Collection v-bind:products="products" />
  </div>
</template>

<script>
import Collection from "@/components/Collection.vue";
import { getObjectArray } from "@/utils/methods";
import sampleData from "@/utils/sampleData.json";

export default {
  name: "home",
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = getObjectArray(sampleData);
  },
  components: {
    Collection
  }
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
