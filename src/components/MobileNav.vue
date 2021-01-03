<template>
  <button v-on:click="showButton">
    <svg
      class="md:hidden"
      width="57px"
      height="57px"
      viewBox="0 0 57 57"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Group</title>
      <g
        id="Hamburger-Lambda"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group">
          <ellipse
            id="Oval"
            stroke="#FFFFFF"
            stroke-width="0.5"
            fill="#000000"
            cx="28.0249996"
            cy="28.3099996"
            rx="27.7749996"
            ry="28.0599996"
          ></ellipse>
          <g
            id="Anonymous-lambda"
            transform="translate(13.110000, 3.990000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M31.9991951,38.4065515 L33.2154892,38.4065515 C33.2154892,41.9395964 32.6363016,44.5459409 31.4200074,46.1676664 C30.3195508,47.7893919 28.8715816,48.6002547 27.0760998,48.6002547 C25.6860494,48.6002547 24.295999,48.0789858 23.0217861,47.0364479 C21.6896544,45.9359913 20.5312791,43.0400529 19.4887412,38.4065515 L16.5348841,25.2010724 L6.45701845,48.1369045 L0.0280352072,48.1369045 L14.565646,16.8607698 C13.7547832,12.8064561 12.8280829,9.79468015 11.7855451,7.8833608 C10.6850885,5.91412269 9.35295685,4.92950364 7.73123134,4.92950364 C6.45701845,4.92950364 5.29864309,5.45077255 4.31402404,6.43539161 C3.38732375,7.42001066 2.86605484,8.92589863 2.7502173,11.0109743 L1.53392317,11.0109743 C1.59184194,7.65168573 2.22894839,4.98742241 3.50316128,3.0181843 C4.77737418,0.991027419 6.34118091,0.00640836359 8.25250026,0.00640836359 C9.46879438,0.00640836359 10.6271697,0.527677275 11.7276263,1.51229633 C12.8280829,2.49691539 13.812702,4.23447842 14.565646,6.66706668 C15.3765087,9.09965493 16.6507216,14.1385877 18.3303659,21.7838651 L20.7629541,32.5567559 C21.7475732,37.0165011 22.7321922,39.9703582 23.8326488,41.4762462 C24.8751867,42.9821342 26.2073183,43.7350782 27.6552875,43.7350782 C30.2037133,43.7350782 31.6516825,41.9395964 31.9991951,38.4065515"
              id="flowRoot1306"
            ></path>
          </g>
          <rect
            id="Rectangle"
            fill="#000000"
            x="17"
            y="20"
            width="24.5099997"
            height="11.0199999"
          ></rect>
          <text
            id="C.D.M"
            font-family="SFProDisplay-Semibold, SF Pro Display"
            font-size="9.11999989"
            font-weight="500"
            letter-spacing="0.0684000019"
            fill="#FFFFFF"
          >
            <tspan x="17.2922033" y="29">C.D.M</tspan>
          </text>
        </g>
      </g>
    </svg>
  </button>
  <div
    class="flex flex-col justify-start w-full space-y-8 md:flex-row md:space-x-60 md:space-y-0 mt-4"
    id="menu"
    v-bind:class="{ hidden: showBurger }"
  >
    <!-- <a class="" href="/projects.html"><h2>Projects</h2></a> -->
   
    <router-link to="/about">
      <h2>About</h2>
    </router-link>
     <router-link to="/">
      <h2>Home</h2>
    </router-link>
    
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    showButton: function () {
      this.showBurger = !this.showBurger;
    },
  },
  data: function () {
    return {
      showBurger: true,
    };
  },
})
export default class MobileNav extends Vue {}
</script>