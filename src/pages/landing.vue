<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLayout } from '~/composables/layout'
//import AppConfig from '@/layout/AppConfig.vue'
import PostService from '~/service/PostService'

const { layoutConfig } = useLayout()
const postService = new PostService()
const posts = ref()
const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    })
}
const logoUrl = computed(() => {
    return ''
	//`layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
})

function go() {
  if (post.value)
    router.push(`/post/${encodeURIComponent(post.value)}`)
}
onMounted( async () => {
    postService.getPosts().then((data) => (posts.value = data))
})
</script>

<template>
<div>
            <div
                id="hero"
                class="flex flex-column pt-6 px-4 lg:px-10 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
            >
                <div class="mx-6 md:mx-8 mt-0 md:mt-6">
                    <h2 class="text-6xl font-bold text-gray-900 line-height-2">
					  Зарабатывай кармакоины за мероприятия
					</h2>
                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Участвуй чтобы собрать их все!</p>
                    <Button label="Начни собирать" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"></Button>
					<Button label="Смотреть видео" class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"></Button>
                </div>
                <div class="flex justify-content-center md:justify-content-end">
                    <img src="/images/landing/screen-1.png" alt="Hero Image" class="w-9 md:w-auto max-h-5rem" />
                </div>
            </div>

            <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2">Текущие мероприятия</h2>
                    </div>

                    <div class="col-12 md:col-6 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Предложить свою акцию</h5>
                                <span class="text-600">Зарабатывай кармакойны за участие</span>
                            </div>
                        </div>
                    </div>
                    <template v-for="item in posts">
                    <div class="col-12 md:col-6 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                      <Card style="width: 25rem; overflow: hidden">
                        <template #header>
						  <router-link :to="{ name: '/post/[post]', params: { post: 'post-'+ item.id }}">
						  <!--router-link to="/post/post-1" :params="{post: 'post-1'}"-->
                          <img alt="user header" :src="`/images/demo/${item.image}`" class='max-h-14rem w-full'/>
						  </router-link>
                        </template>
                        <template #title>{{ item.title }}</template>
                        <template #subtitle>{{ item.typeId }}</template>
                        <template #content>
                          <p class="m-0">
                            {{ item.content }}
                          </p>
                        </template>
                        <template #footer>
                          <div class="flex gap-3 mt-1">
						    <Button type="button" class="w-full" label="carmacoin" icon="pi pi-bitcoin" severity="secondary" :badge="item.cost" badgeSeverity="info" />
                            <Button label="Участвую!" class="w-6" />
                          </div>
                        </template>
                      </Card>
                    </div>
					</template>



                 

                    <div
                        class="col-12 mt-8 mb-8 p-2 md:p-8"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                            <h3 class="text-gray-900 mb-2">Наша миссия</h3>
                            <span class="text-gray-600 text-2xl">Творить добро и дать зарабатывать другим</span>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style="max-width: 800px">
                               Почему Мы.
                            </p>
                            <img src="/images/landing/peak-logo.svg" class="mt-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">Тарифный план</h2>
                    <span class="text-600 text-2xl">Подписка в один клик...</span>
                </div>

                <div class="grid justify-content-between mt-8 md:mt-0">
                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Волонтёр</h3>
                            <img src="/images/landing/free.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$0</span>
                                <span class="text-600">per month</span>
                                <Button label="Get Started" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Дружинник</h3>
                            <img src="/images/landing/startup.svg" class="w-10 h-10 mx-auto" alt="startup" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$1</span>
                                <span class="text-600">per month</span>
                                <Button label="Try Free" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">Инвестор</h3>
                            <img src="/images/landing/enterprise.svg" class="w-10 h-10 mx-auto" alt="enterprise" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">$999</span>
                                <span class="text-600">per month</span>
                                <Button label="Get a Quote" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Responsive Layout</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Unlimited Push Messages</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">50 Support Ticket</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">Free Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />
                            <h4 class="font-medium text-3xl text-900">Кармакойн</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Меню</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">О нас</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Новости</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Стать волонтёром</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Стать инвестором</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>
<route lang="yaml">
meta:
  layout: landing
  bgColor: yellow
</route>
<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
