import React, { useEffect } from 'react'

import { Text, Button, useDisclosure } from "@chakra-ui/react"
import { Modal, ModalOverlay,ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

const Announcements = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    useEffect(() => {
        if(!localStorage.getItem('announcement-6')){
            onOpen()
            localStorage.setItem('announcement-6', 'seen')
        }
    }, [])


    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>HSE Calendar</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>We're Back. </Text>
                </ModalBody>

                <ModalFooter>
                    
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Ok
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
    )
}

export default Announcements
