import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

const app = new Frog({
    basePath: '/api',
 })



export const GET = handle(app)
export const POST = handle(app)