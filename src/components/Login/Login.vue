<template>
  <div class="el-dialog-box-z-index">
    <el-dialog
        v-model="dataList.dialogVisible"
        @close="dowsClose"
        custom-class="el-dialog-box-z-index-box"
        :modal="false"
        width="520px">
      <img class="el-dialog-box-z-index-box-img" src="/Login/背景图.png" alt="">
      <div class="Login-box-center-login-from-box-tab-from">
        <div class="Login-box-center-login-from-box-tab-from-flex" v-if="dataList.activeNames <= 1">
          <div :class="dataList.activeNames?'addtips scolor':'scolor'" @click="dataList.activeNames = 1">免密登录</div>
          <div :class="!dataList.activeNames?'addtips scolor':'scolor'" @click="dataList.activeNames = 0">密码登录</div>
        </div>
        <div class="Login-box-center-login-from-box-tab-from-flex" v-else>
          <div :class="dataList.activeNames?'addtips scolor':'scolor'">注册账号</div>
        </div>
        <div class="activeNames-margin">
          <el-form ref="form" :model="dataList.form" label-width="0" v-show="dataList.activeNames === 1">
            <el-form-item label="">
              <el-input class="Login-box-center-login-from-box-tab-from-input" v-model="dataList.form.phone"
                        placeholder="请输入手机号" @keyup.enter="onSubmit"></el-input>
            </el-form-item>
            <el-form-item label="">
              <div class="Login-box-center-login-from-box-tab-from-inputs-box">
                <el-input class="Login-box-center-login-from-box-tab-from-inputs" v-model="dataList.form.code"
                          placeholder="验证码" @keyup.enter="onSubmit"></el-input>
                <div class="Login-box-center-login-from-box-tab-from-inputs-btn" ref="codes" @click="obtains">验证码</div>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="Login-box-center-login-from-box-tab-from-input-btn" @click="onSubmit">登录</div>
              <div class="Login-box-center-login-from-box-tab-from-input-btns" @click="dataList.activeNames = 2">注册账号</div>
            </el-form-item>
          </el-form>

          <el-form ref="forms" :model="dataList.form" label-width="0" v-show="dataList.activeNames === 0">
            <el-form-item label="">
              <el-input class="Login-box-center-login-from-box-tab-from-input" v-model="dataList.form.phone"
                        placeholder="请输入手机号" @keyup.enter="onSubmitPass"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')" maxlength="16"
                        onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\u4E00-\u9FA5]/g,''))"
                        show-password class="Login-box-center-login-from-box-tab-from-input"
                        v-model="dataList.form.password" placeholder="请输入密码" @keyup.enter="onSubmitPass"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="Login-box-center-login-from-box-tab-from-input-btn" @click="onSubmitPass">登录</div>
              <div class="Login-box-center-login-from-box-tab-from-input-btns" @click="dataList.activeNames = 2">注册账号</div>
            </el-form-item>
          </el-form>

          <el-form ref="formss" :model="dataList.form" label-width="0" v-show="dataList.activeNames === 2">
            <el-form-item label="">
              <el-input class="Login-box-center-login-from-box-tab-from-input" v-model="dataList.form.phone"
                        placeholder="请输入手机号" @keyup.enter="onSubmits"></el-input>
            </el-form-item>
            <el-form-item label="">
              <div class="Login-box-center-login-from-box-tab-from-inputs-box">
                <el-input class="Login-box-center-login-from-box-tab-from-inputs" v-model="dataList.form.code"
                          placeholder="验证码" @keyup.enter="onSubmits"></el-input>
                <div class="Login-box-center-login-from-box-tab-from-inputs-btn" ref="code" @click="obtain">验证码</div>
              </div>
            </el-form-item>
            <el-form-item label="">
              <el-input onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')" maxlength="16"
                        onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\u4E00-\u9FA5]/g,''))"
                        show-password class="Login-box-center-login-from-box-tab-from-input"
                        v-model="dataList.form.password" placeholder="请输入密码" @keyup.enter="onSubmits"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="Login-box-center-login-from-box-tab-from-input-btn" @click="onSubmits">立即注册</div>
              <div class="Login-box-center-login-from-box-tab-from-input-btnss" @click="dataList.activeNames = 0">返回登录</div>
              <div class="text-left">
                <el-checkbox v-model="dataList.radio" class="agreement-radio"></el-checkbox><span>我已阅读并接受</span><a target="_blank" href="/UserProtocolAndPrivacyProtection" class="agreement-color">《用户协议与隐私保护》</a>
              </div>
            </el-form-item>

          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  reactive,
  watch,
  onMounted, ref
} from "vue";
import {PostMessage, PostRegister, PostLogin, PostPassUser} from "/src/Axios/API/Login/index.js";
import {useStore} from "vuex";
import {ElMessage} from "element-plus"; // 引入
export default {
  emits: ['DataEmits', 'DataEmitsStatus'],
  props: {
    subTypeList: {
      type: Boolean,
      required: false
    }
  },
  setup(props, context) {
    const code = ref();
    const codes = ref();
    watch(() => props.subTypeList, () => {
      dataList.dialogVisible = props.subTypeList
    })
    let setVal = null;
    let time = 59
    let times = 59
    let outTime = () => {
      if (time <= 1) {
        clearInterval(setVal)
        code.value.innerHTML = '验证码';
        time = 59;
        code.value.style.opacity = 1
      } else {
        time--;
        code.value.innerHTML = time+'秒后可重新获取';
      }
    }
    // 注册 获取验证码
    const obtain = () => {
      let phone = /^[1]([3-9])[0-9]{9}$/;
      if (time == 59 && (phone.test(dataList.form.phone))) {
        PostMessage({
          phone: dataList.form.phone
        }).then(res => {
          if (res.data.code == 200) {
            ElMessage.success({
              message: res.data.message,
              type: 'success',
              customClass:'zZindex'
            });
            code.value.style.opacity = 0.4
            setVal = setInterval(() => {
              outTime()
            }, 1000)
          } else {
            ElMessage.warning({
              message: res.data.message,
              type: 'warning',
              customClass:'zZindex'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      } else if (!(phone.test(dataList.form.phone))) {
        console.log('手机号格式错误！！！')
      } else if (time != '验证码') {
        console.log('请等待倒计时过后再次尝试！！！')
      }
    }
    let outTimes = () => {
      if (times <= 1) {
        clearInterval(setVal)
        codes.value.innerHTML = '验证码';
        times = 59;
        codes.value.style.opacity = 1
      } else {
        times--;
        codes.value.innerHTML = times+'秒后可重新获取';
      }
    }
    // 登录 获取验证码
    const obtains = () => {
      let phone = /^[1]([3-9])[0-9]{9}$/;
      if (times == 59 && (phone.test(dataList.form.phone))) {
        PostMessage({
          phone: dataList.form.phone
        }).then(res => {
          if (res.data.code == 200) {
            ElMessage.success({
              message: res.data.message,
              type: 'success',
              customClass:'zZindex'
            });
            codes.value.style.opacity = 0.4
            setVal = setInterval(() => {
              outTimes()
            }, 1000)
          } else {
            ElMessage.warning({
              message: res.data.message,
              type: 'warning',
              customClass:'zZindex'
            });
          }
        }).catch(err => {
          console.log(err)
        })
      } else if (!(phone.test(dataList.form.phone))) {
        console.log('手机号格式错误！！！')
      } else if (times != '验证码') {
        console.log('请等待倒计时过后再次尝试！！！')
      }
    }
    const dataList = reactive({
      dialogVisible: props.subTypeList,
      radio:true,
      activeName: 'first',
      activeNames: 1,
      form: {
        phone: '',
        password: '',
        code: null,
      }
    })
    const store = useStore(); // 调用
    // 注册
    const onSubmits = () => {
      if(dataList.radio){
        PostRegister({
          username: dataList.form.phone,
          code: dataList.form.code,
          password: dataList.form.password
        }).then(res => {
          if (res.data.code == 500) {
            ElMessage.warning({
              message: res.data.message,
              type: 'warning',
              customClass:'zZindex'
            });
          } else if (res.data.code == 200) {
            // 存
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('phone', dataList.form.phone);
            localStorage.setItem('count', res.data.data.sysUserDoor.count);
            store.commit("userCountInfo", res.data.data.sysUserDoor.count); // 存储 vuex
            store.commit("tokenInfo", res.data.data.token); // 存储 vuex
            store.commit("phoneInfo", res.data.data.phone); // 存储 vuex

            // 停止定时器
            clearInterval(setVal)
            time = 59;
            code.value.innerHTML = '验证码';
            code.value.style.opacity = 1;
            codes.value.innerHTML = '验证码';
            codes.value.style.opacity = 1;
            // 停止定时器

            // 关闭窗口
            determine();
            ElMessage.success({
              message: '登录成功',
              type: 'success',
              customClass:'zZindex'
            });
          } else if (res.data.code == 501) {
            ElMessage.warning({
              message: res.data.message,
              type: 'warning',
              customClass:'zZindex'
            });
            dataList.activeNames = 0
          }
        }).catch(err => {
          console.log(err)
        })
      }else{
        ElMessage.warning({
          message: '注册前请勾选《用户协议与隐私政策》',
          type: 'warning',
          customClass:'zZindex'
        });
      }
    }
    // 手机号+密码 登录
    const onSubmitPass = () => {
      PostPassUser({
        phonenumber: dataList.form.phone,
        password: dataList.form.password
      }).then(res => {
        if (res.data.code == 500) {
          ElMessage.warning({
            message: res.data.message,
            type: 'warning',
            customClass:'zZindex'
          });
        } else if (res.data.code == 200) {
          // 存
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('phone', dataList.form.phone);
          localStorage.setItem('count', res.data.data.sysUserDoor.count);
          store.commit("userCountInfo", res.data.data.sysUserDoor.count); // 存储 vuex
          store.commit("tokenInfo", res.data.data.token); // 存储 vuex
          store.commit("phoneInfo", res.data.data.phone); // 存储 vuex
          // 停止定时器
          clearInterval(setVal)
          time = 59;
          code.value.innerHTML = '验证码';
          code.value.style.opacity = 1;
          codes.value.innerHTML = '验证码';
          codes.value.style.opacity = 1;
          // 停止定时器

          // 关闭窗口
          determine();
          ElMessage.success({
            message: '登录成功',
            type: 'success',
            customClass:'zZindex'
          });
        } else if (res.data.code == 501) {
          ElMessage.warning({
            message: res.data.message,
            type: 'warning',
            customClass:'zZindex'
          });
          dataList.activeNames = 2
        }
      }).catch(err => {
        console.log(err)
      })
    }
    // 手机号+短信 登录
    const onSubmit = () => {
      PostLogin({
        username: dataList.form.phone,
        code: dataList.form.code
      }).then(res => {
        if (res.data.code == 500) {
          ElMessage.warning({
            message: res.data.message,
            type: 'warning',
            customClass:'zZindex'
          });
        } else if (res.data.code == 200) {
          // 存
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('phone', dataList.form.phone);
          localStorage.setItem('count', res.data.data.sysUserDoor.count);
          store.commit("userCountInfo", res.data.data.sysUserDoor.count); // 存储 vuex
          store.commit("tokenInfo", res.data.data.token); // 存储 vuex
          store.commit("phoneInfo", res.data.data.phone); // 存储 vuex

          // 停止定时器
          clearInterval(setVal)
          time = 59;
          code.value.innerHTML = '验证码';
          code.value.style.opacity = 1;
          codes.value.innerHTML = '验证码';
          codes.value.style.opacity = 1;
          // 停止定时器

          // 关闭窗口
          determine();
          ElMessage.success({
            message: '登录成功',
            type: 'success',
            customClass:'zZindex'
          });
        } else if (res.data.code == 502) {
          ElMessage.warning({
            message: res.data.message,
            type: 'warning',
            customClass:'zZindex'
          });
          dataList.activeNames = 2
        }
      }).catch(err => {
        console.log(err)
      })
    }
    const dowsClose = () => {
      clearInterval(setVal)
      code.value.innerHTML = '验证码';
      time = 59;
      code.value.style.opacity = 1
      codes.value.innerHTML = '验证码';
      times = 59;
      codes.value.style.opacity = 1
      context.emit("DataEmits", dataList)
    }
    const determine = () => {
      clearInterval(setVal)
      code.value.innerHTML = '验证码';
      time = 59;
      code.value.style.opacity = 1
      codes.value.innerHTML = '验证码';
      times = 59;
      codes.value.style.opacity = 1
      context.emit("DataEmitsStatus", dataList)
    }
    onMounted(() => {
      // props.dialogVisible = true
      // console.log("数据创建后-准备挂载后     axios请求可以放在这个函数中")
    })
    return {
      dataList,
      dowsClose,
      onSubmits,
      onSubmitPass,
      onSubmit,
      setVal,
      code,
      codes,
      time,
      times,
      obtain,
      obtains
    }
  }
}
</script>

<style rel="stylesheet" lang="scss" scoped>
.el-dialog-box-z-index {
  position: relative;
  z-index: 99999;

  ::v-deep(.el-dialog-box-z-index-box) {
    border-radius: 10px;
    box-shadow: 0 2px 29px 0 rgba(36, 39, 49, 0.35);
    position: relative;
    height: 624px;
    .el-dialog__headerbtn{
      z-index: 99;
    }
    .el-dialog-box-z-index-box-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      opacity: 0.07;
    }
  }
}


.Login-box-center-login-from-box-tab-from {
  margin: 0 auto;
  text-align: center;

  .Login-box-center-login-from-box-tab-from-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
  }

  .scolor {
    color: #666666;
    margin: 0 57px;
    font-weight: bold;
    font-size: 20px;
    cursor:pointer;
  }

  .addtips {
    color: #FF6930;
  }

  .activeNames-margin {
    margin-top: 93px;
  }

  .Login-box-center-login-from-box-tab-from-input {
    width: 350px;
    height: 50px;
    margin: 0 auto;
    text-align: center;

    ::v-deep(input) {
      height: 50px;
      font-size: 16px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .Login-box-center-login-from-box-tab-from-inputs-box {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    position: relative;
    width: 350px;
    margin: 0 auto;

    .Login-box-center-login-from-box-tab-from-inputs {
      width: 350px;
      height: 50px;
      ::v-deep(input) {
        height: 50px;
        font-size: 16px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
      }
    }

    .Login-box-center-login-from-box-tab-from-inputs-btn {
      position: absolute;
      right: 10px;
      margin-left: 20px;
      height: 50px;
      border-radius: 5px;
      font-size: 16px;
      text-align: center;
      color: #333333;
      line-height: 55px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .Login-box-center-login-from-box-tab-from-input-btn {
    width: 350px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    background-color: #FF6930;
    border-radius: 10px;
    margin: 10px auto;
    transition: 1s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(255, 105, 48, 0.6);
    }
  }
  .Login-box-center-login-from-box-tab-from-input-btnss {
    width: 350px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    background-color: #CBCBCB;
    border-radius: 10px;
    margin: 10px auto;
    transition: 1s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(203, 203, 203, 0.6);
    }
  }
  .text-left{
    width: 350px;
    margin:0 auto;
    text-align: left;
    .agreement-radio{
      margin-right: 5px !important;
      text-align: left;
    }
    .agreement-color{
      color: #FF6930;
      font-weight: bold;
      cursor: pointer;
    }
  }


  .Login-box-center-login-from-box-tab-from-input-btns {
    width: 350px;
    height: 54px;
    line-height: 54px;
    margin: 0 auto;
    color: #333333;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
}
.ElMessageClass{
  z-index: 99999 !important;
}
</style>
