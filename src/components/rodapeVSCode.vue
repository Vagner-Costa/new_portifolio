<template>
    <footer class="w-full h-40 max-h-40 min-h-40 bg-cinza_escuro z50 absolute 
        bottom-0 flex flex-row justify-start items-center"
    >
        <div class="w-60 min-w-60 h-full bg-[#1067f3] flex justify-center">
            <p class="text-25 text-branco mt-[5px]" >&#62;</p>
            <p class="text-25 text-branco mt-[-5px] ml-[-7px]">&#60;</p>
        </div>

        <div class="h-full flex flex-row items-end px-10 pb-[7px]">
            <div class="w-20 h-20 rounded-full border-2 border-cinza_claro flex 
                justify-center items-center mx-5"
            >
                <p class="text-18 text-branco leading-3 mt-[-3px]">x</p> 
            </div>
            <p class="text-branco text-18 leading-4 font-light mx-5">0</p>

            <img class="w-20 h-20 mx-5" src="../assets/icones/alerta.png" alt="">
            <p class="text-branco text-18 leading-4 font-light mx-5">0</p>

            <img class="w-20 h-20 ml-20" src="../assets/icones/transmissao.png" alt="">
            <p class="text-branco text-18 leading-4 font-light mx-5">0</p>
        </div>

        <div class="hidden lg:h-full lg:flex lg:flex-row lg:items-end lg:px-10 lg:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Share Code Link</p>
        </div>

        <div class="hidden xl:h-full xl:flex xl:flex-row xl:items-end xlpx-10 xl:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Explain Code</p>
        </div>

        <div class="hidden xl:h-full xl:flex xl:flex-row xl:items-end xl:px-10 xl:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Comment Code</p>
        </div>

        <div class="hidden 2xl:h-full 2xl:flex 2xl:flex-row 2xl:items-end 2xl:px-10 2xl:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Find Bugs</p>
        </div>

        <div class="hidden 3xl:flex 3xl:h-full 3xl:flex-row 3xl:items-end 3xl:px-10 3xl:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Code Shat</p>
        </div>

        <div class="hidden 3xl:flex 3xl:h-full 3xl:flex-row 3xl:items-end 3xl:px-10 3xl:pb-[7px]">
            <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Black Box</p>
        </div>

        <div class="hidden sm:h-full sm:flex sm:flex-row sm:px-10 sm:py-[7px] sm:absolute  sm:right-0">
            <div class="h-full flex flex-row items-end px-10">
                <img class="w-20 h-20 ml-20" src="../assets/icones/antena.png" alt="">
                <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Go Live</p>
            </div>

            <div class="h-full flex flex-row items-end px-10">
                <p class="text-branco text-18 leading-4 font-light mx-5" translate="no">Blackbox</p>
            </div>

            <div class="h-full flex flex-row items-end pr-10">
                <img class="w-20 h-20 ml-20" src="../assets/icones/sino.png" alt="">    
            </div>
        </div>

    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>