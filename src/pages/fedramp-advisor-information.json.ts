import type { APIRoute } from 'astro';
import { advisorInfo } from '@/data/advisor-info';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(advisorInfo, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};