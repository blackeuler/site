<template>
  <section
      class="bg-black h-2/12 md:w-3/12 md:h-screen text-white flex-col flex p-3 items-center md:justify-start justify-center"
    >
      <img src="../assets/face.png" class="md:mt-8 w-32 h-32" alt="" />
 <MobileNav/>
      <div
        class="flex flex-col hidden md:flex text-center text-2xl justify-around space-y-40"
      >
        <h1>Christopher David Miller</h1>
        <div
          class="flex flex-col justify-start w-full space-y-8 md:flex-row md:space-x-60 md:space-y-60 mt-4 md:block text-2xl hidden"
        >
          
            <router-link to="/">
            <div class="flex-col flex items-center text-white">
              
              <h2>Home</h2>
            </div>
          </router-link>
          <router-link to="/about">
            <div class="flex-row flex items-center text-white">
              <img src="../assets/Chris.png" alt="" />
              <h2>About Me</h2>
              
            </div>
          </router-link>
        </div>
        <h1 class="text-lg">Constantly Delivering More</h1>
       
      </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MobileNav from "@/components/MobileNav.vue"; // @ is an alias to /src

@Options({
  components: {
    MobileNav
  },
})
export default class Project extends Vue {}

</script>