<template>
  <div class="home">
   <main>
      <div id="glavna-naslov">
        <h1 class="naslov">Full-stack Web Developer & Mentor</h1>
       
        <h2> 
           <transition name="slajdlevo">
              <span v-if="engleski">You need programmers service or help? <div class="novi-red"></div> This is the right place!</span>
              <b v-else>Potrebna vam je programerska usluga ili pomoć?<div class="novi-red"></div> Na pravom ste mestu!</b>
           </transition>
        </h2>
        <div class='slika-div'><img src="../assets/Untitled.png" alt="" class="slika"></div>
          <h1 class="pozdravna-poruka" v-if="engleski">{{ pozdravEngleski }}<span v-if="kursor" id="kursor">|</span></h1>
          <h1 class="pozdravna-poruka" v-else >{{ pozdravSrpski }}<span v-if="kursor" id="kursor">|</span></h1>
      </div>

      
      <router-link to="/omeni" >
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          
          <div class="text">
            <span v-if="!engleski">VIŠE O MENI</span>
            <b v-else>ABOUT ME</b>
          </div>
        </div>

      </router-link>
      
      
     

      <div class="review-section">

        <div class="review-wrapper">
          <transition name="fade">
        <div  v-if="levo" class="arrow-left" v-on:click="levo=false">&#x3C;</div>
          </transition>

        <div class="review">
          <div v-bind:class="{'review-carousel':true, levo:levo}">
            <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Jelena</b></div>
            </div>
            <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-1/53110852_2762502240640576_5438115430726107136_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=nrgyQ0vB1nMAX93edBA&_nc_ht=scontent.fbeg9-1.fna&oh=835c00f36a58ff8999dec07e3bf5194b&oe=5F511D50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Aleksandar</b></div>
            </div>
            <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Jelena</b></div>
            </div>
            <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Jelena</b></div>
            </div>
             <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Jelena</b></div>
            </div>
             <div class="card">
              <div class="profile-img"><img src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-1/53110852_2762502240640576_5438115430726107136_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=nrgyQ0vB1nMAX93edBA&_nc_ht=scontent.fbeg9-1.fna&oh=835c00f36a58ff8999dec07e3bf5194b&oe=5F511D50"></div>
              <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> <br><b>Jelena</b></div>
            </div>
          </div>
         
        </div>
        <transition name="fade">
          <div v-if="!levo" class="arrow-right" v-on:click="levo=true">&#x3E;</div>
        </transition>

       
      </div>


      </div>

      <div id="glavna-info">
      
        <hr>
        <h2> 
           <transition name="slajddesno">
              <span v-if="engleski">If you need services:</span>
              <b v-else>Ako su vam potrebne usluge:</b>
           </transition>
        </h2>
        <!-- <h2 v-if="engleski">If you need services:</h2>
        <h2 v-else>Ako su vam potrebne usluge:</h2> -->
        <div class="info">
          
          <router-link to="usluge" id="info-prvi">
            <transition name="slajddesno">
              <span v-if="engleski">Website building and design</span> 
              <span v-else>Izrade sajtova</span>
            </transition>
          </router-link>
          <router-link to="usluge" id="info-drugi"><span v-if="engleski">Programming lessons</span> <span v-else>Časova programiranja</span></router-link>
          <router-link to="usluge" id="info-treci" v-if="!engleski"><span >Računarske obuke</span></router-link>
          <router-link to="omeni" id="info-cetvrti"><span v-if="engleski">Looking for a coder to hire?</span> <span v-else>ili nudite zaposlenje</span></router-link>
        </div>
      </div>
        <router-link to="/kontakt" >
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          
          <div class="text">
            <span v-if="!engleski">KONTAKTIRAJTE ME</span>
            <b v-else>CONTACT ME</b>
          </div>
        </div>
        </router-link>
        <!-- <router-link to="/kontakt" id="glavna-kontakt"><span v-if="engleski">CONTACT ME</span><span v-else>KONTAKTIRAJTE ME</span></router-link> -->
    
    </main>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props : {
    engleski : Boolean
  },
  data: function() {
    return {
      pozdravSrpski: "",
      pozdravEngleski: "",
      kursor: true,
      levo: false,
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    startIntervalSrpski: function () {
        this.pozdravSrpski = "";
        this.kursor = true;
        let  poruka = "Zdravo,     ja sam Marko";
        // let poruka = "Zdravo,     ja sam Marko";
        let niz = poruka.split("");
        let i = 0;
        let interval = setInterval(() => {
            this.pozdravSrpski += niz[i++];
            if (i == poruka.length) {
              clearInterval(interval)
              let self = this;
              setTimeout(function(){
                self.kursor = false;
              },1000)
            } 
            else if (this.pozdravSrpski.length > poruka.length) {
              this.pozdravSrpski = "Zdravo,     ja sam Marko";
              clearInterval(interval)
              let self = this;
              setTimeout(function(){
                self.kursor = false;
              },1000)
            }
        }, 80);
    },
    startIntervalEngleski: function() {
        this.pozdravEngleski = "";
        this.kursor = true;
        let poruka = "Hello,     I am Marko";
        // let poruka = "Zdravo,     ja sam Marko";
        let niz = poruka.split("");
        let i = 0;
        let interval = setInterval(() => {
            this.pozdravEngleski += niz[i++];
            if (i == poruka.length) {
              clearInterval(interval)
              let self = this;
              setTimeout(function(){
                self.kursor = false;
              },1000)
            }
            else if (this.pozdravEngleski.length > poruka.length) {
              this.pozdravEngleski = "Hello,     I am Marko";
              clearInterval(interval)
              let self = this;
              setTimeout(function(){
                self.kursor = false;
              },1000)
            }
        }, 80);
    }
  },
  created: function () {
      if (this.engleski) {
        this.startIntervalEngleski();
      } else {
         this.startIntervalSrpski();
      }
  },
  watch: {
    engleski () {
      this.pozdravSrpski = "";
      this.pozdravEngleski = "";
      if (this.engleski) {
        this.startIntervalEngleski();
      } else {
         this.startIntervalSrpski();
      }
    }
  }
}

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

