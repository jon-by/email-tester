export type emailTemplateType = {
  templateId: string
  templatename: string
}

export type TesterContextType = {
  selectedTemplate: string
  setSelectedTemplate: (templateId: string) => void
  templateList: emailTemplateType[]
  setTemplateList: (templateList: emailTemplateType[]) => void
  filteredTemplates: emailTemplateType[]
  setFilteredTemplates: (templateList: emailTemplateType[]) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}
