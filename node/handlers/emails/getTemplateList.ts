export async function getTemplateList(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { emails },
  } = ctx

  try {
    const response = await emails.getTemplates()

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 500
    ctx.body = { error }
  }

  await next()
}
