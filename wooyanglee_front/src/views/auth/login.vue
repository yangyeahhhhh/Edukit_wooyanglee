<template>
  <div>
    <div class="login-page" ng-app="">
      <div class="login-content login-content-signin" ng-hide="showSignIn">
        <div>
          <h2>Log in</h2>
          <div><br /></div>
          <form class="wrapper-box" role="form" ng-submit="login()">
            <input v-model="userid" type="id" class="form-control form-control-email" placeholder="아이디" required />
            <input
              v-model="password"
              type="password"
              class="form-control form-control-password"
              placeholder="Password"
              required
            />
            <!-- <div class="checkbox pull-left">
              <label> <input type="checkbox" /> Remember me. </label>
            </div> -->
            <div><br /><br /></div>
            <button :disabled="loading" type="submit" @click="onSubmit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  data() {
    return {
      userid: null,
      password: null
    }
  },
  computed: {
    tokenUser() {
      return this.$store.getters.TokenUser
    },
    loading() {
      return this.$store.getters.TokenLoading
    },
    error() {
      return this.$store.getters.TokenError
    }
  },
  watch: {
    tokenUser(value) {
      if (value && value.id && value.id > 0) {
        // 로그인이 완료된 상황
        this.$router.push('/home') // 메인 페이지 이동
      }
    },
    error(errValue) {
      if (errValue !== null) {
        // 메세지 출력
        this.$bvToast.toast('아이디/비밀번호를 확인해 주세요.', {
          title: '로그인 에러',
          variant: 'danger',
          solid: true
        })
      }
    }
  },
  created() {
    // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
    const token = window.localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      const today = new Date()
      const expDate = new Date(decodedToken.exp * 1000)

      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우
        this.$router.push('/home') // 메인 페이지 이동
      } else {
        // 토큰이 만료된 경우
        window.localStorage.removeItem('token') // 토큰 삭제
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authLogin', { userid: this.userid, password: this.password })
    }
  }
}
</script>

<style>
.top {
  background-image: url('~@/assets/images/1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.login-page {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  background-image: url('~@/assets/images/1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.login-content {
  width: 450px;
  padding: 40px;
  height: 400px;
  top: 50%;
  margin-top: 40px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  position: absolute;
  background: #fff;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  border-top: 5px solid #7ac142;
  float: left;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
}
h2 {
  text-align: left;
  color: #7ac142;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
form.wrapper-box {
  margin-top: 40px;
}
input {
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  padding-left: 0;
  box-shadow: none;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  /* &:valid { border-bottom: 1px solid #7ac142; } */
  /* &:focus:invalid { border-bottom: 1px solid #EF6161; } */
}
/* ::-webkit-input-placeholder { color: rgba(0,0,0,0.5); }
    :-moz-placeholder { color: rgba(0,0,0,0.5); }
    ::-moz-placeholder { color: rgba(0,0,0,0.5); }
    :-ms-input-placeholder { color: rgba(0,0,0,0.5); } */
.outer-link {
  display: inline-block;
  margin-top: 50px;
  padding: 5px 0;
  display: block;
  color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}
outer-link:hover {
  -webkit-transition: all 0s ease-out;
  transition: all 0s ease-out;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
}
/* &.login-content-signin > div,
  &.login-content-signup > div {
    overflow: hidden;
    top: 50%;
    position: relative;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  &.login-content-signin { margin-left: -130px; }
  &.login-content-signup { margin-left: 130px; } */
.login-switcher {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 660px;
  height: 400px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.03);
  /* & > div {
    width: 40%;
    margin-top: 125px;
    &.login-switcher-signin { float: left; }
    &.login-switcher-signup { float: right; } */
}
h3 {
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 14px;
}
button {
  width: 60%;
  display: block;
  margin: 20px auto 0 auto;
  outline: 0;
  background: none;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 14px;
  padding: 4px 12px 5px 12px;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}
button:hover {
  color: #7ac142;
  background: #fff;
  border: 2px solid #7ac142;
}
.login-switcher-signin,
.login-switcher-signup {
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}
.login-switcher-signin.ng-hide:not(.ng-hide-animate),
.login-switcher-signup.ng-hide:not(.ng-hide-animate) {
  display: block !important;
  opacity: 0;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}
</style>
