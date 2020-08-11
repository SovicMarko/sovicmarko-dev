<template>
  <div id="app">
    <Navigacija class="navigacija"></Navigacija>
    <transition v-bind:name="vrstaTranzicije">
      <router-view v-bind:engleski="engleski" />
    </transition>
    <Zaglavlje></Zaglavlje>
  </div>
</template>

<script>
import Navigacija from "@/components/Navigacija.vue";
import Zaglavlje from "@/components/Zaglavlje.vue";

export default {
  data: function () {
    return {
      vrstaTranzicije: "ulazpocetne",
    };
  },
  components: {
    Navigacija,
    Zaglavlje,
  },
  computed: {
    engleski: function () {
      return this.$store.state.eng;
    },
  },
  watch: {
    $route(to, from) {
      if (to.name == "Home") {
        this.vrstaTranzicije = "ulazpocetne";
      } else if (from.name == "Home") {
        this.vrstaTranzicije = "slajdlevo";
      } else if (from.name == "About" && to.name == "Services") {
        this.vrstaTranzicije = "slajdlevo";
      } else if (from.name == "About" && to.name == "Contact") {
        this.vrstaTranzicije = "slajdlevo";
      } else if (from.name == "Services" && to.name == "Contact") {
        this.vrstaTranzicije = "slajdlevo";
      } else {
        this.vrstaTranzicije = "slajddesno";
      }
    },
    engleski: function () {
      // window.console.log(window)
      // if (this.engleski == true) {
      //   window.sntchChat.removeButton;
      // } else {
      //    window.sntchChat1.removeButton;
      // }
    },
  },
  created: function () {
    window.sntchChat.Init(126602);
    //  window.sntchChatEn.Init(11111);
  },
};
</script>



<style>
#sntch-button {
  opacity: 0 !important;
}

router-view {
  /* min-height: 100vh; */
}
* {
  box-sizing: border-box;
  font-family: segoe UI;
  /* outline: 1px dashed green; */
}

body {
  width: 100%;
  margin: 0px;
  position: relative;
}

#app {
  position: relative;
  overflow-x: hidden;
  overflow: hidden;
  min-height: 130vh;
}

main {
  background-color: white;
  width: 100%;
  padding-top: 40px;
  min-height: 110vh;
  padding-bottom: 200px;
  left: 0px;
}

.navigacija {
  z-index: 9999;
  width: 100%;
}

.slajddesno-leave-active,
.slajddesno-enter-active,
.slajdlevo-leave-active,
.slajdlevo-enter-active {
  position: absolute;
  z-index: 2;
  /* min-height: 110vh; */

  width: 100%;
  transition: all 1s;
  overflow: hidden;
}

.slajddesno-enter-active aside {
  top: -130px !important;
}

.slajdlevo-leave-active aside {
  top: -130px !important;
}

.slajddesno-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slajdlevo-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slajddesno-enter-to,
.slajdlevo-enter-to {
  opacity: 1;
  left: 7px;
}

.slajddesno-leave,
.slajdlevo-leave {
  left: 7px;
}

.slajddesno-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slajdlevo-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.ulazpocetne-enter-active {
  position: absolute;
  width: 100%;
  transition: all 1s;
}
.ulazpocetne-enter {
  opacity: 0;
  transform: scale(0.8);
}
</style>

