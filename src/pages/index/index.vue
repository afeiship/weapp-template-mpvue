<template>
  <div class="container">
    <button @click="showNx">Show NX</button>
    <div class="blank-20"/>
    <div class="cRed tc row row-center userinfo" @click="bindViewTap">
      <div class="col">
        <img class="bdr-gold circle" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        </div>
      <div class="col">
        <img class="bdr-gold circle" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        </div>
      <div class="col">
        <img class="bdr-gold circle" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        </div>
    </div>

    <div class="rel actions" style="height:200px; width:100%;">
      <button class="dib mr20" @click="fetch">HTTP</button>
      <button class="dib mr20">BTN1</button>
      <button class="dib mr20">BTN2</button>
      <button class="dib mr20">BTN2</button>
      <button class="dib mr20">BTN2</button>
      <button class="dib abs r0 b0">BTN3</button>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
  </div>
</template>

<script>
import card from "#/views/card";
import {$api, $store, $image} from '#';
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {}
    };
  },

  components: {
    card
  },

  methods: {
    fetch(){
      console.log('fetch!');
      $api.login({
        username:'admin',
        password:'123123'
      }).then(resp=>{
        $store.set('login', resp);
        const { login } = $store.gets();
        console.log(login);
      });
    },
    showNx() {
      const { VERSION } = nx;
      console.log(nx, VERSION, $image.toImg);
      console.log('IMG_URL:=>', $image.toImg('xxx.jpg'))
    },
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};

</script>

<style lang="scss">
@import './index.scss';
</style>
