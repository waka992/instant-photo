<template>
  <div class="home">
    <!-- title -->
    <div class="header">
      <mt-header fixed title="标题">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!-- search interface -->
    <!-- <mt-search v-model="search"></mt-search> -->
    <div class="content">
      <ul class="list">
        <li v-for="(lib, index) in liarray" :key="index">
          <div class="container">
            <img src="~assets/logo.png" alt="">
            <p>2018-09-14</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>





<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

@Component({
  components: {}
})
export default class Home extends Vue {
  protected title = "";
  protected content = "";
  protected html = "";
  protected search = "";
  protected liarray = [
    {
      name: 1
    },
    {
      name: 2
    },
    {
      name: 3
    }
  ];

  protected mounted() {
    this.getList();
  }

  protected getList() {
    axios
      .get("http://localhost:3000/api/test")
      .then((data: any) => {
        console.log("----data", data);
        if (data.code === 200) {
          let html = "",
            list = data.result;
          for (let i = 0; i < list.length; i++) {
            html += `<div>这是第${i}条数据，${list[i].title}内容是${
              list[i].content
            }</div>`;
          }
          this.html = html;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  protected askData() {
    axios
      .post("http://localhost:3000/api/addtest", {
        title: this.title,
        content: this.content
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>




<style lang="scss" scoped>
.home {
  // header
  .header {
    height: 40px;
  }

  // content list
  .list {
    width: 100%;

    & > li {
      float: left;
      width: 50%;
      height: 200px;
      cursor: pointer;

      .container {
        img {
          height: 120px;
          width: 120px;
        }
      }
    }
  }
}
</style>
