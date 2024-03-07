<template>
  <main class="w-full h-full flex flex-col fixed">

    <section class="w-full h-[calc(100%_-_110px)] flex flex-row">

      <!-- Barra lateral que contém os ícones -->
      <IconesLateral></IconesLateral>

      <!-- Lateral direita que comtém os arquivos -->
      <PastasArquivos @selectComponents="componentSelect"></PastasArquivos>

      <!-- Container da página principal -->
      <section class="w-full h-full flex flex-col overflow-x-hidden">

        <!-- Barra superior da página principal -->
        <Selecionado @voltarHome="componentSelect" :componente="cptdCompSelecionado"></Selecionado>

        <!-- Página principal -->
        <div v-if="cptdCompSelecionado === 'Home'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Cabecalho></Cabecalho>

          <SobreMim></SobreMim>

          <Tecnologias></Tecnologias>

          <Projetos></Projetos>

          <Contato></Contato>

          <Rodape></Rodape>

        </div>

        <!-- componente Cabecalho -->
        <div v-if="cptdCompSelecionado === 'Cabecalho'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Cabecalho></Cabecalho>

        </div>

        <!-- componente SobreMim -->
        <div v-if="cptdCompSelecionado === 'SobreMim'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <SobreMim></SobreMim>

        </div>

        <!-- componente Tecnologias -->
        <div v-if="cptdCompSelecionado === 'Tecnologias'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Tecnologias></Tecnologias>

        </div>

        <!-- componente Projetos -->
        <div v-if="cptdCompSelecionado === 'Projetos'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Projetos></Projetos>

        </div>

        <!-- componente Contatos -->
        <div v-if="cptdCompSelecionado === 'Contatos'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Contato></Contato>

        </div>

        <!-- componente Rodape -->
        <div v-if="cptdCompSelecionado === 'Rodape'"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
        >
          <Rodape></Rodape>

        </div>

        <!-- componente Mensagem -->
        <div v-if="cptdCompSelecionado === null"
          class="w-full flex flex-col principal pb-70 overflow-y-auto"
          @voltarHome="componentSelect"
        >
          <Mensagem></Mensagem>
        </div>

      </section>

    </section>
    
  </main>
</template>

<script setup>
  import IconesLateral from '../components/icones_lateral.vue'
  import PastasArquivos from '../components/pastas_arquivos.vue'
  import Selecionado from '../components/selecionado.vue'
  import Cabecalho from '../components/cabecalho.vue'
  import SobreMim from '../components/sobre_mim.vue'
  import Tecnologias from '../components/tecnologias.vue'
  import Projetos from '../components/projetos.vue'
  import Contato from  '../components/contato.vue'
  import Rodape from '../components/rodape.vue'
  import Mensagem from '../components/mensagem.vue'

  import {ref, computed} from 'vue'

  const comp_selecionado = ref('Home')

  const componentSelect = (payload)=>{
    comp_selecionado.value = payload
  }

  const cptdCompSelecionado = computed(()=>{
    return comp_selecionado.value
  })
</script>

<style scoped>
      /* Works on Firefox */
.principal {
  scrollbar-width: thin;
  scrollbar-color: #292828 #121212;
}

/* Works on Chrome, Edge, and Safari */
.principal::-webkit-scrollbar {
  width: 12px;
}

.principal::-webkit-scrollbar-track {
  background: #121212;
}

.principal::-webkit-scrollbar-thumb {
  background-color: #292828;
  border-radius: 20px;
  border: 3px solid #121212;
}
</style>
