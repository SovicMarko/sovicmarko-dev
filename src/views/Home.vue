<template>
  <div class="home">
    <main>
      <div id="glavna-naslov">
        <h1 class="naslov">Full-stack Web Developer & Mentor</h1>
        <h2>
          <transition name="slajdlevo">
            <span v-if="engleski">
              You need programmers service or help?
              <div class="novi-red"></div>This is the right place!
            </span>
            <b v-else>
              Potrebna vam je programerska usluga ili pomoć?
              <div class="novi-red"></div>Na pravom ste mestu!
            </b>
          </transition>
        </h2>
        <div class="slika-div">
          <img src="../assets/Untitled.png" alt class="slika" />
        </div>
        <h1 class="pozdravna-poruka" v-if="engleski">
          {{ pozdravEngleski }}
          <span v-if="kursor" id="kursor">|</span>
        </h1>
        <h1 class="pozdravna-poruka" v-else>
          {{ pozdravSrpski }}
          <span v-if="kursor" id="kursor">|</span>
        </h1>
      </div>

      <ReviewCarousel />

      <div id="glavna-info">
        <hr />
        <h2>
          <transition name="slajddesno">
            <span v-if="engleski">If you need services:</span>
            <b v-else>Ako su vam potrebne usluge:</b>
          </transition>
        </h2>
        <!-- <h2 v-if="engleski">If you need services:</h2>
        <h2 v-else>Ako su vam potrebne usluge:</h2>-->
        <div class="info">
          <router-link to="usluge" id="info-prvi">
            <transition name="slajddesno">
              <span v-if="engleski">Website building and design</span>
              <span v-else>Izrade sajtova</span>
            </transition>
          </router-link>
          <router-link to="usluge" id="info-drugi">
            <span v-if="engleski">Programming lessons</span>
            <span v-else>Časova programiranja</span>
          </router-link>
          <router-link to="usluge" id="info-treci" v-if="!engleski">
            <span>Računarske obuke</span>
          </router-link>
          <router-link to="omeni" id="info-cetvrti">
            <span v-if="engleski">Looking for a coder to hire?</span>
            <span v-else>ili nudite zaposlenje</span>
          </router-link>
        </div>
      </div>
      <action-buttons v-bind:engleski="engleski" />
      <!-- <router-link to="/kontakt" id="glavna-kontakt"><span v-if="engleski">CONTACT ME</span><span v-else>KONTAKTIRAJTE ME</span></router-link> -->
    </main>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import ReviewCarousel from "@/components/Home/ReviewCarousel.vue";
import ActionButtons from "@/components/Home/ActionButtons.vue";

export default {
  name: "Home",
  props: {
    engleski: Boolean,
  },
  data: function () {
    return {
      pozdravSrpski: "",
      pozdravEngleski: "",
      kursor: true,
    };
  },
  components: {
    // ReviewCarousel,
    ActionButtons,
  },
  methods: {
    startIntervalSrpski: function () {
      this.pozdravSrpski = "";
      this.kursor = true;
      let poruka = "Zdravo,     ja sam Marko";
      // let poruka = "Zdravo,     ja sam Marko";
      let niz = poruka.split("");
      let i = 0;
      let interval = setInterval(() => {
        this.pozdravSrpski += niz[i++];
        if (i == poruka.length) {
          clearInterval(interval);
          let self = this;
          setTimeout(function () {
            self.kursor = false;
          }, 1000);
        } else if (this.pozdravSrpski.length > poruka.length) {
          this.pozdravSrpski = "Zdravo,     ja sam Marko";
          clearInterval(interval);
          let self = this;
          setTimeout(function () {
            self.kursor = false;
          }, 1000);
        }
      }, 80);
    },
    startIntervalEngleski: function () {
      this.pozdravEngleski = "";
      this.kursor = true;
      let poruka = "Hello,     I am Marko";
      // let poruka = "Zdravo,     ja sam Marko";
      let niz = poruka.split("");
      let i = 0;
      let interval = setInterval(() => {
        this.pozdravEngleski += niz[i++];
        if (i == poruka.length) {
          clearInterval(interval);
          let self = this;
          setTimeout(function () {
            self.kursor = false;
          }, 1000);
        } else if (this.pozdravEngleski.length > poruka.length) {
          this.pozdravEngleski = "Hello,     I am Marko";
          clearInterval(interval);
          let self = this;
          setTimeout(function () {
            self.kursor = false;
          }, 1000);
        }
      }, 80);
    },
  },
  created: function () {
    if (this.engleski) {
      this.startIntervalEngleski();
    } else {
      this.startIntervalSrpski();
    }
  },
  watch: {
    engleski() {
      this.pozdravSrpski = "";
      this.pozdravEngleski = "";
      if (this.engleski) {
        this.startIntervalEngleski();
      } else {
        this.startIntervalSrpski();
      }
    },
  },
};
</script>


