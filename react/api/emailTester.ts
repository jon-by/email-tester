async function fetchTemplateList() {
  const url = '/_v/emails/list-templates'

  try {
    const rawResponse = await fetch(url)

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

export default {
  fetchTemplateList,
}
