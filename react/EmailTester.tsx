//react/adminExample.tsx
import React, { FC, useState, useEffect } from 'react'
import { Layout, PageHeader, PageBlock, InputSearch } from 'vtex.styleguide'

import emails from './api/emailTester'


const EmailTester: FC = () => {

    const [templateList, setTemplateList] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    async function getTemplateList() {
        const templates = await emails.fetchTemplateList()

        setTemplateList(templates)
    }


    useEffect(() => {
        getTemplateList()
        console.log(templateList)

    }, [])


    return (
        <Layout>
            <PageHeader
                title="E-mails Tester"
                subtitle="Test your transactional emails without the need to place orders"
            >

            </PageHeader>

            <div className="bg-muted-5 pa2">
                <PageBlock variation="full">
                    <InputSearch
                        placeholder="Search..."
                        value="=B"
                        label="Small"
                        size="small"
                        onChange={() => console.log("changed")}
                        onSubmit={(e: any) => {
                            e.preventDefault()
                            console.log('submitted! search this: ', e.target.value)
                        }}
                    />
                </PageBlock>
            </div>
        </Layout>
    )
}

export default EmailTester