<style scoped>
* {
  /* outline: 1px dashed green; */
}
a {
  text-decoration: none;
}

#kursor {
  font-weight: normal;
  line-height: 10px;
  animation: kursor-animcija 1s 2s;
}

@keyframes kursor-animcija {
  0% {
    color: black;
  }
  25% {
    color: white;
  }
  50% {
    color: black;
  }
  100% {
    color: white;
  }
}

#glavna-naslov .naslov {
  font-size: 50px;
  padding: 0px 50px;
  text-align: center;
}

#glavna-naslov .pozdravna-poruka {
  text-align: center;
}
#glavna-naslov h2 {
  font-weight: lighter;
  padding: 0px 50px;
  text-align: center;
  min-height: 32px;
}
#glavna-naslov h2 b {
  font-weight: lighter;
}
.novi-red {
  display: none;
}
.slika {
  display: block;
  margin: auto;
  margin-top: 50px;
  width: 15%;
  animation: slika-bounce 1s;
}

.slika-div {
  min-height: 210px;
  transition: all 0.6s;
}

@keyframes slika-bounce {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

#glavna-info {
  margin-top: 50px;
  width: 100%;
}
#glavna-info h1 {
  text-align: center;
}
#glavna-info h2 {
  font-weight: lighter;
  text-align: center;
  min-height: 32px;
}
#glavna-info h2 b {
  font-weight: lighter;
  text-align: center;
}

#glavna-info .info {
  width: 710px;
  margin: auto;
}
#glavna-info a {
}
#glavna-info a {
  display: inline-block;
  background-color: #940000;
  padding: 10px 20px;
  color: white;
  margin-left: 10px;
}
#glavna-info a:first-of-type {
  margin-left: 0px;
}

@keyframes kontaktAnimacija {
  from {
    font-size: 12px;
  }
  to {
    font-size: 20px;
  }
}

#glavna-kontakt {
  display: block;
  font-weight: bold;
  margin: auto;
  margin-top: 50px;
  border: 2px solid #3c763d;
  color: #3c763d;
  width: 300px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  animation: kontaktAnimacija 2s;
  animation-iteration-count: 3;
}

#glavna-kontakt:hover {
  background-color: #3c763d;
  color: white;
}

@keyframes infoAnimacija {
  from {
    background-color: white;
  }
  to {
    background-color: #940000;
  }
}
#info-prvi,
#info-drugi,
#info-treci,
#info-cetvrti {
  animation: infoAnimacija 2s;
  cursor: pointer;
}

#info-prvi a,
#info-drugi a,
#info-treci a,
#info-cetvrti a {
  color: inherit;
  text-decoration: none;
}

#info-prvi {
  animation-delay: 1s;
}
#info-drugi {
  animation-delay: 2s;
}
#info-treci {
  animation-delay: 3s;
}
#info-cetvrti {
  animation-delay: 4s;
}

/* .action-buttons-container {

}
.action-buttons-container .svg-wrapper {
  display: inline-block;
  width: 320px;
  border: 1px solid red;
}
.action-buttons-container .svg-wrapper div {
  width: 100%;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1400px) {
  .slika {
    width: 210px;
  }
}

@media only screen and (max-width: 820px) {
  .novi-red {
    display: block;
  }
}

@media only screen and (max-width: 730px) {
  #glavna-info .info {
    width: 300px;
    margin: auto;
  }
  #glavna-info .info a {
    display: block;
    margin-left: 0px;
    margin-top: 10px;
    text-align: center;
  }
  #glavna-info div a:first-of-type {
    margin-left: 0px;
  }
}

@media only screen and (max-width: 460px) {
  #glavna-naslov h1 {
    font-size: 40px;
    padding: 0px 50px;
    text-align: center;
  }
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
  padding-top: 40px;
  transform: translateY(20px);
  opacity: 0;
}
</style>
