<template>
    <div class="show-page">
        <div class="header">
            <mt-header fixed :title="title">
                <router-link to="/" slot="left">
                    <mt-button icon="back" v-show="!showDetail">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="genral" v-show="!showDetail">
            <ul class="clearfix">
                <li class="pics-room" v-for="(pic, index) in picturesData" :key="index">
                    <img src="~assets/logo.png" alt="" @click="changeSwiper(index)">
                </li>
            </ul>
        </div>
        <div class="swipe-component" v-show="showDetail">
            <i class="close" @click="showDetail = false">X</i>
            <swiper :options="swiperOption" class="gallery-top" ref="swiperTop">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    <img :src="slide" alt="">123
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
            </swiper>
        </div>
    </div>
</template>





<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Indicator } from "mint-ui";

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Show extends Vue {
  protected title = "20180909我的天";
  protected showDetail = false;
  protected picturesData = [1, 2, 3, 4, 5];
  protected swiperOption = {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    controller: true,
    zoom: true
  };
  protected swiperOptionThumbs = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true
  };
  protected swiperSlides = [
    "~assets/logo.png",
    "~assets/logo.png",
    "~assets/logo.png",
    "~assets/logo.png",
    "~assets/logo.png"
  ];

  protected mounted() {
    this.getData();
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }

  // get pictures
  protected getData() {}

  // change swiper
  protected changeSwiper(index: any) {
    this.showDetail = true;
  }
}
</script>





<style lang="scss" scoped>
// component
.show-page {
  width: 100%;
  height: 100%;
}
.genral,
.swipe-component {
  width: 100%;
  height: calc(100% - 40px);
}
// genral view
.genral {
  .pics-room {
    float: left;
    width: 50%;
    padding: 5px;
    min-height: 200px;
    background-color: #fff;

    img {
      width: 100%;
    }
  }
}
// swipe
.swipe-component {
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);

  .swiper-container {
    position: absolute;
    background-color: #fff;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image: url("~assets/logo.png");
    }
    &.slide-2 {
      background-image: url("~assets/logo.png");
    }
    &.slide-3 {
      background-image: url("~assets/logo.png");
    }
    &.slide-4 {
      background-image: url("~assets/logo.png");
    }
    &.slide-5 {
      background-image: url("~assets/logo.png");
    }
  }
  .gallery-top {
    height: 80% !important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
  // close
  .close {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    top: 10px;
    right: 10px;
    font-weight: 900;
  }
}
</style>
