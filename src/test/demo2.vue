<template>
    <div class="marquee_box" ref="boxsize">
       <p
         class="marquee_text"
         ref="boxtext"
         style="padding:6px;margin-top:5px;letter-spacing:2px;font-size:14px;"
       >{{activitySubjectShowData}}</p>
     </div>
</template>
<script>
// 每隔200毫秒滚动的距离
let top = 0;
// 累计共滚动的距离
let countTop = 0;
export default {
  data() {
    return {
        personList:'开多久富商大贾还个个祭祀佛斯蒂芬斯蒂芬个结果ID是否够低藕粉色估计为如风ID是否够VOA恶俗野供货',
        timer: "",
    }
  },
  mounted() {
      this.timer = setInterval(this.scroll, 200);
  },
  created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
	  scroll() {
	      // 每次需要滚动的高度
	      top -= 2;
	      // 把每次滚动的高度加起来，如等于自身的高度就判断滚动完毕
	      countTop = countTop + 2;
	      // 获取需要滚动的内容的高度,转为数字
	      let num = parseInt(window.getComputedStyle(this.$refs.boxtext).height);
	      // 滚动的大小
	      this.$refs.boxtext.style.marginTop = top + "px";
	      // 如滚动的距离大于等于文本自身的高度，则重新开始滚动，这样一直循环
	      if (countTop >= num) {
	        top = 0;
	        countTop = 0;
	        this.$refs.boxtext.style.marginTop = 0;
	      }
      },
  },
   destroyed() {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<style scoped lang='less'>
.marquee_box {
        position: relative;
        // display: block;
        width: 100%;
        height: 86%;
        overflow: hidden;
        .inner-container2 {
          transition: all 1s;
          margin-top: -30px;
          animation: myMove 5s linear infinite;
          animation-fill-mode: forwards;
          vertical-align: bottom;
          display: table-cell;
          background-color: red;
        }
        .marquee_list {
          display: block;
          width: 100%;
          li {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            list-style-type: none;
            .scroe {
              width: 33%;
              float: left;
              text-align: center;
            }
          }
        }
        .marquee_top {
          transition: all 1s;
          margin-top: -30px;
        }
        .inner-container {
          animation: myMove 5s linear infinite;
          animation-fill-mode: forwards;
          vertical-align: bottom;
          display: table-cell;
          background-color: red;
        }
      }

      .mapEchartBox,
      .mapTableBox {
        width: 100%;
        height: 87%;
        overflow: hidden;
        overflow-y: auto;
      }
      .mapTableBox {
        overflow: auto;
        line-height: 28px;
        font-size: 12px;
        // color: #eaeaea;
        color: #0da9f1;
        .title {
          width: 80px;
          padding-right: 10px;
          text-align: right;
          float: left;
        }
        .content {
          width: calc(~"100% - 80px");
          line-height: 28px;
          padding: 0 10px 0 0;
          float: left;
        }
      }
</style>
