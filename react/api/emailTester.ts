import { EMAILS_ENDPOINT } from '../constants/constants'
async function fetchTemplateList() {
  try {
    const rawResponse = await fetch(EMAILS_ENDPOINT)

    const response = await rawResponse.json()

    return response.map((template: { Name: string; FriendlyName: string }) => {
      return {
        templateId: template.Name,
        templatename: template.FriendlyName,
      }
    })
  } catch (error) {
    console.log(error)
    return []
  }
}

async function sendEmail(template: string, json: any): Promise<boolean> {
  console.log({ template, json })
  try {
    const rawResponse = await fetch(EMAILS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ name: template, data: json }),
    })

    const response = await rawResponse.json()

    return response.status
  } catch (error) {
    console.log(error)
    return false
  }
}

export default {
  fetchTemplateList,
  sendEmail,
}
