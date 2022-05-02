<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-6 offset-md-3">
                <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
                    <div class="toast" :class="{ show: showToast }" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">Error</strong>
                            <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
                        </div>
                        <div class="toast-body">
                            Enter all details
                        </div>
                    </div>
                </div>
                <h3 class="text-center">Forgot your Password?</h3>
                <p class="text-center fs-6">We'll help you reset it and get you back on track!</p>
                <hr class="hr">
                <br>
                <form>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email address" required class="form-control" v-model="email" />
                        <p v-if="!formisValid" id="str-red">Enter only valid email</p>
                    </div>
                    <br>
                    <div class="text-center">
                        <button class="btn col-md-4 resetbtn" type="button" @click="rstpass">Reset Password</button>
                        <br>
                        <br>
                        <a href="/" class="goback">
                            <span>Go Back</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ForgotPass',
    data() {
        return {
            showToast: false,
            email: '',
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/, //eslint-disable-line
        }
    },
    methods: {
        rstpass() {
            if (this.formisValid) {
                console.log("1");
            } else {
                this.showToast = true,
                setTimeout(() => this.showToast = false,2000);
            }
        }
    },
    computed: {
        emailisValid() {
            return this.reg.test(this.email)
        },
        formisValid() {
            return this.emailisValid
        }
    }
}
</script>

<style>
.hr {
    width: 66px;
    position: relative;
    border: 5px solid gold;
    opacity: 1;
    margin-right: 41% !important;
    margin-left: 41% !important;
}

.resetbtn {
    background: #2d9cdb;
    border-radius: 3px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #fff;
}

.goback {
    color: black;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
}

@media screen and (max-width: 1000px) {
    .resetbtn {
        width: 50%;
    }
}
</style>
