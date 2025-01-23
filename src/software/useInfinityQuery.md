



# 使用 vue-query 中的 useInfinityQuery 实现滚动请求

```vue


<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query'

export interface Props {
  list: any
}

const props = withDefaults(defineProps<Props>(), {
  list: [],
})

interface FormType {
  gameType?: string
  roomId?: string
  types: string
}
const form = ref<FormType>({
  types: '',
})

const game = ref(' ')
function changeGame() {
  if (game.value.trim()) {
    form.value.types = game.value
    const array = game.value.split(':')
    form.value.gameType = array[0]
    form.value.roomId = array[1]
  }
  else {
    form.value.gameType = ''
    form.value.roomId = ''
    form.value.types = ' '
  }
}

const range = ref({
  beginTime: 0,
  endTime: 0,
})
function updateRange(data: [Date, Date]) {
  range.value = {
    beginTime: data?.[0].getTime(),
    endTime: data?.[1].getTime(),
  }
}

async function getList({ pageParam = 1 }) {
  const request = useRequest()
  return await request('/getList', {
    params: {
      ...form.value,
      ...range.value,
      pageNo: pageParam,
      pageSize: 10,
    },
  }).then((response) => {
    return response.data.data
  })
}

const { status, data: moneyList, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery({
  queryKey: ['getList', form, range],
  queryFn: getList,
  initialPageParam: 1,
  getNextPageParam: (lastPage, _, lastPageParam) => {
    if (lastPage.records?.length === 0)
      return undefined

    return lastPageParam + 1
  },
})

const scrollRef = ref()
function onScroll() {
  if (scrollRef.value) {
    // console.log('b:',hasNextPage.value)
    // console.log('a:', scrollRef.value?.clientHeight, scrollRef.value?.scrollHeight, scrollRef.value?.scrollTop)
    if (scrollRef.value.clientHeight + scrollRef.value.scrollTop >= scrollRef.value.scrollHeight && hasNextPage.value)
      fetchNextPage()
  }
}

watch(scrollRef, () => {
  if (scrollRef.value)
    scrollRef.value.addEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="">
    <div class="flex pb-4">
      <DateTime
        ref="dateTimeRef"
        class="mr-5"
        :is-show-quick-set="false"
        @update:data="updateRange"
      />
      <el-select
        v-model="game" size="large" placeholder="请选择游戏" popper-class="my-select"
        @change="changeGame"
      >
        <el-option label="全部" value=" ">
          <el-button class="ml-2 btn" plain text :type="game === ' ' ? 'primary' : ''">
            全部
          </el-button>
        </el-option>
        <el-option
          v-for="item in list" :key="item.id" :label="item.roomName"
          :value="`${item.gameType}:${item.roomId}`"
        >
          <el-button
            class="ml-2 btn" plain text :type="game === `${item.gameType}:${item.roomId}` ? 'primary' : ''
            "
          >
            {{ item.roomName }}
          </el-button>
        </el-option>
      </el-select>
    </div>

    <el-skeleton v-if="status === 'pending'" :rows="8" animated />
    <el-empty v-else-if="!moneyList?.pages?.length" description="暂无数据" />
    <ul
      v-if="moneyList?.pages?.length" ref="scrollRef" v-loading="status === 'pending'"
      class="flex flex-col gap-4 h-[calc(100dvh-280px)] overflow-scroll"
    >
      <li
        v-for="(item, index) in moneyList?.pages?.map(({ records }) => records).reduce((acc, current) => acc.concat(current), [])"
        :key="index" class="border rounded-lg"
      >
        <div class="p-4 bg-slate-50 text-black text-base font-medium flex justify-between">
          <span>{{ item.id }}</span>
        </div>
        <div class="p-4 flex flex-col gap-2">
          <div class="grid gap-4 grid-cols-2">
            <div class="grid gap-1 grid-cols-2">
              <span class="text-stone-500 w-16">xxxx</span>
              <span>{{ item.aaa }}</span>
            </div>
            <div class="grid gap-1 grid-cols-2">
              <span class="text-stone-500">xxxx</span>
              <span>{{ item.bbb }}</span>
            </div>
          </div>
          <div class="grid gap-4 grid-cols-2">
            <div class="grid gap-1 grid-cols-2">
              <span class="text-stone-500 w-16">xxxx</span>
              <span>{{ item.ccc }}</span>
            </div>
            <div class="grid gap-1 grid-cols-2">
              <span class="text-stone-500">xxx</span>
              <span>{{ getRealMoney(item.ddd, 0) }}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <span class="text-stone-500 w-16">xxx</span>
            <span>{{ item.xxx }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>



```