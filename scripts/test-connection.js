const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '52egrwar',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk3cucpb43rgUMwUkp3ykg4aKWCS4eAuTBpTU3VUrFcXMAdCy5VN59idZEI5jiifcUrETqeU43H9HuVAkg3DiiijG6Iq6NrmaFIyL8ilPwdqQgZ2zzfS6Ded4rqXGbGZXI8hSbRofLBvEKvJOOiZnSP2zevRw7WpAD8cnKRjywLtb9cShJxC'
})

async function testConnection() {
  try {
    console.log('🔍 Testing Sanity connection...')
    
    // Test basic read access
    const churchInfo = await client.fetch('*[_type == "churchInfo"][0]')
    console.log('✅ Church info retrieved:', churchInfo?.name || 'No church info found')
    
    // Test the specific query that's failing
    const featuredSermon = await client.fetch(`*[_type == "sermon" && isFeatured == true][0] {
      ...,
      preacher->
    }`)
    console.log('✅ Featured sermon retrieved:', featuredSermon?.title || 'No featured sermon found')
    
    // Test services
    const services = await client.fetch('*[_type == "service"] | order(dayOfWeek asc, order asc)')
    console.log('✅ Services retrieved:', services.length, 'services found')
    
    console.log('🎉 All connections working!')
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message)
    
    if (error.message.includes('Unauthorized')) {
      console.log('💡 This looks like a token permissions issue.')
      console.log('🔧 Make sure your Sanity API token has "Viewer" or higher permissions.')
    }
    
    if (error.message.includes('CORS')) {
      console.log('💡 This looks like a CORS issue.')
      console.log('🔧 Make sure your domain is allowed in Sanity CORS settings.')
    }
  }
}

testConnection()