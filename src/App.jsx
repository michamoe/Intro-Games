import './App.css'
import { createClient } from 'contentful'
require('dotenv').config(); 

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})

const fetcher = async () => {
  const entryItems = await client.getEntries({ content_type: 'Artikel' })
  const tagItems = await client.getTags()

  const tags = tagItems.items.map((tag) => tag.name)

  // Process the data from the Contentful REST API into a neater object
  // If you want to avoid this step, consider using the GraphQL API
  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      Name: fields.name,
      Artikel: fields.Artikel,
    }
  })

  return { entries, tags }
}

function App() {
  

  return (
    <>
    {fetcher.map((e) => {
      <div>{e}</div>
    })}  
    </>
  )
}

export default App
