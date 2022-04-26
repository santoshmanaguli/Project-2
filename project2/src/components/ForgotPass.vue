<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-6 offset-md-3">
                <h3 class="text-center">Forgot your Password?</h3>
                <p class="text-center fs-6">We'll help you reset it and get you back on track!</p>
                <hr class="hr">
                <br>
                <form>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email address" required class="form-control">
                    </div>
                    <br>
                    <div class="text-center">
                        <button class="btn col-md-4 resetbtn" type="submit">Reset Password</button>
                        <br>
                        <br>
                        <a href="/" class="goback">
                            <span >Go Back</span>
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
    name: 'ForgotPass'
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
    .resetbtn{
        width: 50%;
    }
}
</style>
