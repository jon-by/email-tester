//react/adminExample.tsx
import { FC, useState, useEffect } from 'react'
import {
  Layout,
  PageHeader,
  Input,
  IconSearch,
  SelectableCard,
  Spinner,
} from 'vtex.styleguide'

import emails from './api/emailTester'
import { emailTemplateType } from './typings/emails'

const EmailTester: FC = () => {
  const [templateList, setTemplateList] = useState<emailTemplateType[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [filteredTemplates, setFilteredTemplates] = useState<
    emailTemplateType[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  async function getTemplateList() {
    try {
      setIsLoading(true)
      const templates = await emails.fetchTemplateList()
      setFilteredTemplates(templates)
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
      templateList.filter((template) =>
        template.templatename.includes(event.currentTarget.value)
      )
    )
  }

  useEffect(() => {
    getTemplateList()
  }, [])

  return (
    <Layout>
      <PageHeader
        title="E-mails Tester"
        subtitle="Test your transactional emails without the need to place orders"
      ></PageHeader>
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
    </Layout>
  )
}

export default EmailTester
