<template>
  <main>
    <h1 v-if="engleski">About Me</h1>
    <h1 v-else>O meni</h1>
   
    <div class="opis">
        <p v-if="engleski">
          Information technology engineer.<br> 
          I have been programming since 2016, as a freelancer at first.<br> 
          In addition to website development, I equally enjoy continuous learning 
          of new technologies and improvement of <br>my vast knowledge,
          as well as teaching and mentoring.
        </p>
        <p v-else>
          Inženjer informacionih tehnologija.<br> Programiranjem se bavim od 2016. 
          godine, najpre u freelance projektima.<br>
          Pored izrade web sajtova, podjednako zadovoljstvo mi 
          predstavlja kako stalno učenje novih tehnologija i usavršavanje,<br>
          tako i prenošenje znanja i podučavanje.
        </p>


        <p v-if="engleski">
          In my spare time I enjoy movies, books, series and video games. <br>
          I live and work in Novi Sad, Serbia.
        </p>
        <p v-else>
          U slobodno vreme uživam u filmovima, knjigama, serijama i igrama.<br>
          Živim i radim u Novom Sadu.
        </p>
   
    </div>
    <br><br>
    <h2 v-if="engleski">Technologies and tools that I use</h2>
    <h2 v-else>Tehnologije i alati koje koristim</h2>
   
    <div class="slike">
      <div class="slike-front">
        <img class="s1" src="@/assets/html.png">
        <img class="s2" src="@/assets/css.png">
        <img class="s3" src="@/assets/JavaScript.png">
        <img class="s4" src="@/assets/vue.png">
        <div class="spliter"></div>
        <img class="s5" src="@/assets/jQuery.png">
        <img class="s6" src="@/assets/bootstrap.png">
        <img class="s7" src="@/assets/photoshop.png">
      </div>
      <div class="slike-back">
        <img class="s8" src="@/assets/nodejs.png">
        <img class="s9" src="@/assets/CSharp.png">
        <img class="s10" src="@/assets/Mysql.png">
        <img class="s11" src="@/assets/php.png">
        <div class="spliter"></div>
        <img class="s12" src="@/assets/wordpress.png">
        <img class="s13" src="@/assets/firebase.png">
        <img class="s14" src="@/assets/github.png">
        <img class="s15" src="@/assets/laravel.png">
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    // HelloWorld
  },
  props: {
    engleski: Boolean
  },
  data: function(){
    return {
      prikazano : false
    }
  },
  methods: {
    prikazi : function(){
      setTimeout(function(){
            this.prikazano = true;
      },2000);
    }
  },
  created: function () {
    this.prikazi();
  }
}
</script>


<style scoped>
* {
  
}
  h1, h2 {
    text-align:center;
  }
  .opis {
    text-align: center;
  
    margin: auto;
  }
  p {
    padding: 10px ;
    text-align: center;
    font-size: 20px;
  }
  .slike {
    text-align: center;
  }
  .slike img {
    max-width: 100px;
    vertical-align: middle;
    margin: 10px;
  }

  .slike {
    overflow: hidden;
    animation: animacija-front 4s;
  }

  .spliter {
    display: none;
  }

  @keyframes animacija-front {
    0% {
      height : 0px;
    }
    50% {
      height: 300px;
    }
    100% {
      height: auto;
    }
  }

  
@media only screen and (max-width: 1070px) {
  .slike img {
    max-width: 80px;
  }
}
@media only screen and (max-width: 840px) {
   .slike img {
    max-width: 60px;
  }
  
}
@media only screen and (max-width: 680px) {
  .spliter {
    display: block;
  }
  
}




</style>
