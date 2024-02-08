<script lang="ts" setup>
import {ref} from 'vue'
//import { useToast } from "primevue/usetoast"

//const toast = useToast()
const total = ref(0)
const selectParams1 = ref()
const selectParams2 = ref()
//const selectParams3 = ref()
const params1 = ref([
    { name: 'Бренд-маркетинг', code: 'bm' },
    { name: 'Контент-маркетинг', code: 'cm' },
    { name: 'Аналитика', code: 'analytics' },
])
const params2 = ref([])
//const params3 = ref([])

const getLocalPrice = (name,code) => {
  const items = {
    moduleId: name,
    'swot-stat':40000,
    'trade-stat':50000,
    'companys-stat':40000,
    'ca-stat':40000,	  
    'bm-brandstrats':60000,
    'bm-brandbook':50000,
    'bm-id':35000,
    'bm-style':25000,	
    'content-strats':30000,
    'smm-strats':55000,
    'email-strats':15000,
    'website-strats':40000,	    
  }
  return items[code]
}

const injectData = (name,items) => {
//type itemsSelect = {
//  code: string;
//  name: string;
//  price: number;
//}

  const result = []
  //items.map((value, id) => {
  items.map((value) => {
	value.price = getLocalPrice(name, value.code)
	result.push(value)
  })
  params2.value = result
}

const initSelect = (name, value) => {
  const items = {
    params1: {
    analytics: [
	  {name: 'SWOT-Анализ', code: 'swot-stat'},
	  {name: 'Анализ рынка', code: 'trade-stat'},
	  {name: 'Анализ конкурентов', code: 'companys-stat'},
	  {name: 'Анализ целевой аудитории', code: 'ca-stat'},	  
	],
	bm: [
	  {name: 'Бренд-стратегия', code: 'bm-brandstrats'},
	  {name: 'Брендбук', code: 'bm-brandbook'},
	  {name: 'Айдентика', code: 'bm-id'},
	  {name: 'Фирменный стиль', code: 'bm-style'},	
	],
	cm: [
	  {name: 'Контент-стратегия', code: 'content-strats'},
	  {name: 'SMM', code: 'smm-strats'},
	  {name: 'email', code: 'email-strats'},
	  {name: 'вебсайт', code: 'website-strats'},	
	],
    },
  }

  if(name === 'params1') injectData(name, items.params1[value.code])
  
}

const totalPriceSelect = (name, value) => {
  console.log('total-price',name,value)
  total.value = value.price
}

const onChangeParams = (e, name) => {
  total.value = 0
  switch(name){
    case 'params1':
	  initSelect(name, e.value)
	break;
    case 'params2':
	  totalPriceSelect(name, e.value)
	break;	
  }
}
/*
const increaseCount = () => {
  count.value++

  if(count.value === 3) {
    toast.add({severity:'success', summary: 'PrimeVue', detail:'Welcome to PrimeVue + Create Vue', life: 3000})

    count.value = 0
  }
}
const count = ref(0)
*/
</script>

<template>
  <div class="grid rendered">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card m-2">
        <div class="formgrid grid">
          <div class="field col">
            <label for="params1" class='w-full'>Тип услуг</label>
            <Dropdown
			  name='select-params1'
			  v-model="selectParams1" 
			  :options="params1" 
			  optionLabel="name" 
			  placeholder="выбрать.." 
			  class="w-full xs:w-14rem " 
			  @change="onChangeParams($event, 'params1')"
			  data-shape='field'
			/>
          </div>
          <div class="field col">
            <label for="params2" class='w-full'>Вид услуги</label>
            <Dropdown
			  name='select-params2'
			  v-model="selectParams2" 
			  :options="params2" 
			  optionLabel="name" 
			  placeholder="выбрать.." 
			  class="w-full xs:w-14rem" 
			  @change="onChangeParams($event, 'params2')"
			  data-shape='field'
			/>
          </div>		  
		</div>
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Выбрано услуг</span>
            <div class="text-900 font-medium text-xl">
              от {{ total }} P.
            </div>
          </div>
          <!--div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-shopping-cart text-blue-500 text-xl" />
          </div-->
        </div>
      </div>	
	</div>

</div>
</template>

<style scoped>
.t396{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: content-box;
}
#rec682908552 .t396__artboard,
.t396__artboard{

  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
}
.t396__elem{
  width: 780px;
  left: 232px;
  top: 101px;
  height: 615px;
  position: absolute;
  box-sizing: border-box;
  display: table;
}
.t396__artboard.rendered .tn-elem{
  visibility: visible;
}
#rec682908552 .tn-elem[data-elem-id="1702909825198"]{
  z-index: 2;
  top: 101px;
  left: calc(50% - 600px + 210px);
  width: 780px;
  height: 615px;
}

.t396 .tn-atom{
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
#rec682908552 .tn-elem[data-elem-id="1702909825203"] .tn-atom,
.tn-atom{
  border-radius: 40px;
  background-color: #1c1a18;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}
.tn-elem[data-shape="field"]{
  width: 516px;
  left: 364px;
  top: 315px;
  height: 55px;
  border-radius: 40px;
  background-color: #fffffe;
  background-position: center center;
  border-color: transparent;
  border-style: solid;  
}
</style>
