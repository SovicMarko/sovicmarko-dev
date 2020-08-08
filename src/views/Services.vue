<template>
    <main>
     <h1><span v-if="!engleski">Usluge</span> <span v-else>Services</span></h1>

     <div v-bind:class="{baner : true, siva: prikazSive}">
        <div class="trougao"><div class="beo"></div></div>
        <div class="inner">
            <div  data-aos="fade-right" v-if="!engleski"> 
                <h2>Web dizajn</h2>
                <p>
                    Dizajn Web sajta prema Vašoj želji i potrebi, takav da odgovara svim vrstama uređaja i veličinama ekrana. 
                    U slučaju nedostatka vizije i ideje kako bi sajt trebalo da izgleda, tu odluku možete prepustiti i meni.
                    Pri tome su moguće izmene uz vaše sugestije sve dok ne dođemo do željenog rezultata.
                    Napravite prezentaciju svoje firme koja će privući klijente izgledom i unapredite svoje poslovanje.
                </p>
            </div>
            <div  data-aos="fade-right" v-else>
                <h2>Web design</h2>
                <p>
                    Website design according to your wishes and needs, such that it suits all types of devices and screen sizes. 
                    In case you lack a vision and an idea of what the site should look like, you can leave that decision to me. 
                    In doing so, changes are possible with your suggestions until we reach the desired result. 
                    Make a presentation of your company that will attract customers with its appearance and improve your business.
                </p>
            </div>
            <div class="from-left"> <img src="@/assets/Asset2.svg" data-aos-mirror=true data-aos="fade-left"> </div>
        </div>
        <div class="clearfix"></div>
     </div>

     <div class="baner">
        <div class="trougao">
            <div v-bind:class="{siv : prikazSive}"></div>
        </div>
        <div class="inner inverse">
            <div data-aos="fade-in" v-if="!engleski"> 
                <h2>Izrada baza podataka</h2>
                <p>
                    U slučaju da Vam je potreban kompleksniji sajt za potrebe e-trgovine, informisanja ili slično
                    koji se oslanja na baze podataka -
                    dobićete sajt koji je jednostavan za rukovanje,
                    na kome možete samostalno dodavati nove proizvode, usluge, obaveštenja ili informacije.
                    Obuka za manipulaciju sadržajem na sajtu je besplatna!
                </p>
            </div>
            <div data-aos="fade-in" v-else>
                <h2 >Databases menagement</h2>
                <p>
                    In case that you requre more complex website for the needs of e-commerce, customer service or similar 
                    project that depends database usage - you will get a site that is easy to handle,  where you can add new products, 
                    services, publish posts and information yourself. Website handling training is free of charge!
                </p>
            </div>
            
            <div class="from-right"> <img src="@/assets/Asset4.svg"  data-aos="fade-right"> </div>
        </div>
        <div class="clearfix"></div>
     </div>

     <div v-bind:class="{baner : true, siva: prikazSive}">
        <div class="trougao">
            <div class="beo"></div>
        </div>
        <div class="inner">
            <div data-aos="fade-in" v-if="!engleski">
                <h2>Optimizacija za pretrazivače</h2>
                <p>
                    Da bi Web sajt bio uspešan i zaista doprineo Vašem poslovanju, neophodno je da bude vidljiv i da ga
                    potencijalni klijenti mogu lako pronaći u slučaju pretrage usluga poput Vaših.
                    Zato uvek pri dizajnu sajta posebnu pažnju pridajem onim faktorima koji će povećati vidljivost sajta
                    i njegovo bolje rangiranje na pretraživačima kao što su google i drugi.
                </p>
        
            </div>

            <div data-aos="fade-in" v-else>
                <h2>Search Engine Optimization</h2>
                <p>
                    In order for a website to be successful and truly contribute to your business, 
                    it is essential that it ис visible and that potential customers can easily find it 
                    in the case that they are in the search for services that you provide. 
                    That is why I always pay special attention when designing a site to those factors  
                    that will increase the visibility of the site and its better ranking amoung search engines.
                </p>
            </div>
            <div class="from-left"> <img src="@/assets/Asset3.svg" data-aos="fade-left"> </div>
            
        </div>
        <div class="clearfix"></div>
     </div>
     <div class="baner">
        <div class="trougao">
            <div v-bind:class="{siv : prikazSive}"></div>
        </div>
        <div class="inner inverse">
          
            <div data-aos="fade-in" v-if="!engleski">
                <h2>Izrada chatbotova</h2>
                <p>
                    Chatbotovi su idelani pomoćnici sa kojima možete unaprediti svoje poslovanje. Oni predstavljaju besplatnu pomoć u poslu,
                    a pri tome doprinose da klijent na Vašem sajtu ima kvalitetnije iskustvo i lakše dođe do željenih informacija.
                    Uz moju pomoć možete kreirati chatbot koji će odgovarati Vašim potrebama. 
                    Nema potrebe za upošljavanjem operatera, priključite se revoluciji veštačke inteligencije!
                </p>
            </div>
            <div data-aos="fade-in" v-else>
                <h2>Chatbot building</h2>
                <p>
                    Chatbots are ideal helpers with which you can improve your business. 
                    They represent free help in business, and at the same time they contribute to 
                    the client having a better experience on your site and easier access to the desired 
                    information. With my help you can create a chatbot that will suit your needs. 
                    No need to hire an operator, join the artificial intelligence revolution!
                </p>
            </div>
            <div class="from-right"> <img src="@/assets/Asset1.svg" data-aos="fade-right"> </div>
        </div>
        <div class="clearfix"></div>
     </div>
      <div v-bind:class="{baner : true, siva: prikazSive}" id="casovi">
        <div class="trougao">
            <div class="beo"></div>
        </div>
        <div class="inner">
            <div data-aos="fade-in" v-if="!engleski">
                <h2>Časovi programiranja</h2>
                <p>
                    Želite i sami da se bavite programiranjem? Olakšajte sebi put do uspeha i uštedite vreme. Mnogobrojni tečajevi koji se 
                    danas nude vam mogu doneti sertifikat, ali u grupnom radu fokus nikad nije samo na Vama.
                    Da bi ste zaista stekli kvalitetno, za tržište relevantno znanje, neophodan Vam je i mentor koji će se starati da savladate 
                    sve ključne tehnologije načinom i tempom koji Vama odgovara. 
                    Ukoliko ste student i neophodna Vam je priprema za kolokvijum, ispit ili pomoć oko projekta, našli ste svog čoveka. 
                    Časove možemo održavati online ili uživo ukoliko ste sa teritorije grada Novog Sada.

                </p>
        
            </div>
            <div data-aos="fade-in" v-else>
                <h2 >Programming lessons</h2>
                <p>
                    Do you want to start coding yourself? Make it easier for to succeed and save your time. 
                    Numerous courses that are present today can bring you a certificate, but in group work 
                    the focus is never only on you. In order to really acquire quality, market-relevant 
                    knowledge, you also need a mentor who will take care about your progress. Learn all 
                    key technologies in a way and pace that suits you. If you are a student and you need 
                    to prepare for a test, exam or you need help with a project, you have found your man. 
                    Schedule online lesson today and meet me via Zoom or Skype!
                </p>
    
            </div>
            <div class="from-right"> <img src="@/assets/Asset5.svg" data-aos="fade-left"> </div>
        </div>
        <div class="clearfix"></div>
     </div>
     <br><br><br><br><br>
    </main>
   
