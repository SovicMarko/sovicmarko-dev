<template>
  <div class="action-buttons-container">
    <router-link to="/omeni">
      <div class="svg-wrapper">
        <svg class="reverse" height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
        </svg>

        <div class="text">
          <transition name="fade">
            <span v-if="!engleski">VIŠE O MENI</span>
            <b v-else>ABOUT ME</b>
          </transition>
        </div>
      </div>
    </router-link>
    <router-link to="/kontakt">
      <div class="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
        </svg>

        <div class="text">
          <transition name="fade">
            <span v-if="!engleski">KONTAKT</span>
            <b v-else>CONTACT ME</b>
          </transition>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    engleski: Boolean,
  },
};
</script>

<style scoped>
* {
  /* outline: 1px dashed red; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.action-buttons-container {
  text-align: center;
}
.action-buttons-container a {
  height: 80px;
  /* background-color: tomato; */
}
.svg-wrapper {
  height: 60px;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
  display: inline-block;
  vertical-align: middle;
}

.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  /* stroke-dasharray: 1 1; */
  stroke-dashoffset: -474;
  stroke-width: 10px;
  stroke: rgb(41, 51, 71);
  -webkit-animation: 0.5s draw-initial linear forwards;
  animation: 0.5s draw-initial linear forwards;
}

.text {
  font-weight: bold;
  color: darkred;
  /* font-family: 'Roboto Condensed'; */
  font-size: 22px;
  /* letter-spacing: 8px; */
  line-height: 32px;
  text-align: center;
  position: relative;
  top: -48px;
  text-indent: -10px;
}

.text > * {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: center;
}

.reverse {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

@keyframes draw-initial {
  0% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
  100% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
  }
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    /* stroke-dashoffset: -174; */
    stroke-width: 10px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}

.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}
</style>