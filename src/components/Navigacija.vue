<template>
  <header>
    <router-link to="/">
      <div id="logo">
        <img src="../assets/logo.png" alt />
        <div id="logo-shadow"></div>
      </div>
    </router-link>
    <input type="checkbox" v-on:click="activeStatus" v-model="dropStatus" />
    <img class="click otvori" src="../assets/hamburger.png" alt />
    <img class="click ponisti" src="../assets/ponisti.png" alt />

    <nav>
      <ul>
        <!-- <button v-on:click="promeniJezik()">
             <transition name="slajdlevo">
              <span v-if="jezik">ENG</span>
              <span v-else>SRB</span>
             </transition>
        </button>-->
        <router-link to="/" v-on:click="changePage">
          <li>
            <transition name="slide-fade">
              <span v-if="!jezik">Početna</span>
              <b v-else>Home</b>
            </transition>
          </li>
        </router-link>
        <router-link to="omeni" v-on:click="changePage">
          <li>
            <transition name="slide-fade">
              <span v-if="!jezik">O meni</span>
              <b v-else>About</b>
            </transition>
          </li>
        </router-link>
        <router-link to="usluge" v-on:click="changePage">
          <li>
            <transition name="slide-fade">
              <span v-if="!jezik">Usluge</span>
              <b v-else>Services</b>
            </transition>
          </li>
        </router-link>
        <router-link to="kontakt" v-on:click="changePage">
          <li>
            <transition name="slide-fade">
              <span v-if="!jezik">Kontakt</span>
              <b v-else>Contact</b>
            </transition>
          </li>
        </router-link>
        <li>
          <a>Blog</a>
        </li>
      </ul>
    </nav>
    <div class="lang-switch">
      <label for>ENG</label>
      <label class="switch">
        <input type="checkbox" v-on:click="promeniJezik()" />
        <span class="slider round"></span>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigacija",
  data: function () {
    return {
      dropStatus: false,
    };
  },
  computed: {
    jezik: function () {
      return this.$store.state.eng;
    },
  },
  methods: {
    activeStatus: function () {
      this.dropStatus = true;
    },
    changePage: function () {
      this.dropStatus = false;
    },
    promeniJezik: function () {
      this.$store.commit("langSwitch");
    },
  },
  watch: {
    $route() {
      this.dropStatus = false;
    },
  },
};
</script>

<style type="text/css" scoped>
header {
  height: 75px;
  padding: 5px;
  -webkit-box-shadow: 0px 18px 40px -12px rgba(1, 1, 1, 0.3);
  -moz-box-shadow: 0px 18px 40px -12px rgba(1, 1, 1, 0.3);
  box-shadow: 0px 18px 40px -12px rgba(1, 1, 1, 0.3);
  /* 
  -webkit-box-shadow: 0px 3px 37px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 37px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 37px -2px rgba(0, 0, 0, 0.75); */
  position: relative;
}

header:hover {
  border-bottom-color: white;
  border-bottom: 1px solid #940000;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  transition: all 0.5s;
}

header:hover #logo-shadow {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

header:hover nav > ul > a > li {
  color: black;
}

header h1 {
  color: #940000;
  font-size: 40px;
}
#logo {
  position: absolute;
  left: 2%;
  width: 80px;
  height: 100px;
  background: #940000;
  text-align: center;
  color: white;
  z-index: 1;
}
#logo img {
  width: 60%;
  display: block;
  margin: auto;
  margin-top: 40px;
}
#logo-shadow {
  z-index: 2;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 38px;
  -webkit-box-shadow: 0px 18px 40px -12px rgba(148, 0, 0, 0.4);
  -moz-box-shadow: 0px 18px 40px -12px rgba(148, 0, 0, 0.4);
  box-shadow: 0px 18px 40px -12px rgba(148, 0, 0, 0.4);
  /* 6px 11px 25px 0px rgba(0,0,0,0.75); */
  /* 6px 11px 25px 0px rgba(148, 0, 0, 0.4) */
}

.click {
  display: none;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 50px;
}
.ponisti {
  right: 20px;
  top: 20px;
  width: 50px;
  display: none;
}

input[type="checkbox"] {
  display: none;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;

  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  outline: 1px dashed green;
  cursor: pointer;
}
input[type="checkbox"]:checked ~ nav {
  margin-left: 2px;
}

nav {
  display: block;
  position: absolute;
  right: 5px;
  top: 20px;
  transition: margin-left 0.7s;
}
nav a {
  text-decoration: none;
  color: inherit;
}

nav > ul {
  list-style-type: none;
  padding: 0px;
  height: 40px;
  overflow: hidden;
}

nav > ul:hover {
  cursor: pointer;
}

nav li {
  cursor: pointer;
  display: inline;
  padding: 10px;
  padding-bottom: 20px;
  color: gray;
  font-weight: bold;
  transition: padding-bottom 0.5s;
}

nav li:hover {
  border-bottom: 3px solid #940000;
  cursor: pointer;
  padding-bottom: 5px;
}

.usluge {
  position: relative;
}
.usluge:hover + .usluge-drop {
  display: block;
}

.lang-switch {
  position: absolute;
  top: 100px;
  right: 10px;
}

.lang-switch > label {
  vertical-align: middle;
  height: 34px;
  line-height: 34px;
}

/* The switch - the box around the slider */
.switch {
  transform: scale(0.7);
  display: inline-block;
  width: 70px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #940000;
}

input:focus + .slider {
  box-shadow: 0 0 1px #940000;
}

input:checked + .slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  position: absolute;
  transform: translateY(20px);
  opacity: 0;
}

@media only screen and (max-width: 620px) {
  .otvori {
    display: block;
  }
  input[type="checkbox"] {
    display: block;
  }
  input[type="checkbox"]:checked ~ .ponisti {
    display: block !important;
  }
  input[type="checkbox"]:checked ~ .otvori {
    display: none !important;
  }
  nav {
    width: 100%;
    padding: 0px;
    margin-top: 120px;
    position: static;
    margin-left: 105%;
  }
  header {
    padding-left: 0px;
  }
  nav ul {
    width: 100%;
    height: auto;
  }
  nav ul li {
    display: block;
    float: none;
    text-align: center;
    background: #940000;
    height: 100px;
    line-height: 100px;
    font-size: 20px;

    border: 1px solid white;
    padding: 0px;
    color: white;
    letter-spacing: 2px;
    font-weight: normal;
    text-transform: uppercase;
  }
  header:hover nav > ul > a > li {
    color: white;
  }
}
</style>