</template>












<script>
    export default {
        name: "Services",
        props: {
            engleski: Boolean
        },
        data: function() {
            return {
                prikazSive : false
            }
        },
        methods: {
            prikaziSivu : function() {
                let self = this;
                setInterval(function() {
                    self.prikazSive = true;
                }, 1000)
            }
        },
        created(){
            this.prikaziSivu();
        }
    }
</script>











<style scoped>
    * {
       
    }


    h1 {
        text-align: center;
    }

    .baner {
        position: relative;
        transition: all 1s;
    }

    .trougao {
        position: absolute;
        top: 0px;
        width: 100%;
    }

    .trougao div {
      margin: auto;
      border-color: white;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      transition: border-color 1s;
    }

    .beo {
        border-top: 50px solid white;
    }
    .siv {
        border-top: 50px solid #f3f3f3 !important;
    }

    .baner .inner {
        width: 1170px;
        margin: auto;
    }

    .baner .inner div {
        text-align: center;
        float: left;
        width: 50%;
        padding: 20px;
        vertical-align: middle;
    }

    .baner .inverse div {
         float: right;
    }

    .clearfix {
        float: none;
        clear: both;
    }

    .baner .inner div img {
        width: 80%;
        margin: 25px;
    }

    .siva {
        background-color: #f3f3f3;
    }

  

    .from-right .before-enter {
        opacity: 0;
        margin-left: 100px;
        transition: all 1.5s ease
    }

    .from-left .before-enter {
        opacity: 0;
        margin-left: -100px ;
        transition: all 1.5s ease
    }

    .from-right .enter,  .from-left .enter{
        opacity: 1;
        margin-left: 0;
    }

    @keyframes text-animacija {
        from {
            opacity: 0;
        }
        to {
            opacity: 1
        }
    }



    @media only screen and (max-width: 1170px) {
        .baner .inner {
            width: 100%;
        }
    }


    @media only screen and (max-width: 840px) {
         .baner .inner div {
             display: block;
             width: 100%;
             float:none;
         }

         .inverse {
             float:none;
         }

        .trougao div {
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
        }

        .beo {
            border-top: 25px solid white;
        }
        .siv {
            border-top: 25px solid #f3f3f3;
        }
     }
    
</style>