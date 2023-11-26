
import { emailTemplateType } from "../typings/emails"


async function fetchTemplateList() {
    const url = "/_v/emails/list-templates"

    try {
        const rawResponse = await fetch(url)

        const response = await rawResponse.json()

        return response.map((template: emailTemplateType) => {
            return {
                templateId: template.Name,
                templatename: template.FriendlyName
            }
        })

    } catch (error) {
        console.log(error)
        return []
    }
}

export default {
    fetchTemplateList
}