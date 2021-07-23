<template>
  <div>
    <!--    <el-page-header @back="goBack" content="news">-->
    <!--    </el-page-header>-->
    <div class="index-top">this is news</div>
    <div id="aliyun-video-editor" style="height:700px"></div> // 您可以根据需要改变container高度

  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goBack() {
      console.log('go back')
      this.$router.go(-1)
    }
  },
  mounted() {
    window.AliyunVideoEditor.init({
      container: document.getElementById('aliyun-video-editor'),
      locale: 'zh-CN',
      useDynamicSrc: true
    })
  }
}
</script>

<style scoped>
.index-top {
  color: #409EFF;
  /*margin-top: 20%;*/
}
</style>
