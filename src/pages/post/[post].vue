<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PostService from '~/service/PostService'

const postService = new PostService()
const props = defineProps<{ post: string }>()
const router = useRouter()
const posts = ref()
const post = ref()
const items = ref([])
const user =  {
  post: '',
  posts: [
    'post-1',
	'post-2',
  ]
} //useUserStore()
//const { t } = useI18n()

watchEffect(() => {
  //user.setNewName(props.name)
  post.value = router.currentRoute.value.params.post
  console.log('Post',post.value)
})
onMounted( async () => {
    postService.getPosts().then((data) => {
	  posts.value = data
	  items.value = posts.value.filter((val) => ('post-'+val.id) === post.value)
	  //posts.value.map((value, key) => {
	  //  console.log('posts',key,value.image)
	  //})
	  console.log('posts',items.value)
	  
	})
})
</script>

<template>
    <template v-if="items.length">
            <div id="features" class="py-2 px-2 lg:px-4 mt-2 mx-0 lg:mx-4">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2">Выбранное мероприятие</h2>
                    </div>

                    <template v-for="item in items">
                    <div class="col-12 md:col-6 lg:col-6 p-0 lg:pr-4 lg:pb-4 mt-4 lg:mt-0">
                      <Card style="overflow: hidden" class='w-full'>
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
    </template>
</template>
