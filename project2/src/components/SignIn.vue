<template>
<section>
    <div class="row" style="width:100%;">
        <div id="img-div" class="col-md-5">
            <img class="image" src="../assets/img.webp" alt="image" />
        </div>
        <div class="col-md-7">
            <div class="position-fixed top-0 end-40 p-3" style="z-index: 11">
                <div class="toast" :class="{ show: showToast }" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
                    <div class="toast-header">
                        <strong class="me-auto">Error</strong>
                        <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
                    </div>
                    <div class="toast-body">
                        Invalid Details
                    </div>
                </div>
            </div>
            <div class="justify-content-md-end d-md-flex p-3">
                <span id="acc-span" class="me-md-2">Don't have an account yet?</span>
                <button @click="$router.push('signup')" id="cre-acc" class="col-3 rounded" type="button" style="border-color: #026c7c;">Create Account</button>
            </div><br>
            <form id="div2">
                <div>
                    <h2 id="h2">
                        Sign in to <span id="abc">ABC</span>
                    </h2>
                    <h6 id="h6">Welcome back :)</h6><br>
                </div>
                <hr id="hr"><br>
                <label for="Email" class="form-label"><b>Email Address</b></label>
                <input v-model="email" type="email" class="form-control" />
                <br>
                <label for="Password" class="form-label"><b>Password</b></label>
                <input v-model="password" type="password" class="form-control" />
                <br>
                <div>
                    <button @click="logIn" class="col-3 rounded" id="btn" type="button">Sign In</button>
                </div>
                <br />
                <div>
                    <a href="" style="text-decoration:none; color:black;" @click="$router.push('ForgotPass')">Forgot Password</a>
                    <br />
                    <br />
                </div>
                <table>
                    <tr>
                        <td style='width:10%'>
                            <hr id="hr1" />
                        </td>
                        <td style="width:2%; text-align: center;">OR</td>
                        <td style='width:10%'>
                            <hr id="hr1" />
                        </td>
                    </tr>
                </table>
                <br />
                <div>
                    <button type="button" class="rounded d-grid col-3 mx-auto" id="googlebtn">Signup with Google</button>
                </div>
            </form>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '',
            showToast: false,
        }
    },
    methods: {
        async logIn() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(result.data[0]))
                this.$router.push({
                    path: '/profile'
                })
            } else {
                this.showToast = true;
                setTimeout(() => this.showToast = false, 2000)

            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({
                name: 'ProfilePage'
            })
        }
    }
}
</script>

<style>
.toast-header {
    background-color: red;
    color: white;
}

#hr1 {
    border: 2px solid;
    opacity: 1;
}

#abc {
    color: #6a0136;
}

#hr {
    width: 70px;
    color: #23c9ff;
    opacity: 1;
    height: 10px;
}

#div2 {
    padding: 7rem;
}

@media screen and (max-width:700px) {
    #div2 {
        padding: 3rem;
    }

    #cre-acc {
        width: 40%;
    }

    #h2 {
        font-size: 200%;
    }

    #h6 {
        font-size: 120%;
    }
}

@media screen and (max-width: 1000px) {
    #div2 {
        padding: 3rem;
    }

    #cre-acc {
        width: 40%;
    }
}
</style>
