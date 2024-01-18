import { useEffect } from 'react'

import emails from '../api/emailTester'

import { useTesterEmail } from '../context/EmailTesterContext'
import { Input, IconSearch, SelectableCard, Spinner } from 'vtex.styleguide'

import { emailTemplateType } from '../typings/emails'

const TemplateSelector = () => {
  const {
    setIsLoading,
    filteredTemplates,
    isLoading,
    selectedTemplate,
    setFilteredTemplates,
    setSelectedTemplate,
    setTemplateList,
    templateList,
  } = useTesterEmail()

  async function getTemplateList() {
    try {
      setIsLoading(true)
      const templates: emailTemplateType[] = await emails.fetchTemplateList()
      setFilteredTemplates(templates.slice(0, 10))
      setTemplateList(templates)

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  function isSelected(opt: string) {
    return opt === selectedTemplate
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilteredTemplates(
      templateList
        .filter(
          (template) =>
            template.templatename.includes(event.currentTarget.value) ||
            template.templateId.includes(event.currentTarget.value)
        )
        .slice(0, 10)
    )
  }

  useEffect(() => {
    getTemplateList()
  }, [])
  return (
    <>
      <div className="mb5">
        <Input
          label="Search Template"
          onChange={handleChange}
          prefix={<IconSearch />}
        />
      </div>

      {isLoading ? (
        <Spinner size={40} />
      ) : (
        filteredTemplates.map((template) => {
          return (
            <SelectableCard
              key={template.templateId}
              hasGroupRigth
              noPadding
              selected={isSelected(template.templateId)}
              onClick={() => setSelectedTemplate(template.templateId)}
            >
              <div className="pa2">
                <div className="f3 tc">{template.templatename}</div>
              </div>
            </SelectableCard>
          )
        })
      )}
    </>
  )
}

export default TemplateSelector
