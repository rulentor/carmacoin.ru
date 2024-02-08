<template>
  <div class="layout-topbar">
            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
                <a class="flex align-items-center" href="#"> 
				  <img :src="logoUrl" alt="" height="50" class="mr-0 lg:mr-2" /><span class="text-900 font-medium text-2xl line-height-3 mr-8">Кармакойн</span> 
				</a>
                <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 120px">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a href="/landing" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Главная</span>
                            </a>
                            <!--a @click="smoothScroll('#hero')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Главная</span>
                            </a-->							
                        </li>
                        <li>
                            <a href="/events" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Мероприятия</span>
                            </a>
                        </li>
                        <li>
                            <a href="/about" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>О нас</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contacts" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>Контакты</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Личный кабинет" class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"></Button>
                        <!--Button label="Register" class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"></Button-->
                    </div>
                </div>
            </div>  
    <!--router-link to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage()"/>
      <span>Админпанель</span>
    </router-link-->  
  </div>
</template>
<script async setup lang="ts">

</script>