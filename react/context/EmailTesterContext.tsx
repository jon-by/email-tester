import { createContext, useState, useContext } from 'react'

import { emailTemplateType, TesterContextType } from '../typings/emails'

type TesterContextProps = {
  readonly children: JSX.Element
}

export const TesterData = createContext({} as TesterContextType)

export default function TesterContext({ children }: TesterContextProps) {
  const [templateList, setTemplateList] = useState<emailTemplateType[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredTemplates, setFilteredTemplates] = useState<
    emailTemplateType[]
  >([])

  return (
    <TesterData.Provider
      value={{
        templateList,
        setTemplateList,
        selectedTemplate,
        setSelectedTemplate,
        filteredTemplates,
        setFilteredTemplates,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TesterData.Provider>
  )
}

export function useTesterEmail() {
  const context = useContext(TesterData)
  return context
}
