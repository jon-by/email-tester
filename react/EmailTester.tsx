//react/adminExample.tsx
import React, { FC } from 'react'
import { Layout, PageHeader, Button } from 'vtex.styleguide'


const EmailTester: FC = () => {


    async function getTemplateList() {
        const url = "/_v/viaCep"


        try {
            const rawResponse = await fetch(url, {
                method: "POST",
            })

            const response = await rawResponse.json()

            console.log({ response })

        } catch (error) {
            console.log(error)
        }


    }



    return (
        <Layout>
            <PageHeader title="E-mail Tester" />

            <Button onClick={getTemplateList}>Clique</Button>
        </Layout>
    )
}

export default EmailTester