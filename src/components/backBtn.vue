<template>
    <div class="backBtn" @click="$router.go(-1)">
        <div class="btn-icon">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.backBtn {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 15px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-30%);
    color: white;
    font-size: 1.1rem;
    transition: .2s ease;
    animation: backBtnAppear .2s ease-in-out forwards;
    // animation-delay: 2s;
    &:hover {
        cursor: pointer;
        background: rgba(255,255,255,0.2);
    }
    .btn-icon {
        width: 60%;
        height: 60%;
        border-top: 1px solid white;
        border-right: 1px solid white;
        transform: rotate(-135deg);
    }
}
@keyframes backBtnAppear {
    0% {
        opacity: 0;
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
