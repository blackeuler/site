<template>
  <div class="flex flex-col md:flex-row">
    <Aside />
    <div class="mx-auto p-3 md:p-20 md:mt-20 bg-gray-300 md:w-3/5 ">
      <article class="prose-lg mx-auto justify-self-center ">
        <h1 class="">About</h1>
        <p>I'm Christopher David Miller but you can call me Chris. I live in New York Metro Area and I work as a software engineer @ 
          <img class="w-24 inline" src="https://jeyufzqsjm-flywheel.netdna-ssl.com/wp-content/uploads/2019/07/Corvus_Logo_no-tagline_color.svg" alt="Corvus Logo"> </p>
         I love meeting people and learning new things. I dabble in a variety of topics: 
        <ul>
          <li>Poetry</li>
          <li>Musical Composition </li>
          <li>Photography </li>
          <li>Programming Language Theory</li>
          <li>中文</li>
        </ul>

        I hope to use this site as a space to showcase my talents but more importantly share my interests.
        One of the other things that I take very seriously is helping people. With that in mind I hope that
        the writings that I will post here may help someone out there. 
      </article>
      <article>
          I apologize for anyone that visits this site to see this but I am just going to start editing and writing on this alot more
          this is like my facebook now.... Or it should be right lol write lol 
      </article>
      
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Aside from "../components/Aside.vue";
import MobileNav from "../components/MobileNav.vue";

@Options({
  components: {
    Aside,
    MobileNav,
  },
})
export default class About extends Vue {}
</script>
