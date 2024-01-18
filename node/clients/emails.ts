import { JanusClient, InstanceOptions, IOContext } from '@vtex/api'
import { pipe } from 'ramda'

const withCookieAsHeader = (context: IOContext) => (
  options: InstanceOptions
): InstanceOptions => ({
  ...options,
  headers: {
    VtexIdclientAutCookie: context.authToken,
    ...(options?.headers ?? {}),
  },
})

export default class Emails extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, options && pipe(withCookieAsHeader(context))(options))
  }

  public async getTemplates(): Promise<any> {
    return this.http.get(`/api/template-render/pvt/templates/getlist`)
  }

  public async sendMail({ name, data }: { name: string; data: any }) {
    const result = await this.http.postRaw(
      '/api/mail-service/pvt/sendmail',
      {
        templateName: name,
        jsonData: data,
      },
      {
        headers: {
          VtexIdclientAutCookie: this.context.authToken,
        },
      }
    )

    return result.status
  }
}
