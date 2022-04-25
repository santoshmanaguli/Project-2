<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-8 offset-md-2">
                <h3>Change your Password.</h3>
                <br>
                <form>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="this.Passwd.password">
                        <p v-if="!passisValid" id="str-red">Must contain atleast 8 characters</p>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="change_password">Confirm Password</label>
                        <input type="password" id="change_password" class="form-control" v-model="this.Passwd.cpassword">
                        <p v-if="!cpassisValid" id="str-red">Must contain atleast 8 characters and should match password</p>
                    </div>
                    <br>
                    <button class="btn col-md-3 offset-md-4 resetbtn" @click="changePass()" type="button">Set Password</button>
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
            Passwd: {
                id:'',
                password: '',
                cpassword: '',
            }
        }
    },
    computed: {
        passisValid() {
            return this.Passwd.password.length > 8
        },
        cpassisValid() {
            return this.Passwd.cpassword.length > 8 && this.Passwd.cpassword == this.Passwd.password
        },
        formisValid() {
            return this.passisValid && this.cpassisValid
        }
    },
    methods: {
        async changePass() {
            if (this.formisValid) {
                console.log(this.Passwd.password, this.Passwd.cpassword, this.Passwd.id );
                const pass = await axios.put("http://localhost:3000/users/" + this.Passwd.id, {
                    password: this.Passwd.password,
                });
                console.log(pass);
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user');
        var id = JSON.parse(user)
        this.Passwd = id;
    }
}
</script>

<style>

</style>
