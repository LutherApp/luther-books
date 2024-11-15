<script setup lang="ts">
import rows from '~~/utils/dataTable1.json'

const { data: page } = await useAsyncData('search', () => queryContent('/search').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// const { data, pending } = await useLazyFetch(() => `/api/users`)

const clickElement = useClickElement()

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Saas')

/**
 * Table
 * Source:
 * https://ui.nuxt.com/components/table
 */

const columns = [
  /*
  {
    key: 'tag',
    label: 'Tag',
    sortable: true,
    direction: 'desc' as const
  },
  {
    key: 'category',
    label: 'Category',
    sortable: true,
    direction: 'desc' as const
  },
  */
  {
    key: 'title',
    label: 'Title',
    sortable: true,
    direction: 'desc' as const
  },
  {
    key: 'description',
    label: 'Description',
    sortable: true,
    direction: 'desc' as const
  },
  {
    key: 'format',
    label: 'format',
    sortable: true,
    direction: 'desc' as const
  },
  /*
  {
    key: 'note',
    label: 'Note',
    sortable: true,
    direction: 'desc' as const
  }
    */
]

const selectedColumns = ref([...columns])

const selected = ref([rows[1]])

/**
 * This function is necessary and have to be combined with setTimeout below.
 */
function elementTarget(event) {
  clickElement.value = event.target.tagName
  // console.log(event.target.tagName + ' is clicked and saved; with use of composable useClickElement.')
  // timeout need to be added before this value is saved and can be used of the next function.
}

function openUrl(row) {
  const index = selected.value.findIndex((item) => item.id === row.id)
  setTimeout(() => {
    if (clickElement.value == 'TD') {
      if (index === -1) {
        selected.value.push(row)
        navigateTo(row.url, { open: { target: '_blank' } })
      } else {
        selected.value.splice(index, 1)
        navigateTo(row.url, { open: { target: '_blank' } })
      }
    }
  }, 100)
}

const q = ref('')

const filterRows = computed(() => {
  if (!q.value) {
    return rows
  }

  return rows.filter((rows) => {
    return Object.values(rows).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const expand = ref({
  openedRows: [rows[0]],
  row: {}
})
</script>

<template>
  <div v-if="page">
    <ULandingSection>
      <div class="flow-root">
        <UInput
          v-model="q"
          placeholder="Filter books..."
          class="float-left"
        />

        <!--
        <USelect
          v-model="pageCount"
          :options="[3, 5, 10, 20, 30, 40]"
          class="float-right mx-1"
          size="xs"
        />
        -->

        <USelectMenu
          v-model="selectedColumns"
          :options="columns"
          multiple
          class="float-right w-32"
        >
          <UButton
            icon="i-heroicons-view-columns"
            color="gray"
            size="xs"
            class="float-right"
          >
            Columns
          </UButton>
        </USelectMenu>
      </div>
      <UTable
        v-model:expand="expand"
        :columns="selectedColumns"
        :rows="filterRows"
        @click="elementTarget"
        @select="openUrl"
      >
        <!--
        <template #caption>
          <caption>{{ tableName }}</caption>
        </template>
        -->
        <template #expand="{ row }">
          <div class="p-4">
            <!-- <pre>{{ row }}</pre> -->
            <pre>Tag:         {{ row.tag }}</pre>
            <pre>Category:    {{ row.category }}</pre>
            <pre>Title:       {{ row.title }}</pre>
            <pre>Description: {{ row.description }}</pre>
            <pre>Format:      {{ row.format }}</pre>
            <pre>Url:         <a :href="row.url" target="_blank">{{ row.url }}</a></pre>
            <pre>Note:        {{ row.note }}</pre>
          </div>
        </template>
      </UTable>
    </ULandingSection>
  </div>
</template>
