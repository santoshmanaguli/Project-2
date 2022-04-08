<template>
<section>
    <div class="row" style="width:100%;">
        <div id="img-div" class="col-md-5">
            <img class="image" src="../assets/img.webp" alt="image" />
        </div>
        <div class="col-md-7 p-5">
            <form>
                <div class="justify-content-md-end d-md-flex">
                    <span id="acc-span" class="me-md-2">Already have an account?</span>
                    <button id="signin-btn" class="col-2 rounded" type="button" style="border-color: #026c7c;">SignIn</button>
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
                <label for="FirstName" class="form-label"><b>First Name</b></label><span id="str-red">*</span>
                <input v-model="firstname" type="text" class="form-control" />
                <label for="LastName" class="form-label"><b>Last Name</b></label><span id="str-red">*</span>
                <input v-model="lastname" type="text" class="form-control" />
                <label for="Email" class="form-label"><b>Email Address</b></label><span id="str-red">*</span>
                <input v-model="email" type="email" class="form-control" />
                <label for="Password" class="form-label"><b>Password</b></label><span id="str-red">*</span>
                <input v-model="password" type="password" class="form-control" />
                <br>
                <label for="school"><b>Role at Your School</b></label><span id="str-red">*</span>
                <select v-model="roleatschool" class="form-select" aria-label="Default select example" name="school" id="school">
                    <option selected>Select option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                </select>
                <br>
                <label for="state"><b>State</b></label><span id="str-red">*</span>
                <select v-model="state" class="form-select" aria-label="Default select example" name="state" id="state">
                    <option selected></option>
                    <option value="MH">MH</option>
                    <option value="AP">AP</option>
                    <option value="DH">DH</option>
                </select><br>
                <input class="me-2" type="checkbox" /><span>I'd like to try the new <b>Progress Monitoring</b> tracker in
                    ABC</span>
                <br />
                <input class="me-2" type="checkbox" checked /><span>I accept the <a href="#" style="color:#23c9ff; text-decoration:none;">Terms and Conditions</a></span>
                <br />
                <br />
                <div>
                    <button @click="signUp" class="col-3 rounded" id="btn" type="button">Create Account</button>
                </div>
                <br />
                <div>
                    <a href="" style="text-decoration:none; color:black;">Forgot Password</a>
                    <br />
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
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            roleatschool: '',
            state: ''
        }
    },
    methods: {
        async signUp() {
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
                alert("sent");
            }
        }
    }
}
</script>

<style>
.image{
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
