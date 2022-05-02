<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <a class="navbar-brand ms-4" href="#">ABC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-bell-fill" style="color: white; font-style: normal">
                        <span class="badge rounded-circle" style="background: #2d9cdb">43</span>
                    </i>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle border-bottom" id="navbarDropdown" role="button" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bi bi-gear-fill" style="color: white"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <a class="dropdown-item" href="#" @click="$router.push('ChangePass')">Change Password</a>
            </li>
            <li>
                <a class="dropdown-item" href="#" @click="logout()">Logout</a>
            </li>
    </div>
    </li>
    </ul>
    </div>
</nav>
<br />
<br />
<div>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
        <div class="toast" :class="{ show: showToast }" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header" style="background-color: blue">
                <strong class="me-auto">Success</strong>
                <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
            </div>
            <div class="toast-body">
                Details updated
            </div>
        </div>
    </div>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
        <div class="toast" :class="{ show: showToastError }" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Error</strong>
                <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
            </div>
            <div class="toast-body">
                Enter details correctly
            </div>
        </div>
    </div>
    <form class="row g-2 align-items-center d-grid p-1 col-7 mx-auto">
        <div>
            <h2 class="text-center" id="personal">My Personal Information.</h2>
        </div>
        <div>
            <h5 class="text-center">Update details below.</h5>
        </div>
        <div>
            <label for="firstname">First Name</label>
            <input type="text" class="form-control" name="firstname" id="firstname" v-model="User.firstname" />
            <p v-if="!firstnameIsValid" id="str-red">First name cannot be empty</p>
        </div>
        <div>
            <label for="lastname">Last Name</label>
            <input type="text" class="form-control" name="lastname" id="lastname" v-model="User.lastname" />
            <p v-if="!lastnameIsValid" id="str-red">Last name cannot be empty</p>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" disabled v-model="User.email" />
        </div>
        <div>
            <label for="school">School</label>
            <select class="form-select" aria-label="Default select example" name="school" id="school" disabled v-model="User.roleatschool">
                <option value="" disabled>Select option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
        <div>
            <label for="state">State</label>
            <select class="form-select" aria-label="Default select example" name="state" id="state" disabled v-model="User.state">
                <option></option>
                <option value="MH">MH</option>
                <option value="AP">AP</option>
                <option value="DH">DH</option>
            </select>
        </div>
        <br />
        <div class="d-grid gap-4 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2 col-3 upd" type="button" style="background: #2d9cdb" @click="upd()">
                Update Profile
            </button>
            <button class="btn btn-primary col-3 conn" type="button" style="background: #2d9cdb">
                Connect to Google
            </button>
        </div>
    </form>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "ProfilePage",
    data() {
        return {
            showToast: false,
            showToastError: false,
            User: {
                id: "",
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                roleatschool: "",
                state: "",
            },
        };
    },
    computed: {
        firstnameIsValid() {
            return !!this.User.firstname;
        },
        lastnameIsValid() {
            return !!this.User.lastname;
        },
        formisValid() {
            return this.firstnameIsValid && this.lastnameIsValid;
        },
    },
    methods: {
        async upd() {
            console.log(this.User.firstname, this.User.lastname, this.User.id);
            var uid = this.User.id;
            console.log(uid);
            if (this.formisValid) {
                const result = await axios.put(
                    "http://localhost:3000/users/" + this.User.id, {
                        firstname: this.User.firstname,
                        lastname: this.User.lastname,
                        email: this.User.email,
                        password: this.User.password,
                        roleatschool: this.User.roleatschool,
                        state: this.User.state,
                    }
                );
                console.log(result);

                if (result.status == 200) {
                    this.$router.push({
                        name: "ProfilePage",
                    });
                    this.showToast = true;
                    setTimeout(() => this.showToast = false, 2000);
                }
            }else{
                this.showToastError = true,
                setTimeout(() => this.showToastError = false, 2000);
            }
        },
        logout() {
            localStorage.clear();
            this.$router.push({
                path: "/",
            });
        },
    },
    mounted() {
        let user = localStorage.getItem("user");
        if (!user) {
            this.$router.push({
                path: "/",
            });
        }
        var obj = JSON.parse(user);
        this.User = obj;
    },
};
</script>

<style>
.navbar-nav .dropdown-menu {
    float: none;
}

.dropdown-menu.show {
    left: auto;
    right: 0;
}

.border-bottom {
    border-bottom: 1px solid gold !important;
}

.navbar-dark .navbar-brand {
    color: gold;
}

@media screen and (max-width: 1000px) {

    .upd,
    .conn {
        width: 40%;
    }
}

@media screen and (max-width: 700px) {
    .col-7 {
        width: 78%;
    }

    .upd,
    .conn {
        width: 100%;
    }

    #personal {
        font-size: 167%;
    }
}
</style>