.svg-wrapper {
  height: 60px;
    margin: 0 auto;
    margin-top: 80px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
}

.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: #940000;
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
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
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
  display:none;
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
#glavna-info a  {
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
  from {font-size: 12px;}
  to {font-size: 20px;}
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
  from {background-color: white;}
  to {background-color: #940000;}
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
#info-cetvrti a
{
  color:inherit;
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
.review-section {
  background-color: whitesmoke
}

.review-wrapper {
  position: relative;
  /* outline: 1px solid black; */
  width: 1000px;
  margin: auto;
  -webkit-box-shadow: 0px 0px 18px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 18px -3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 18px -3px rgba(0,0,0,0.75);
}
.review {
 
  margin-top: 50px;
   overflow: hidden;
  position: relative;
}

.review-carousel {
 
  margin: auto;
  margin-left: 0px;
  white-space: nowrap;
  transition: all 1s;
   transition-timing-function: cubic-bezier(.17,.67,.83,.67);
}

.levo {
  margin-left: -800px;
}

.review-carousel .card {
  width: 300px;
  height: 300px;
  border: 1px solid gainsboro;
  display: inline-block;
  white-space: normal;
  vertical-align: top;
  padding: 20px;
  text-align: center;
}

.review-carousel .profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: auto;
  margin-bottom: 20px;
  background-color: gray;
  overflow: hidden;
}
.review-carousel .profile-img img {
  width: 100%;
}

.review-wrapper .arrow-right,
.review-wrapper .arrow-left {
  position: absolute;
  right: -100px;
  top: 100px;
  color: #940000;
  background-color: whitesmoke;
  border: 2px solid #940000;
  font-size: 80px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  z-index: 100;
}

.review-wrapper .arrow-left {
  left: -100px;
}

.review-wrapper .arrow-right:hover,
.review-wrapper .arrow-left:hover {
   color: white;
  background-color: #940000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
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
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}


.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    position: absolute;
    padding-top: 40px;
    transform: translateY(20px);
    opacity: 0;
}

</style>
