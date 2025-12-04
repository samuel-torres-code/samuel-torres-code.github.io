import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://api.issabella.club/containers');
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch containers' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60', // Cache for 60 seconds
      },
    });
  } catch (error) {
    console.error('Error proxying containers request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}