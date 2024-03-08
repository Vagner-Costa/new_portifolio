<template>
    <section class="w-full pt-5">
        <!-- Tag Section abertura -->
        <div class="w-full flex flex-row">
            <p class="box_numero">26</p>
            <Section class="mgm1" classe="cont_tecnologias" ident="tecnologias"></Section>
        </div>

            <!-- Tag div abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">27</p>
                <Div class="mgm2" classe="box_subtitulo" ident="box_subtitulo"></Div>
            </div>

                <!-- Tag h3 abertura -->
                <div class="w-full flex flex-row">
                    <p class="box_numero">28</p>
                    <H3 class="mgm3" classe="subtitulo" ident="txt_tecnologia"></H3>
                </div>

                    <!-- Titulo SOBRE MIM -->
                    <div class="w-full flex flex-row items-end my-10">
                        <p class="box_numero">29</p>
                        <div class="w-full flex flex-row justify-center items-end">
                            <h1 class="subtitulo leading-[40px]">TECNOLOGIAS</h1>
                        </div>
                    </div>

                <!-- Tag h3 fechamento -->
                <div class="w-full flex flex-row">
                    <p class="box_numero">30</p>
                    <Fechamento class="mgm3" titulo="h3"></Fechamento>
                </div>

            <!-- Tag div fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">31</p>
                <Fechamento class="mgm2" titulo="div"></Fechamento>
            </div>

            <!-- Tag div abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">32</p>
                <Div class="mgm2" classe="img_tecno" ident="img_tecnologias"></Div>
            </div>

            <!-- Tag template abertura -->
            <div class="w-full flex flex-row">
                <p class="box_numero">33</p>
                <Template class="mgm3" un="tec" lista="tecnos"></Template>
            </div>

            <!-- Tag image  -->
            <div class="w-full flex flex-row">
                <p class="box_numero">34</p>
                <Img class="mgm4" classe="img_tecs" src="tec.logo" chave="tec.id"></Img>
            </div>

            <!-- Imagens das tecnologias -->
            <div class="w-full flex flex-row flex-wrap justify-center sm:px-20 md:px-20 lg:px-80 xl:px-[110px] 2xl:px-[120px] my-10">
                <div v-for="tec in cptdTecnologias" :key="tec.nome">
                    <div class="w-[145px] h-[120px] flex flex-col items-center justify-start 
                        p-5 m-5 overflow bg-cinza_escuro sm:w-[160px] sm:h-[130px] sm:m-10"
                    >
                        <div >
                            <p class="text-[16px] text-verde" translate="no">
                                &#60; !-- {{tec.nome}} -- &#62;
                            </p>
                        </div>
                        
                        <figure class="w-full h-full flex justify-center items-center p-10 bg-cinza_escuro overflow-hidden">
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'HTML5'" src="../../src/assets/logos/html5.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'CSS3'" src="../../src/assets/logos/css3.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Javascript'" src="../../src/assets/logos/javascript.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'React'" src="../../src/assets/logos/react.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Nodejs'" src="../../src/assets/logos/node.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Docker'" src="../../src/assets/logos/docker.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Mongodb'" src="../../src/assets/logos/mongo.png" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Git'" src="../../src/assets/logos/git.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Github'" src="../../src/assets/logos/github.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Vuejs'" src="../../src/assets/logos/vue.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Tailwind'" src="../../src/assets/logos/tailwind.svg" alt="" />
                            <img class="object-contain w-full h-full" v-if="tec.nome=== 'Axios'" src="../../src/assets/logos/axios.svg" alt="" />
                        </figure>
                        
                    </div>
                </div>
                
            </div>

            <!-- Tag template fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">35</p>
                <Fechamento class="mgm3" titulo="template"></Fechamento>
            </div>

            <!-- Tag div fechamento -->
            <div class="w-full flex flex-row">
                <p class="box_numero">36</p>
                <Fechamento class="mgm2" titulo="div"></Fechamento>
            </div>

        <!-- Tag section fechamento -->
        <div class="w-full flex flex-row">
            <p class="box_numero">37</p>
            <Fechamento class="mgm1" titulo="section"></Fechamento>
        </div>
    </section>
</template>

<script setup>
    import Section from './tags/section.vue'
    import Fechamento from './tags/fechamento.vue'
    import Div from './tags/div.vue'
    import H3 from './tags/h3.vue'
    import Template from './tags/template.vue'
    import Img from './tags/img.vue'

    import {ref, onBeforeMount, computed} from 'vue'

    const tecnologias = ref()

    onBeforeMount(async()=>{
        fetch('./src/services/tecnologias.json')
        .then((response)=>{
            return response.json()            
        })
        .then((dados)=>{
            tecnologias.value = dados
        })
        .catch((error)=>{console.log(error)})
    })

    const cptdTecnologias = computed(()=>{
        return tecnologias.value
    })

</script>

<style scoped>

</style>