<template>
    <div class='login-component'>
        <div class='login-content'>
            <div class='title'>请注册</div>
            <div class='error-message' v-show='errorMessage'>{{errorMessage}}</div>
            <input-content :name='"username"' :type='"text"' @change="usernameChange"></input-content>
            <input-content :name='"password"' :type='"password"' @change='passwordChange'></input-content>
            <div class='hight30'><button type='button' @click='submit'>注册</button></div>
            <div class='register'><router-link to="login"><span>已有账号,登录</span></router-link></div>
        </div>
    </div>
</template>

<script type="text/babel">
    import InputContent from './common/InputContent'
    import { mapActions} from 'vuex';
    export default {
        name: 'login',
        data() {
            return {
                usernameModel: '',
                passwordModel: '',
                errorMessage: '',
            }
        },
        components: { InputContent },
        methods: {
            ...mapActions([
                'addUser'
            ]),
            usernameChange(username) {
                this.usernameModel = username
            },
            passwordChange(password) {
                this.passwordModel = password
            },
            submit() {
                if (!this.usernameModel.trim() || !this.passwordModel.trim()) {
                    this.errorMessage = '请输入用户名或密码'
                    return
                }
                this.addUser({name: this.usernameModel, password: this.passwordModel});
                this.$router.push('login')
            }
        }
    }
</script>

<style scoped>
    .login-component {
        width: 900px;
        height: 600px;
        background: url(../assets/background.jpg) no-repeat center;
        text-align: center;
    }
    .login-content {
        position: relative;
        top: 210px;
    }
    .title {
        font-size: 26px;
        font-weight: 600;
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
    }
    .hight30 {
        height: 30px;
        line-height: 30px;
    }
    .error-message {
        color: red;
        position: absolute;
        top: 36px;
        left: 50%;
        transform: translateX(-50%);
    }
    button {
        width: 160px;
        background-color: orange;
        border: 0;
        height: 24px;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
    .register span{
        cursor: pointer;
    }
</style>