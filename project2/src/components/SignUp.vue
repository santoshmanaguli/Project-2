<template>
<section>
    <div class="row" style="width:100%;">
        <div id="img-div" class="col-md-5">
            <img class="image" src="../assets/img.webp" alt="image" />
        </div>
        <div class="col-md-7 p-5">
            <div class="justify-content-md-end d-md-flex">
                <span id="acc-span" class="me-md-2">Already have an account?</span>
                <button @click="$router.push('/')" id="signin-btn" class="col-2 rounded" type="button" style="border-color: #026c7c;">SignIn</button>
            </div><br>
            <h2>
                Stay organized and energized with your new teacher workflow
                assistant.
            </h2>
            <h6>Enter your details below to get your FREE account today.</h6><br>
            <hr id="hr">
            <div id="req" class="justify-content-md-end d-md-flex">
                <span id="str-red">*</span><span><b>Required</b></span>
            </div>
            <form class="d-grid gap-2">
                <div>
                    <label for="FirstName" class="form-label"><b>First Name</b><span id="str-red">*</span></label>
                    <input v-model="firstname" type="text" class="form-control" required />
                    <p v-show="!firstnameIsValid" id="str-red">First name cannot be empty</p>
                </div>
                <div>
                    <label for="LastName" class="form-label"><b>Last Name</b><span id="str-red">*</span></label>
                    <input v-model="lastname" type="text" class="form-control" required />
                    <p v-if="!lastnameIsValid" id="str-red">Last Name cannot be empty</p>
                </div>
                <div>
                    <label for="Email" class="form-label"><b>Email Address</b><span id="str-red">*</span></label>
                    <input v-model="email" type="email" class="form-control" required />
                    <p v-if="!emailIsValid" id="str-red">Enter only valid email</p>
                </div>
                <div>
                    <label for="Password" class="form-label"><b>Password</b><span id="str-red">*</span></label>
                    <input v-model="password" type="password" class="form-control" minlength="8" required />
                    <p v-if="!passwordIsValid" id="str-red">Must contain at least 8 characters</p>
                </div>
                <div>
                    <label for="school"><b>Role at Your School</b><span id="str-red">*</span></label>
                    <select v-model="roleatschool" class="form-select" aria-label="Default select example" name="school" id="school" required>
                        <option value="" disabled selected>Select option</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                    <p v-if="!roleatschoolIsValid" id="str-red">Can't be empty</p>
                </div>
                <div>
                    <label for="state"><b>State</b><span id="str-red">*</span></label>
                    <select v-model="state" class="form-select" aria-label="Default select example" name="state" id="state" required>
                        <option value="MH">MH</option>
                        <option value="AP">AP</option>
                        <option value="DH">DH</option>
                    </select>
                    <p v-show="!stateIsValid" id="str-red">Can't be empty</p>
                </div>
                <div>
                    <br>
                    <input class="me-2" type="checkbox" /><span>I'd like to try the new <b>Progress Monitoring</b> tracker in
                        ABC</span>
                </div>
                <div>
                    <input class="me-2" type="checkbox" checked /><span>I accept the <a href="#" style="color:#23c9ff; text-decoration:none;">Terms and Conditions</a></span>
                </div>
                <br>
                <div>
                    <button @click="signUp" class="col-3 rounded" id="btn" type="button">Create Account</button>
                </div>
                <br>
                <div>
                    <a href="" style="text-decoration:none; color:black;" @click="$router.push('ForgotPass')">Forgot Password</a>
                </div>
                <table>
                    <tr>
                        <td style='width:10%'>
                            <hr style="border:2px solid" />
                        </td>
                        <td style="width:2%; text-align: center;">OR</td>
                        <td style='width:10%'>
                            <hr style="border:2px solid" />
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
import axios from 'axios'

export default {
    name: "SignUp",
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            roleatschool: "",
            state: "",
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,                 //eslint-disable-line
        }
    },
    computed: {
        firstnameIsValid() {
            return !!this.firstname
        },
        lastnameIsValid() {
            return !!this.lastname
        },
        roleatschoolIsValid() {
            return !!this.roleatschool
        },
        stateIsValid() {
            return !!this.state
        },
        passwordIsValid() {
            return this.password !== "" && this.password.length > 8
        },
        emailIsValid() {
            return this.reg.test(this.email)
        },
        formisValid() {
            return this.firstnameIsValid && this.lastnameIsValid && this.emailIsValid && this.passwordIsValid && this.roleatschoolIsValid && this.stateIsValid
        }
    },
    methods: {
        async signUp() {
            if (this.formisValid) {
                let result = await axios.post("http://localhost:3000/users", {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    roleatschool: this.roleatschool,
                    state: this.state
                });
                console.log(result);
                if (result.status == 201) {
                    alert("user registered");
                    localStorage.setItem("user", JSON.stringify(result.data))
                    this.$router.push({
                        name: 'ProfilePage'
                    })
                }
            }else{
                alert("Enter all details correctly");
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
p {
    font-size: 80%;
}

.image {
    width: 100%;
    height: 100%;
}

#btn {
    background: #026c7c;
    color: #fff;
}

#googlebtn {
    background: #026c7c;
    color: #fff;
}

#str-red {
    color: red;
}

#prog-bar {
    width: 5%;
    background: #23c9ff;
}

@media screen and (max-width:700px) {
    #signin-btn {
        width: 25%;
    }

    #img-div {
        display: none;
    }

    #acc-span {
        margin: 2%;
    }

    h2 {
        font-size: 115%;
    }

    h6 {
        font-size: 90%;
    }

    #req {
        text-align: end;
    }

    #btn {
        width: 50%;
    }

    #googlebtn {
        width: 70%;
    }
}

@media screen and (max-width: 1000px) {
    #btn {
        width: 50%;
    }

    #googlebtn {
        width: 60%;
    }
}
</style>
