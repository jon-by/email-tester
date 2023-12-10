import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'
import Emails from './emails'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get emails() {
    return this.getOrSet('emails', Emails)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }
}
