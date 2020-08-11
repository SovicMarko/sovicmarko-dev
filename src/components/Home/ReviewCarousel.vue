<template>
  <div class="review-section">
    <div class="review-wrapper">
      <transition name="fade">
        <div v-if="levo" class="arrow-left" v-on:click="levo=false">&#x3C;</div>
      </transition>

      <div class="review">
        <div v-bind:class="{'review-carousel':true, levo:levo}">
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Jelena</b>
            </div>
          </div>
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-1/53110852_2762502240640576_5438115430726107136_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=nrgyQ0vB1nMAX93edBA&_nc_ht=scontent.fbeg9-1.fna&oh=835c00f36a58ff8999dec07e3bf5194b&oe=5F511D50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Aleksandar</b>
            </div>
          </div>
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Jelena</b>
            </div>
          </div>
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Jelena</b>
            </div>
          </div>
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-9/p960x960/79361161_2839404809432492_4613519299447881728_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=FkQWpbO0rrIAX_VvY3R&_nc_ht=scontent.fbeg9-1.fna&_nc_tp=6&oh=1b7139c204b1e3a3e8c9c35b3e63b268&oe=5F4EAE50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Jelena</b>
            </div>
          </div>
          <div class="card">
            <div class="profile-img">
              <img
                src="https://scontent.fbeg9-1.fna.fbcdn.net/v/t1.0-1/53110852_2762502240640576_5438115430726107136_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=nrgyQ0vB1nMAX93edBA&_nc_ht=scontent.fbeg9-1.fna&oh=835c00f36a58ff8999dec07e3bf5194b&oe=5F511D50"
              />
            </div>
            <div class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              <b>Jelena</b>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="!levo" class="arrow-right" v-on:click="levo=true">&#x3E;</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      levo: false,
    };
  },
};
</script>

<style scoped>
.review-section {
  background-color: whitesmoke;
}

.review-wrapper {
  position: relative;
  /* outline: 1px solid black; */
  width: 1000px;
  margin: auto;
  -webkit-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -3px rgba(0, 0, 0, 0.75);
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
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
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
</style>