<template>
<section class="login-main" >
    <div class="page-container">
     <div class="text">
      <div class="text-con">
        <el-row>
        <el-col :span="12" class="te-r"><img src="../static/img/nofind-img.png" /></el-col>
          <el-col :span="12" class="te-l"><div class="grid-content bg-purple-light">
           <h3>咦...页面挂了</h3>
           <p>非常抱歉，这个页面已腾云驾雾而去… 请放出您的大招ctrl+f5把它召唤回来吧！</p></div></el-col>
         </el-row>
       </div>
     </div>
     <div class="footer">
       <footer>
      &copy; {{currentYear}} 招联金融
      </footer>
     </div>
    </div>
</section>
</template>
<script>
  export default {
    name: '404',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>
<style lang="less" scoped>
    .te-r{
      text-align: right;
      img{
        margin-right: 10%;
      }
    }
     .te-l{
      text-align: left;
    }
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);

        background:  url(../static/img/nofind-font.png) no-repeat 50% 26%;
    }
    .page-container ,
    .login-main{
         height: 100%;
         width: 100%;
         background-color: #F6FAF9;
       }
    .footer{

       a{
         text-decoration:none;
         color: #C0CCDA;
         font-size: 18px;
         }
      img{
        margin-right: 10px;
        vertical-align: top;
      }
      p{
       font-size: 14px;
      }
      }
    .text{
      position: absolute;
       top: 32%;
      left: 0;
      width: 100%;
      text-align: center;
      img{
        // float: left;
      }
      h3{
        margin: 10% 0% 6% 0%;
        font-size: 24px;
        // float: right;
        // width: 328px;
        text-align: left;
        color: #172A20;
      }
      p{
       font-size: 18px;
       text-align: left;
       margin-left: 0%;
       // float: right;
       width: 328px;
       color: #424F47;
      }
    }
  .footer{
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 100%;
  }
    footer {
    text-align: center;
    font-size: 14px;
    color: #C0CCDA;
  }
</style>
