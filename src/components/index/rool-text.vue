<!--滚动文本-->
<template>
    <div class="rollbox">
        <div ref="ccc" class="ccc" @mouseover="stopScroll" @mouseout="startScroll"> 
            您有8条消息未查收！
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tit:"1321213",
            scrollW: 0, //记录悬停的位置
        }
    },
    mounted () {
        this.scroll()
    },
    destroyed () {
        clearInterval(this.setInter)
    },
    methods: {
        //鼠标悬停，停止滚动
        stopScroll () {
            var target = this.$refs.ccc;
            clearInterval(this.setInter)
        },
        //鼠标移开 ，接着滚动
        startScroll () {
            var target = this.$refs.ccc;
            /**
             * document.body.clientWidth 可视区域宽度
             * target.offsetLeft 元素距浏览器左边的距离
             * target.offsetWidth 元素本身的宽度
             */
            this.scrollW = document.body.clientWidth-target.offsetLeft-target.offsetWidth ; // 移开时记录向左移动的距离
            this.scroll()
        },
        scroll(){
            let target=this.$refs.ccc;
            let num=0;//存移动的距离
            // console.log(target.offsetWidth,'target.offsetWidth');
            if(this.scrollW>0){
                num=this.scrollW
            }
            this.setInter=setInterval(()=>{
               
                 num ++;
				    if(num >=  document.body.clientWidth-target.offsetWidth){
				        num = 0;
				    }
					target.style.right =  num +'px';
            },16)
            
        }
    }
}
</script>

<style scoped>
.rollbox{
    width: 100%;
    height: 100%;
    position: relative;
}
.ccc{
    height: 100%;
    font-size: 18px;
    color: rgb(234,160,3);
    position: absolute;
    right: 0;
    cursor: pointer;
    text-decoration:underline;
}
</style>
