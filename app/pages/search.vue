<script setup lang="ts">
const { data: page } = await useAsyncData('search', () => queryContent('/search').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

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

const columns = [{
  key: 'title',
  label: 'Title',
  sortable: true,
  direction: 'desc' as const
}, {
  key: 'description',
  label: 'Description',
  sortable: true,
  direction: 'desc' as const
}, {
  key: 'note',
  label: 'Note',
  sortable: true,
  direction: 'desc' as const
}]

const rows = [
  {
    id: 1,
    title: 'Dr. Martin Luthers Werke (Ger)',
    description: 'Weimar Edition',
    note: 'pdf/doc/flip',
    url: 'http://www.lutherdansk.dk/WA/D.%20Martin%20Luthers%20Werke,%20Weimarer%20Ausgabe%20-%20WA.htm#ab3'
  },
  {
    id: 2,
    title: 'St. Louis Edition of Luther´ work',
    description: 'All 25 volumes on archive.org',
    note: 'pdf/doc/txt etc.',
    url: 'https://backtoluther.blogspot.com/2022/04/st-louis-edition-digitized-text-now-in.html'
  },
  {
    id: 3,
    title: '63 of 82 volums online',
    description: 'annas-archive.org',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Martin%20Luther%20in%20English.htm'
  },
  {
    id: 4,
    title: 'Sermons, Commentary & other Works',
    description: 'godrules.net/library/luther',
    note: 'html',
    url: 'https://godrules.net/library/luther/luther.htm'
  },
  {
    id: 5,
    title: 'Search for Luther on hathitrust.org',
    description: 'hathitrust.org',
    note: 'html',
    url: 'https://catalog.hathitrust.org/Search/Home?adv=1&setft=true&ft=ft&lookfor%5B%5D=Luther%2C+Martin%2C+1483-1546.&type%5B%5D=author&fqor-language%5B%5D=English'
  },
  {
    id: 6,
    title: 'The Book of Concord',
    description: 'www.lutheranlibrary.org',
    note: 'pdf',
    url: 'https://www.lutheranlibrary.org/pdf/250-jacobs-book-of-concord.pdf'
  },
  {
    id: 7,
    title: 'Book of Concord',
    description: 'With numbered sections (BEST)',
    note: 'html',
    url: 'https://thebookofconcord.org/three-universal-or-ecumenical-creeds/'
  },
  {
    id: 8,
    title: 'The Book of Concord',
    description: 'bookofconcord.org',
    note: 'html',
    url: 'https://bookofconcord.org/'
  },
  {
    id: 9,
    title: 'Christian Dogmatics',
    description: 'Mueller´ version of Pieper´ work',
    note: 'markdown',
    url: 'https://christian-dogmatics.vercel.app'
  },
  {
    id: 10,
    title: 'Christian Dogmatics',
    description: 'archive.org',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/muellerchristiandogmatics/mode/2up'
  },
  {
    id: 11,
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. I',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/christliche-dogmatik-vol-1-2023-10-31-deep-l-en-no-highlight/mode/2up'
  },
  {
    id: 12,
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. II',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/pieper-cdk-2-001-672-deep-l-en/mode/2up'
  },
  {
    id: 13,
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. III',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/cdk-vol-3-deep-l-en-corrected-2023-11-28-no-shading/mode/2up'
  },
  {
    id: 14,
    title: 'Dr. Francis Pieper`s Christian Dogmatics Study Guide',
    description: 'CSLScholar',
    note: 'pdf',
    url: 'https://scholar.csl.edu/christiandogmatics/'
  },
  {
    id: 15,
    title: 'The doctrinal theology of the Evangelical Lutheran Church',
    description: 'Schmid, Heinrich',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/doctrinaltheolog00schmuoft'
  },
  {
    id: 16,
    title: 'Concordia Triglotta',
    description: 'St. Louis (1921)',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/concordiatriglot0000unse/mode/2up'
  },
  {
    id: 17,
    title: 'Historical Introductions to Concordia Triglotta',
    description: 'F. Bente (1921)',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/bente-historical-introductions-triglotta-from-ocr2/mode/1up'
  },
  {
    id: 18,
    title: 'Systematic Theology Vol 1',
    description: 'Charles Hodge (1872)',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematic-theology-vol-1/mode/2up'
  },
  {
    id: 19,
    title: 'Systematic Theology Vol 2',
    description: 'Charles Hodge (1872)',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematic-theology-vol-2/mode/2up'
  },
  {
    id: 20,
    title: 'Systematic Theology Vol 3',
    description: 'Charles Hodge (1872)',
    note: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematictheolo014257mbp/mode/2up'
  },
  {
    id: 21,
    title: 'Index of Parts, Chapters, Members, Sections, and Questions',
    description: 'Johannes Andreas Quenstedt (1528–1590)',
    note: 'pdf',
    url: 'https://trhalvorson.com/wp-content/uploads/2023/04/Quenstedt_Index.pdf'
  },
  {
    id: 22,
    title: 'Small catechism',
    description: 'luther-books.vercel.app',
    note: 'markdown',
    url: '../books/the-small-catechism'
  },
  {
    id: 23,
    title: 'Small catechism (by lcms)',
    description: 'cph.org',
    note: 'html',
    url: 'https://catechism.cph.org/'
  },
  {
    id: 24,
    title: 'The 95 Theses',
    description: 'luther-books.vercel.app',
    note: 'markdown',
    url: '../books/the-95-theses'
  },
  {
    id: 25,
    title: 'Church Postil (Da & Eng)',
    description: 'www.lutherdansk.dk',
    note: 'html/pdf',
    url: 'http://www.lutherdansk.dk/KP%20-%20enkeltpr%C3%A6dikener/KP%20-%20Forside%20med%20indeks/index.htm'
  },
  {
    id: 26,
    title: 'Church Postil',
    description: 'Advents Postil',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Web-advent%20engelsk-KP/default.htm'
  },
  {
    id: 27,
    title: 'Church Postil',
    description: 'Christmas Postil',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Web-Julepostillen%20AM/default.htm'
  },
  {
    id: 28,
    title: 'Church Postil',
    description: 'Lent Postil',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Web-Fastepostillen%20AM/index.htm'
  },
  {
    id: 29,
    title: 'Church Postil',
    description: 'Summer Postil (Easter)',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Web-sommerpostillen%20AM/default.htm'
  },
  {
    id: 30,
    title: 'Church Postil',
    description: 'Trinity Postil I (Early Autumn)',
    note: 'html',
    url: 'http://www.lutherdansk.dk/1%20Web-AM%20-%20Trinity%201-12/index.htm'
  },
  {
    id: 31,
    title: 'Church Postil',
    description: 'Trinity Postil II (Late Autumn)',
    note: 'html',
    url: 'http://www.lutherdansk.dk/Web-Trinitatis%20AM/index.htm'
  }
]

const selected = ref([rows[1]])

async function openUrl(row) {
  const index = selected.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
    await navigateTo(row.url, { open: { target: '_blank' } })
  } else {
    selected.value.splice(index, 1)
    await navigateTo(row.url, { open: { target: '_blank' } })
  }
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
</script>

<template>
  <div v-if="page">
    <ULandingSection>
      <UInput
        v-model="q"
        placeholder="Filter books..."
      />

      <UTable
        :columns="columns"
        :rows="filterRows"
        @select="openUrl"
      />
    </ULandingSection>
  </div>
</template>
