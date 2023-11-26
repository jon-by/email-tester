

export async function emailsMiddleware(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { emails },
  } = ctx

  const response = await emails.getTemplates()

  ctx.status = 200
  ctx.body = response

  await next()
}
