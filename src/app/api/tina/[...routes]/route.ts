// Tina CMS API route - disabled until proper setup is completed
// This route requires Tina Cloud configuration and generated database client

export async function POST(_request: Request) {
  return new Response(
    JSON.stringify({ 
      error: 'Tina CMS not configured. Please set up Tina Cloud credentials.' 
    }), 
    { 
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}

export async function GET() {
  return new Response('Tina CMS API not configured', { status: 503 })
} 