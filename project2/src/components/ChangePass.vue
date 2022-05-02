<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-8 offset-md-2" id="">
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
                <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
                    <div class="toast" :class="{ show: showToastCP }" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header" style="background-color: #2d9cdb;">
                            <strong class="me-auto">Success</strong>
                            <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
                        </div>
                        <div class="toast-body">
                            Password Changed successfully
                        </div>
                    </div>
                </div>
                <h3 id="h3cp">Change your Password.</h3>
                <br>
                <form>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="this.Passwd.pass">
                        <p v-if="!passisValid" id="str-red">Must contain atleast 8 characters</p>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="change_password">Confirm Password</label>
                        <input type="password" id="change_password" class="form-control" v-model="this.Passwd.cpassword">
                        <p v-if="!cpassisValid" id="str-red">Must contain atleast 8 characters and should match password</p>
                    </div>
                    <br>
                    <button class="btn col-md-3 offset-md-4 resetbtn" @click="changePass()" type="button" id="btnsp">Set Password</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ChangePass',
    data() {
        return {
            showToast: false,
            showToastCP: false,
            Passwd: {
                id: '',
                firstname: '',
                lastname: '',
                email: '',
                pass: '',
                cpassword: '',
                roleatschool: '',
                state: '',
            }
        }
    },
    computed: {
        passisValid() {
            return this.Passwd.pass.length > 8
        },
        cpassisValid() {
            return this.Passwd.cpassword.length > 8 && this.Passwd.cpassword == this.Passwd.pass
        },
        formisValid() {
            return this.passisValid && this.cpassisValid
        }
    },
    methods: {
        async changePass() {
            if (this.formisValid) {
                console.log(this.Passwd.pass, this.Passwd.cpassword, this.Passwd.id);
                const pass = await axios.put("http://localhost:3000/users/" + this.Passwd.id, {
                    firstname: this.Passwd.firstname,
                    lastname: this.Passwd.lastname,
                    email: this.Passwd.email,
                    password: this.Passwd.pass,
                    roleatschool: this.Passwd.roleatschool,
                    state: this.Passwd.state
                });
                console.log(pass);
                this.showToastCP = true;
                setTimeout(() => this.showToastCP = false, 2000)
            } else {
                this.showToast = true;
                setTimeout(() => this.showToast = false, 2000)
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        var id = JSON.parse(user)
        this.Passwd = id;
    }
}
</script>

<style>
.container {
    margin-top: 10%;
}

@media screen and (max-width: 1000px) {
    #btnsp {
        width: 30%;
    }
}

@media screen and (max-width: 700px) {
    #h3cp {
        font-size: 190%;
    }

    .container {
        padding: 8%;
    }

    #btnsp {
        width: 100%;
    }
}
</style>
