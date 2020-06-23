import React from 'react'

import useBackendApi from 'utils/useBackendApi'
import ConfirmationModal from 'components/ConfirmationModal'

const DisconnectModal = ({ processor, className = '', afterDelete }) => {
  const { post } = useBackendApi({ authToken: true })

  return (
    <ConfirmationModal
      className={`${className || 'btn btn-outline-danger'}`}
      buttonText="Disconnect"
      confirmText={`Are you sure you want to disconnect ${processor.title}?`}
      confirmedText={`${processor.title} disconnected`}
      onConfirm={() => {
        let updatedConfig = {}
        switch (processor.id) {
          case 'stripe':
            updatedConfig = {
              stripeBackend: ''
            }
            break
          case 'uphold':
            updatedConfig = {
              upholdApi: '',
              upholdClient: '',
              upholdSecret: ''
            }
            break
          case 'web3':
            updatedConfig = {
              web3Pk: ''
            }
            break
          case 'printful':
            updatedConfig = {
              printful: ''
            }
            break
        }

        return post('/shop/config', {
          method: 'PUT',
          body: JSON.stringify(updatedConfig)
        })
      }}
      onSuccess={async () => {
        if (afterDelete) afterDelete()
      }}
    />
  )
}

export default DisconnectModal