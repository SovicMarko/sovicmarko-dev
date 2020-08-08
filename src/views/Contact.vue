<template>
<main>
  <h1 v-if="engleski">Contact</h1>
  <h1 v-else>Kontakt</h1>
  <form v-on:submit="proveraForme" action="https://formspree.io/myyprgeq" method="POST">
   
    <div>
         <transition name="slide-fade">
            <p v-if="greska.ime" class="greska">{{ greska.ime }}</p>
            <label for="ime" v-else>
                <span v-if="engleski">Enter Your name:</span>
                <span v-else>Unesite Vaše ime:</span>
            </label>
         </transition>
        <input type="text" name="ime" id="ime" v-model="ime"
               v-on:change="resetGreske" v-on:click="greska.ime = false" 
               v-bind:class="{'greska-input' : greska.ime}">
    </div>
   
    <div>
        <transition name="slide-fade">
            <p v-if="greska.email" class="greska">{{ greska.email }}</p>
            <label for="email" v-else>
                <span v-if="engleski">Enter Your e-mail adress:</span>
                <span v-else>Unesite Vašu e-mail adresu:</span>
            </label>
        </transition>
        <input type="text" name="email_adresa" v-model="email" 
               v-on:change="resetGreske" v-on:click="greska.email = false"
               v-bind:class="{'greska-input' : greska.email}">
    </div>
    <div>
         <transition name="slide-fade">
            <p v-if="greska.poruka" class="greska">{{ greska.poruka }}</p>
            <label for="poruka" v-else>
                <span v-if="engleski">Enter Your message:</span>
                <span v-else>Unesite Vašu poruku:</span>
            </label>
        </transition>
        <textarea name="poruka" v-model="poruka" 
                  v-on:click="greska.poruka = false"
                  v-bind:class="{'greska-input' : greska.poruka}"></textarea>
    </div>
    
    <input type="submit" value="Send" v-if="engleski">
    <input type="submit" value="Pošalji" v-else>
  </form>
</main>
  
</template>

<script>

export default {
    name: "Contact",
    props : {
        engleski : Boolean
    },
    data: function(){
        return {
            greska: {
                ime : false,
                email : false,
                poruka : false
            },
            ime: "",
            email: "",
            poruka: ""
        }
    },
    methods: {
        proveraForme: function(e){
            
            if (this.ime === "") {
                this.greska.ime = this.engleski? "Name is required" :"Ime je obavezno za unos";
                e.preventDefault();
            } else if (this.ime.length > 15) {
                this.greska.ime = this.engleski? "Name cannot contain more than 15 characters" : "Ime ne moze sadrzati vise od 15 karaktera";
                e.preventDefault();
            }

            if (this.email === "") {
                this.greska.email = this.engleski? "Email is required" : "Email je obavezan za unos";
                 e.preventDefault();
            }
            else if (!this.pravilanEmail(this.email)) {
                this.greska.email = this.engleski? "Email adress is not valid" : "Email adresa nije pravilno uneta";
                 e.preventDefault();
            }

            if (this.poruka === "") {
                this.greska.poruka = this.engleski? "Message is required" : "Poruka nije uneta";
                e.preventDefault();
            }
        },
        pravilanEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        resetGreske: function () {
            this.greska = {
                ime : false,
                email : false,
                message : false
            }
        }
        
    },
    watch: {
            engleski :function() {
                this.resetGreske();
            }
        }

}
</script>

<style scoped>
    * {
        /* outline: 1px dashed green */
    }

    h1 {
        text-align: center;
    }

    form {
        width: 800px;
        margin: auto;
    }
    div {
        padding-top: 20px;
        position: relative;
        /* margin: 20px; */
        margin-bottom: 20px;
    }

    label {
        display: block;
        /* margin-top: 20px; */
        position: absolute;
        top: 0px;
    }
    .greska {
        color : darkred;
        position: absolute;
        top: 0px;
        left: 0px;
        padding-top: 0px;
        animation: animacija-greska 1s;
        margin-bottom: 0px;
        margin-top: 1px;
        padding-top: 0px;
        /* font-weight: bold; */
    }

    .greska-input {
        border: 1px solid #940000 !important;
    }



    /* @keyframes animacija-greska {
        from {
            margin-left: 20px;
        } to {
            margin-left: 1px;
        }
    } */
    textarea {
        width: 100%;
        height: 300px;
        resize: none;
    }
    input {
        width: 100%;
        height: 40px;
        transition: all 0.5s;
     
        /* margin-top: 30px; */
       
    }

    input[type="text"], textarea {
           border: 1px solid gray;
            padding: 20px;
    }
    textarea, input {
        margin-top: 10px;
       
    }
    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
    }
    li {

        color: white;
        font-weight: bold;
        background-color: #940000;
        padding: 8px 10px;
        margin: 0px 0px 15px 0px;
    }

    input[type="submit"] {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        text-transform: uppercase;
        cursor: pointer;
    }
    @media only screen and (max-width: 860px) {
        form {
            width: 90%;
        }
    }


    .slide-fade-enter-active {
        display: inline;
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
       
        }
    .slide-fade-leave-active {
         transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(50px);
        opacity: 0;
    }
</style>