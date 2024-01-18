import { json } from 'co-body'

export async function parsePayload(ctx: Context, next: () => Promise<unknown>) {
  const reqBody = await json(ctx.req)

  ctx.state.body = reqBody
  await next()
}
