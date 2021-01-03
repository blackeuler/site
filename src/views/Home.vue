<template>
  <div class="min-h-screen bg-black overflow-hidden">
    <div class="flex flex-col items-center">
      <img src="../assets/face.png" class="max-w-sm mt-5 max-h-sm px-5" alt="" />
      <div class="text-white text-3xl px-20">
        <h1 class="font-sans tracking-wide text-6xl">
          Christopher David Miller
        </h1>
        <div class="flex flex-col md:flex-row md:space-x-20 md:justify-center">
          <!-- <router-link to="/projects">
            <div class="flex flex-col items-center">
              <img
                class="w-16 h-16"
                src="../assets/broken-computer.png"
                alt=""
              />
              <h2>Projects</h2>
            </div>
          </router-link> -->

          <router-link to="/about">
            <div class="flex-col flex items-center">
              <img src="../assets/Chris.png" alt="" />
              <h2>About</h2>
            </div>
          </router-link>

          <!-- <router-link class="text-center" to="/blog">
            <div class="flex flex-col items-center">
              <img src="../assets/blog.png" class="center w-16 h-16" alt="" />
              <h2>Writings </h2>
            </div>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
