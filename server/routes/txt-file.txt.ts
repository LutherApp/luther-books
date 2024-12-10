import { useRoute } from 'vue-router'

export default defineEventHandler(async (event) => {
  const response = await fetch('http://localhost:3000/txt/text.txt')
  const data = await response.text()
  console.log(data)

  // onMounted(() => {
    const rute = useRoute()
    // const urlParams = useRoute().query.file
    console.log('UrlParams: ' + rute.params )
  // })
  
  // getQueryParams
  

  await appendHeader(event, 'Content-Type', 'text/plain')

  return `
    User-agent: *
    Allow: /
    `
})

