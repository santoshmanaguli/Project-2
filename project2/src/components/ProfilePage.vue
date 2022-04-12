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
                    <i class="bi bi-bell-fill" style="color:white; font-style:normal">
                        <span class="badge rounded-circle" style="background:#2d9cdb">43</span>
                    </i>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle border-bottom" id="navbarDropdown" role="button" href="#">
                    <i class="bi bi-gear-fill" style="color:white"></i>
                </a>
            </li>
        </ul>
    </div>
</nav>
<br>
<br>
<div>
    <form class="row g-2 align-items-center d-grid p-1 col-7 mx-auto">
        <div>
            <h2 class="text-center" id="personal">My Personal Information.</h2>
        </div>
        <div>
            <h5 class="text-center">
                Update details below.
            </h5>
        </div>
        <div>
            <label for="firstname">First Name</label>
            <input type="text" class="form-control" name="firstname" id="firstname">
        </div>
        <div>
            <label for="lastname">Last Name</label>
            <input type="text" class="form-control" name="lastname" id="lastname">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" disabled>
        </div>
        <div>
            <label for="school">School</label>
            <select class="form-select" aria-label="Default select example" name="school" id="school" disabled></select>
        </div>
        <div>
            <label for="state">State</label>
            <select class="form-select" aria-label="Default select example" name="state" id="state" disabled></select>
        </div><br>
        <div class="d-grid gap-4 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2 col-4" type="button" style="background:#2d9cdb" id="upd">Update Profile</button>
            <button class="btn btn-primary col-3" type="button" style="background:#2d9cdb" id="conn">Connect to Google</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'ProfilePage',
}
</script>

<style>
.border-bottom {
    border-bottom: 1px solid gold !important;
}

.navbar-dark .navbar-brand {
    color: gold;
}

@media screen and (max-width: 1000px) {
    .container {
        width: 50%;
    }

    #conn {
        width: 40%;
    }
}

@media screen and (max-width: 700px) {
    .col-7 {
        width: 78%;
    }

    #upd,
    #conn {
        width: 100%;
    }

    #personal {
        font-size: 167%;
    }
}
</style>
