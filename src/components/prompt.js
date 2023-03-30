import React from 'react'
import usePWA from 'react-pwa-install-prompt'
 
const Example = () => {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()
 
 
  const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      console.log('app installed');
    }
  }
 
const renderInstallButton = () => {
    if (isInstallPromptSupported && isStandalone)
 
      return (
        <button onClick={onClickInstall}>Prompt PWA Install</button>
      )
    return null
  }
 
  return (<div>
    <h2>PWA Infos</h2>
    <p>Is Install Prompt Supported ? {isInstallPromptSupported ? 'true' : 'false'}</p>
    <p>Is Standalone ? {isStandalone ? 'true' : 'false'}</p>
    {renderInstallButton()}
  </div>)
}

export default Example