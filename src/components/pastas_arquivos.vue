<template>
    <section class="hidden lg:flex md:w-[250px] lg:h-full lg:border-r 
        lg:border-r-cinza  lg:bg-cinza_escuro  lg:flex-col lg:justify-between 
        lg:pt-10 lg:z-40"
    >
        <!-- container TXT EXPLORER / OPEN EDITORS -->
        <div class="w-full h-[125px] max-h-[125px] bg-cinza_escuro pt-5 z-50">
            <div class="w-full flex justify-between px-30 mb-15 ">
                <p class="text-branco font-light" translate="no">EXPLORER</p>
                <p class="text-branco">. . . </p>
            </div>

            <div class="w-full flex justify-start border-b px-10 py-5 border-b-cinza">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-semibold" translate="no">OPEN EDITORS</p> 
            </div>

            <div class="w-full flex justify-start  px-10">
                <span class="text-branco mr-10 rotate-90"> &#62; </span>
                <p class="text-branco font-semibold" translate="no">NEW_PORTFOLIO</p> 
            </div>
        </div>
        
        <!-- container NEW_PORTIFOLIO -->
        <div class="w-full h-full flex flex-col border-b py-5 border-b-cinza overflow-y-auto">
            <div class="w-full flex justify-start px-25 py-5 ">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">.vscode</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">node_modules</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">public</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5">
                <span class="text-branco mr-10 rotate-90"> &#62; </span>
                <p class="text-branco font-light" translate="no">src</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">assets</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5">
                <span class="text-branco mr-10 rotate-90"> &#62; </span>
                <p class="text-branco font-light" translate="no">components</p> 
            </div>

                <button   on @click="emitSelectComponents('Cabecalho')" 
                    class="w-full h-40 min-h-40 max-h-40 flex flex-row justify-start px-45 py-5 items-center hover:bg-cinza flex-nowrap overflow-hidden"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light  whitespace-nowrap" translate="no">cabecalho.vue</p> 
                </button>

                <button  @click="emitSelectComponents('SobreMim')" 
                    class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light whitespace-nowrap" translate="no">sobreMim.vue</p> 
                </button>

                <button  @click="emitSelectComponents('Tecnologias')" 
                    class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light whitespace-nowrap" translate="no">tecnologias.vue</p> 
                </button>


                <button  @click="emitSelectComponents('Projetos')" 
                    class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light whitespace-nowrap" translate="no">projetos.vue</p> 
                </button>

                <button  @click="emitSelectComponents('Contatos')" 
                    class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light whitespace-nowrap" translate="no">contatos.vue</p> 
                </button>

                <button  @click="emitSelectComponents('Rodape')" 
                    class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza"
                >
                    <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                    <p class="text-branco font-light whitespace-nowrap" translate="no">rodape.vue</p> 
                </button>

            <div class="w-full flex justify-start px-35 py-5">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">router</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">stores</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5">
                <span class="text-branco mr-10 rotate-90"> &#62; </span>
                <p class="text-branco font-light" translate="no">views</p> 
            </div>

            <button @click="emitSelectComponents('Home')" class="w-full flex justify-start px-45 py-5 items-center hover:bg-cinza">
                <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                <p class="text-branco font-light whitespace-nowrap" translate="no">Home.vue</p> 
            </button>

            <div class="w-full flex justify-start px-35 py-5 items-center">
                <img class="w-20 h-20 mr-5" src="../assets/icones/favicon.ico" alt="">
                <p class="text-branco font-light" translate="no">App.vue</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5 items-center">
                <p class="text-[#ff0] font-extrabold mr-5 text-16" translate="no">JS</p> 
                <p class="text-branco font-light" translate="no">main.js</p> 
            </div>

            <div class="w-full flex justify-start px-35 py-5 items-center">
                <p class="text-[#636aee] font-extrabold mr-5 text-18" translate="no">#</p> 
                <p class="text-branco font-light" translate="no">style.css</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <img class="w-20 h-20 mr-5 bg-cinza rotate-45" src="../assets/icones/compartilha.png" alt="">
                <p class="text-branco font-light" translate="no">.gitignore</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <span class="text-[#f80]"> &#60; </span>
                <span class="text-[#f80] mr-10"> &#62; </span>
                <p class="text-branco font-light" translate="no">index.html</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <span class="text-[#ff0] mr-5"> { } </span>
                <p class="text-branco font-light" translate="no">jsconfig.json</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <span class="text-[#ff0] mr-5"> { } </span>
                <p class="text-branco font-light" translate="no">package-lock.json</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <span class="text-[#ff0] mr-5"> { } </span>
                <p class="text-branco font-light" translate="no">package.json</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <p class="text-[#ff0] font-extrabold mr-5 text-16" translate="no">JS</p> 
                <p class="text-branco font-light" translate="no">postcss.config.js</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <span class="w-20 h-20 rounded-full p-[8px] text-[#636aee] font-normal 
                    mr-5 text-18 border border-[#636aee] flex justify-center items-center"
                     translate="no"
                >
                    i
                </span> 
                <p class="text-branco font-light" translate="no">README.md</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <p class="text-[#ff0] font-extrabold mr-5 text-16" translate="no">JS</p> 
                <p class="text-branco font-light" translate="no">tailwind.config.js</p> 
            </div>

            <div class="w-full flex justify-start px-25 py-5 items-center">
                <p class="text-[#ff0] font-extrabold mr-5 text-16" translate="no">JS</p> 
                <p class="text-branco font-light" translate="no">vite.config.js</p> 
            </div>
        </div>

        <!-- Container OUTLINE / TIMELINE -->
        <div class="w-full h-90 max-h-90 bg-cinza_escuro z-50">
            <div class="w-full flex justify-start border-b px-10 py-5 border-b-cinza">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-semibold" translate="no">OUTLINE</p> 
            </div>

            <div class="w-full flex justify-start border-b px-10 py-5 border-b-cinza">
                <span class="text-branco mr-10"> &#62; </span>
                <p class="text-branco font-semibold" translate="no">TIMELINE</p> 
            </div>
        </div>
    </section>
</template>

<script setup>
    const emit = defineEmits('selectComponents')

    const emitSelectComponents = (payload)=>{
        emit("selectComponents", payload)
    }

</script>

<style scoped>
    /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #292828 #121212;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #121212;
}

*::-webkit-scrollbar-thumb {
  background-color: #292828;
  border-radius: 20px;
  border: 3px solid #121212;
}
</style>