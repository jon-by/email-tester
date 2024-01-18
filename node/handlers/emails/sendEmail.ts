export async function sendEmail(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { emails },
    state: { body },
  } = ctx

  try {
    const { name, data } = body

    const response = await emails.sendMail({ name, data })

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 500
    ctx.body = { error }
  }

  await next()
}
