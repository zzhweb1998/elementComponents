<template>
    <div id="waterfallContainer">
        <waterfall-layout></waterfall-layout>
    </div>
</template>

<script>
import waterfallLayout from '../../components/layout/waterfallLayout'

export default {
    components:{
        waterfallLayout
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
#waterfallContainer{
    height: 100%;
}
</style>