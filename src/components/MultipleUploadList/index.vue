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
              <span class="item-download" @click="handleDownload(items.url)">
                <i class="el-icon-download"></i>
              </span>
              <span class="item-delete">
                <i class="el-icon-delete"></i>
              </span>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  watchEffect
} from "vue";

export default {
  props:{
    BlogImg:{
      type: Array,
      required: []
    }
  },
  setup(props) {
    const dataList = reactive({
      ruleForm:{
        intellectualPropertyCertificate:props.BlogImg
      }
    })
    const handleDownload = (url)=>{
      window.open(url,'_blank')
    }
    watchEffect(()=>{
      dataList.ruleForm.intellectualPropertyCertificate = props.BlogImg;
    })
    return {
      dataList,
      handleDownload
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
        cursor: not-allowed;
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
