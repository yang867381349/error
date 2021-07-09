<template>
  <div style="max-width: 100%;">
    <div class="item-thumbnail-box">
      <div class="item-thumbnail-flex" v-for="(items,k) in dataList.ruleForm.intellectualPropertyCertificate" :key="k">
        <el-image class="item-thumbnail" :src="items.url" alt="">
          <template #error>
            <div class="image-slot">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-pdf"></use>
              </svg>
            </div>
          </template>
        </el-image>
        <div class="item-box">
            <span class="item-actions">
              <span class="item-preview" @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span class="item-download" @click="handleDownload(items.url)">
                <i class="el-icon-download"></i>
              </span>
              <span class="item-delete" @click="handleAvatarRemoves(k)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
        </div>
      </div>
      <el-upload
          class="avatar-uploader"
          :action="dataList.url"
          list-type="picture-card"
          :multiple="true"
          :show-file-list="false"
          :headers="{
                  token:dataList.token
                }"
          :on-success="handleAvatarSuccesss"
          :before-upload="beforeAvatarUploads"
      >
        <template #default>
          <i class="el-icon-plus"></i>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<script>
import {
  reactive, watchEffect
} from "vue";
import {ElMessage,ElNotification} from "element-plus";

export default {
  props:{
    BlogImg:{
      type: Array,
      required: []
    }
  },
  setup(props,context) {
    const dataList = reactive({
      url: import.meta.env.VITE__UploadImagesURL,
      token: localStorage.getItem('token'),
      ruleForm:{
        intellectualPropertyCertificate:props.BlogImg
      }
    })
    watchEffect(()=>{
      dataList.ruleForm.intellectualPropertyCertificate = props.BlogImg;
    })
    const handleAvatarSuccesss = (response) => {
      context.emit("handleSuccess",response)
    }
    const handleAvatarRemoves = (k) => {
      context.emit("handleRemove",k)
    }
    const handleDownload = (url)=>{
      console.log(url)
      window.open(url,'_blank')
    }
    const beforeAvatarUploads = (file) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (['image/png','image/jpeg','application/pdf'].indexOf(file.type) < 0) {
        ElNotification({
          title: '文件类型错误',
          message: '上传图片只能是 PNG JPE PDF 格式!',
          type: 'error'
        });
      }
      if (!isLt2M) {
        ElMessage.warning({
          message: '上传图片大小不能超过 2MB!',
          type: 'warning'
        });
      }
      return isLt2M;
    }
    return {
      dataList,
      handleAvatarSuccesss,
      beforeAvatarUploads,
      handleDownload,
      handleAvatarRemoves
    }
  }
}
</script>

<style rel="stylesheet" lang="scss" scoped>
.el-form-item{
  display: block;
}
.avatar-uploader{
  margin:5px;
}
.item-thumbnail-box{
  display: flex;
  flex-wrap:wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  .item-thumbnail-flex{
    width: 148px;
    height: 148px;
    margin:5px 5px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    &:hover{
      .item-box{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        display: flex;
      }
    }
    .item-box{
      position: absolute;
      display: none;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0);

      align-items: center;
      align-content: center;
      justify-content: center;
      .item-preview{
        color: #f8f8f8;
        font-size: 24px;
        margin:0 5px;
        cursor: not-allowed;
      }
      .item-download{
        color: #f8f8f8;
        font-size: 24px;
        margin:0 5px;
        cursor: pointer;
      }
      .item-delete{
        color: #f8f8f8;
        font-size: 24px;
        margin:0 5px;
        cursor: pointer;
      }
    }
    .item-thumbnail{
      width: 148px;
      height: 148px;
      border-radius: 10px;
      .image-slot{
        background-color: #dddddd;
        .svg-icon{
          width: 148px;
          height: 148px;
        }
      }
    }
  }
}
</style>
