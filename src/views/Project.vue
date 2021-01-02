<template>
  <div class="flex flex-col flex-wrap md:flex-row">
    <Aside/>
    <div class="bg-gray-400 md:w-9/12">
      <div class="">Monadic Dragons</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileNav from "@/components/MobileNav.vue"; // @ is an alias to /src
import Aside from "../components/Aside.vue";

@Options({
  components: {
    MobileNav,
    Aside
  },
})
export default class Project extends Vue {}
</script>