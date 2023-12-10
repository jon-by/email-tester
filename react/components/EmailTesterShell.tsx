import SendEmail from './SendEmail'
import TemplateSelector from './TemplateSelector'
import { useTesterEmail } from '../context/EmailTesterContext'

import { Layout, PageHeader } from 'vtex.styleguide'
import { useEffect } from 'react'

const EmailTesterShell = () => {
  const { selectedTemplate, setSelectedTemplate } = useTesterEmail()

  useEffect(() => {
    console.log({ selectedTemplate })
  }, [selectedTemplate])
  return (
    <Layout>
      <PageHeader
        title="E-mails Tester"
        subtitle="Test your transactional emails without the need to place orders"
        linkLabel={selectedTemplate && 'Templates'}
        onLinkClick={() => setSelectedTemplate('')}
      ></PageHeader>
      {selectedTemplate ? <SendEmail /> : <TemplateSelector />}
    </Layout>
  )
}

export default EmailTesterShell
