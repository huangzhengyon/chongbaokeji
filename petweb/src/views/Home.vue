<template>
  <div class="home">
      <nav v-if="showNav" :class="index > 1 ? 'deep-nav':''">
        <div class="logo-wrap">
          <img src="~@/assets/icon/favicon.png" alt="logo">
          <span>宠保科技</span>
        </div>
        <div class="link-wrap">
          <ul :class="index > 1 ? 'deep-ul':''">
            <li :class="index == 1 ? 'active':''" @click="scrollTo(0,300)"><span>首页</span></li>
            <li :class="index == 2 ? 'active':''" @click="scrollTo(descTop,300)"><span>公司介绍</span></li>
            <li :class="index == 3 ? 'active':''" @click="scrollTo(petTop,300)"><span>宠物保险</span></li>
            <li :class="index == 4 ? 'active':''" @click="scrollTo(riderTop,300)"><span>骑士保险</span></li>
            <li :class="index == 5 ? 'active':''" @click="scrollTo(riderTop+200,300)"><span>联系我们</span></li>
          </ul>
        </div>
      </nav>
      <swiper id="swiper" ref='swiper' class="swiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for="(item,index) in list" :key="index">
          <img :src="item.imgUrl" />
        </swiper-slide>
      </swiper>
      <div id="desc" ref='desc' class="section">
        <div class="title">
          <h1>公司介绍<span>mUs</span></h1>
        </div>
        <div class="content">
          <div class="logo-box">
            <img src="~@/assets/icon/company-bg.png" alt="">
          </div>
          <div class="desc-box">
            <div class="desc-title">宠保科技</div>
            <div class="desc-main">
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>宠保科技成立于2018年，由一批多年从事互联网保险行业的90后联合创立，致力于通过科技互联网方式优化保险投保与理赔流程，“让保险回归服务”，为个人消费者和企业提供专属的保险服务方案与个性化的保险体验。</span>
                </div>
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>宠保科技包括三大业务模块，宠物医疗保险（宠小侠），知识产权保险（磐震信息）以及外卖骑士保险（李小锤）。</span>
                </div>
              <div class="main-item icon-box">
                <img src="~@/assets/icon/logo-cxx.png" />
                <img src="~@/assets/icon/logo-pz.png" />
                <img src="~@/assets/icon/logo-lxc.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pet" ref='pet' class="section">
        <div class="title">
          <h1>宠物保险<span>Pet Insurance</span></h1>
        </div>
        <div class="content">
          <div class="desc-box">
            <div class="desc-title">宠小侠</div>
            <div class="desc-main">
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>宠小侠是宠保科技旗下专注于宠物健康保险的子品牌，为挑选市场上最具性价比的宠物健康保险产品，全程提供一对一的顾问服务。</span>
              </div>
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>现已达成与多家保险公司合作，为宠物主提供丰富的产品选择，包括平安好宠、太平洋宠城、安心无忧等主流宠物健康保险产品。</span>
              </div>
              <div class="main-item icon-box">
                <img src="~@/assets/icon/logo-zgpa.png" />
                <img src="~@/assets/icon/logo-zgrb.png" />
                <img src="~@/assets/icon/logo-tpy.png" />
                <img src="~@/assets/icon/logo-zgdd.png" />
                <img src="~@/assets/icon/logo-Allianz.png" />
              </div>
            </div>
          </div>
          <div class="logo-box">
            <img src="~@/assets/icon/ewm-cxx.png" alt="">
          </div>
        </div>
      </div>
      <div id="rider" ref='rider' class="section">
        <div class="title">
          <h1>骑士保险<span>Rider Insurance</span></h1>
        </div>
        
        <div class="content">
          <div class="logo-box">
            <img src="~@/assets/icon/ewm-lxc.png" alt="">
          </div>
          <div class="desc-box">
            <div class="desc-title">李小锤骑士保险综合服务</div>
            <div class="desc-main">
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>李小锤骑士保险综合服务，是由广州宠保科技服务有限公司推出的，面向外卖配送加盟商的保险TPA服务。</span>
              </div>
              <div class="main-item">
                <img class="statu" src="~@/assets/icon/gou.png" />
                <span>服务内容包括小额补充保险、超额补充保险、理赔款垫付、线上线下理赔服务、法律咨询、保险管理系统与诉讼服务。现已服务来自美团、饿了么、九毛九、点我达等平台骑士数十万人。</span>
              </div>
              <div class="main-item icon-box">
                <img src="~@/assets/icon/logo-jmj.png" />
                <img src="~@/assets/icon/logo-mt.png" />
                <img src="~@/assets/icon/logo-dwd.png" />
                <img src="~@/assets/icon/logo-nx.png" />
                <img src="~@/assets/icon/logo-elm.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" ref='contact' class="footer">
        <div class="section">
          <div class="title">
            <h1>联系我们<span>Contact Us</span></h1>
          </div>
          <div class="content">
            <div class="phone item">
              <img src="~@/assets/icon/phone.png" alt="电话logo"/>
              <span>400-6766664</span>
            </div>
            <div class="address item">
              <img src="~@/assets/icon/address.png" alt="地址logo">
              <span>天河区华景路73号豪门阁302创智港A09室</span>
            </div>
          </div>
          <div class="records">
            <span>Copyright © 2019-2023 宠保科技 粤ICP备14006821号</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import utils from '../utils'
  import _ from 'lodash'

  export default {
    name: 'home',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        list:[
          {
            imgUrl: require('../assets/icon/banner1.png')
          },
          {
            imgUrl: require('../assets/icon/banner2.png')
          }
        ],
        swiperOption: {
          // some swiper options/callbacks
          autoplay:true
        },
        descTop:null,//公司介绍到顶部的距离
        petTop:null,//宠保到页面顶部的距离
        riderTop:null,//骑保到顶部的距离
        contactTop:null,//联系我们到顶部距离
        index:1,//所在位置
        showNav:false,//
      }
    },
    mounted() {
      let vm = this
      window.addEventListener('scroll',this.getScroll);

      //计算初始化状态
      let s = setTimeout(() => {
        let swiperHeight = document.querySelector('#swiper').clientHeight ;
        let descHeight = document.querySelector('#desc').clientHeight ;
        let petHeight = document.querySelector('#pet').clientHeight ;
        let riderHeight = document.querySelector('#rider').clientHeight ;
        let contactHeight = document.querySelector('#contact').clientHeight;

        vm.descTop = swiperHeight;
        vm.petTop = swiperHeight + descHeight;
        vm.riderTop = vm.petTop + petHeight;

        //当前位置
        vm.getScroll();
        vm.showNav = true ;
        clearTimeout(s);
      },1000)

    },
    destroyed(){
      window.removeEventListener('scroll', this.getScroll);
    },
    methods: {
      getScroll() {
        let vm = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if(!vm.descTop)return;
        if(scrollTop >= 0 ) {
          vm.index = 1
        } 
        if(scrollTop >= (vm.descTop - 60 )) {
          vm.index = 2
        } 
        if(scrollTop >= vm.petTop ) {
          vm.index = 3
        } 
        if(scrollTop >= vm.riderTop) {
          vm.index = 4
        } 
        if(scrollTop > vm.riderTop + 160) {
          vm.index = 5
        }
      },
      
      scrollTo(y) {
        // 获取目标的 offsetTop
        // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
        const targetOffsetTop = y
        // 获取当前 offsetTop
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
        const STEP = 50
        // 判断是往下滑还是往上滑
        if (scrollTop > targetOffsetTop) {
          // 往上滑
          smoothUp()
        } else {
          // 往下滑
          smoothDown()
        }
        // 定义往下滑函数
        function smoothDown() {
          // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
          if (scrollTop < targetOffsetTop) {
            // 如果和目标相差距离大于等于 STEP 就跳 STEP
            // 否则直接跳到目标点，目标是为了防止跳过了。
            if (targetOffsetTop - scrollTop >= STEP) {
              scrollTop += STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
            // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
            requestAnimationFrame(smoothDown)
          }
        }
        // 定义往上滑函数
        function smoothUp() {
          if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
              scrollTop -= STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
          }
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.home {
  min-width: 1150px;
  position: relative;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    z-index: 3;
    .logo-wrap {
      color: #fff;
      font-size: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 33px;
      }
      span {
        margin-left: 6px;
      }
    }
    .link-wrap {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          list-style: none;
          padding: 20px 0;
          position: relative;
          span {
            color: #fff;
            cursor: pointer;
            font-size: 18px;
          }
          &.active::after {
            content:'';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 10px;
            height: 3px;
            background: #fff;
            border-radius: 1px;
          }
          & + li {
            margin-left: 30px;
          }
        }
      }
      .deep-ul {
        li {
          span {
            color: #333;
          }
          &.active {
            span {
              color: orange;
            }
            &::after {
              content:'';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 10px;
              height: 3px;
              background: orange;
              border-radius: 1px;
            }
          }
        }
      }
    }
  }
  .deep-nav {
    background: #fff;
    .logo-wrap {
      color: #666;
    }
  }
  .swiper {
    
    .swiper-item {
      img {
        width: 100%;
      }
    }
  }
  .section {
    width: 100%;
    margin: 0 auto;
    padding: 65px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    
    .title {
      width: 100%;
      padding-bottom: 60px;
      h1 {
        font-size: 34px;
        color: #000;
        text-align: left;
        span {
          font-size: 24px;
          font-weight: 400;
          margin-left: 20px;
          display: inline-block;
        }
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      .desc-box {
        flex: 2;
        .desc-title {
          font-size: 26px;
          color: #3d3d3d;
          position: relative;
          margin-bottom: 52px;
          &::after {
            content: "";
            width: 20px;
            height: 4px;
            background: #ed7d31;
            display: block;
            position: absolute;
            left: 0;
            bottom: -20px;
          }
        }
        .desc-main {
          height: 255px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          margin-bottom: 6px;
          .main-item {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            .statu {
              width: 14px;
              height: 14px;
              margin-top: 4px;
              margin-right: 8px;
            }
            span {
              text-align: left;
              font-size: 16px;
              color: #666;
            }
          }
          .icon-box {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            img {
              width: 16%;
            }
          }
        }
      }
      .logo-box {
        flex: 1;
      }
    }
  }
  .footer {
    background: #303848;
    color: #fff;
    .section {
      padding-bottom: 10px;
    }
    .title {
      padding-bottom: 30px;
      h1 {
        color: #fff;
      }
    }
    .content {
      border-bottom: solid 1px #666;
      padding-bottom: 14px;
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 16px;
          margin-right: 10px;
        }
      }
    }
    .records {
      padding: 10px 0;
      color: #656975;
    }
  }
  #pet {
    background: #fafafa;
    .logo-box {
      display: flex;
      justify-content: flex-end;
    }
  }
  #desc {
    .title {
      padding-bottom: 30px;
    }
    .desc-box {
      flex:1;
      margin-bottom: 30px;
    }
    .logo-box {
      img {
        margin-right: 145px;
      }
    }
    .icon-box {
      justify-content: space-around;
      img {
        width: 80px;
      }
    }
  }
}
</style>
