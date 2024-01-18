//react/adminExample.tsx
import { FC } from 'react'
import TesterContext from './context/EmailTesterContext'
import EmailTesterShell from './components/EmailTesterShell'

import './styles.global.css'

const EmailTester: FC = () => {
  return (
    <TesterContext>
      <EmailTesterShell />
    </TesterContext>
  )
}

export default EmailTester
