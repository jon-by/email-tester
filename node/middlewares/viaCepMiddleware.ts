

export async function viaCepMiddleware(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { viaCep },
  } = ctx



  const response = await viaCep.getTemplates()

  ctx.status = 200
  ctx.body = {
    response,
  }

  await next()
}
