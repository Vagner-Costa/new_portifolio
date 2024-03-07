<template>
    <div class="w-full h-50 min-h-50 bg-cinza_escuro">
        <div class=" h-full w-[250px] px-35px border-t-2 
            border-t-azul_escuro bg-bg_pagina flex flex-row 
            justify-center items-center relative"
        >
            <figure class="w-25 h-25 mr-10">
                <img src="../assets/icones/favicon.ico" alt="img">
            </figure>

            <h1 class="text-[#888]" translate="no">{{ props.componente }}</h1>

            <button @click="goHome(null)"
                class="w-25 h-25 text-branco p-5 flex justify-center 
                items-center absolute right-10 rounded-[5px] text-16 
                hover:bg-cinza_claro cursor-pointer"
            > 
                X
            </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['componente'])

    const emits = defineEmits(['voltarHome'])

    const goHome = (payload)=>{
        emits('voltarHome',payload)
    }
</script>

<style scoped>

    

</style>