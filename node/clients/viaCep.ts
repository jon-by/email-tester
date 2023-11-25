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

export default class ViaCep extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, options && pipe(withCookieAsHeader(context))(options))
  }


  public async getTemplates(): Promise<any> {

    console.log({ token: this.context.authToken })

    return this.http.get(`/api/template-render/pvt/templates/getlist`)
  }
}