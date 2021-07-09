<template>
  <div class="fixed-box-right">
    <div class="fixed-box-right-list">
      <div>
        <img class="fixed-box-right-list-img" src="" alt="">
      </div>
      <div class="fixed-box-right-list-text">在线咨询</div>
    </div>
    <div class="fixed-box-right-list">
      <div>
        <img class="fixed-box-right-list-img" src="" alt="">
      </div>
      <div class="fixed-box-right-list-text">微信咨询</div>
      <div class="fixed-box-right-list-absolute">
        <img class="fixed-box-right-list-img-weixin" src="" alt="">
      </div>
    </div>
    <div class="fixed-box-right-list">
      <div>
        <img class="fixed-box-right-list-img" src="" alt="">
      </div>
      <div class="fixed-box-right-list-text">联系电话</div>
      <div class="fixed-box-right-list-absolute-two">
        <div class="fixed-box-right-list-absolute-two-phone">祁经理：13855110531</div>
        <div>李经理：13965093375</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Suspension"
}
</script>

<style rel="stylesheet" lang="scss">
.fixed-box-right{
  position: fixed;
  top: 60%;
  right:27px;
  z-index: 999;
}
.fixed-box-right-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  margin-bottom: 3px;
  position: relative;
  height: 65px;
  width: 65px;
  font-size:12px;
  color:#ffffff;
  &:hover{
    background-color: #F1712E;
  }
  &:hover{
    .fixed-box-right-list-absolute{
      display: block;
    }
  }
  &:hover{
    .fixed-box-right-list-absolute-two{
      display: flex;
    }
  }
  .fixed-box-right-list-text{
    font-size:12px;
    color:#ffffff;
  }
  .fixed-box-right-list-img{
    width: 25px;
    vertical-align: middle;
    margin-bottom: 4px;
  }
  .fixed-box-right-list-absolute{
    position: absolute;
    display: none;
    right:65px;
    top: 0;
    .fixed-box-right-list-img-weixin{
      width: 114px;
      height:114px;
      vertical-align: middle;
      padding-right:8px;
    }
  }
  .fixed-box-right-list-absolute-two{
    position: absolute;
    right:65px;
    top: 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 188px;
    height: 72px;
    font-size:14px;
    display: none;
    color:#333333;
    background-color: #ffffff;
    box-shadow:0 2px 12px 0 rgba(0,0,0,0.1);
    .fixed-box-right-list-absolute-two-phone{
      margin-bottom:10px;
    }
  }

}
</style>
