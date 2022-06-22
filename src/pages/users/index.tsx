import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Tbody, Text, useBreakpointValue} from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar' 
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../components/Pagination';
import Link from 'next/link'

export default function UserList () {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
        <Header />

            <Flex w='100%'my='6' maxWidth={1480} mx='auto' px='6'>    
        <Sidebar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center' >
                <Heading size='lg' fontWeight='normal' colorScheme='pink'>Usuarios</Heading>

                <Link href='/users/create' passHref >         
                <Button as='a' 
                size='sm' 
                fontSize='sm' 
                colorScheme='pink' 
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                    Criar novo usuario
                </Button>
                </Link>
                    </Flex>
                   <Table colorScheme='whiteAlpha'>
                    <Thead >
                        <Tr>
                            <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                <Checkbox colorScheme='pink' />
                            </Th>
                            <Th>Usuários</Th>
                            { isWideVersion && <Th>Data de cadastro</Th> }
                            <Th width='8'></Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        <Tr>
                            <Td px={['4', '4', '6']} >
                            <Checkbox colorScheme='pink' /> 
                            </Td>
                            <Td>
                            <Box>
                                <Text fontWeight='bold'>Vinicius Malheiro</Text>
                                <Text fontSize='small' color='gray.300'>vinicius.mlhro@gmail.com</Text>
                            </Box> 
                            </Td>
                           { isWideVersion && <Td>28 de maio, 2022</Td>} 
                            <Td>
                <Button as='a' 
                        size='sm' 
                        fontSize='sm' 
                        colorScheme='purple' 
                        leftIcon={<Icon as={RiPencilLine} fontSize='17' />}>
                        { isWideVersion ? 'Editar' : '' }
                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={['4', '4', '6']} >
                            <Checkbox colorScheme='pink' /> 
                            </Td>
                            <Td>
                            <Box>
                                <Text fontWeight='bold'>Vinicius Malheiro</Text>
                                <Text fontSize='small' color='gray.300'>vinicius.mlhro@gmail.com</Text>
                            </Box> 
                            </Td>
                             { isWideVersion && <Td>28 de maio, 2022</Td>}
                            <Td>
                <Button as='a' 
                        size='sm' 
                        fontSize='sm' 
                        colorScheme='purple' 
                        leftIcon={<Icon as={RiPencilLine} fontSize='17' />}>
                        { isWideVersion ? 'Editar' : '' }
                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={['4', '4', '6']} >
                            <Checkbox colorScheme='pink' /> 
                            </Td>
                            <Td>
                            <Box>
                                <Text fontWeight='bold'>Vinicius Malheiro</Text>
                                <Text fontSize='small' color='gray.300'>vinicius.mlhro@gmail.com</Text>
                            </Box> 
                            </Td>
                            { isWideVersion && <Td>28 de maio, 2022</Td>}
                            <Td>
                <Button as='a' 
                        size='sm' 
                        fontSize='sm' 
                        colorScheme='purple' 
                        leftIcon={<Icon as={RiPencilLine} fontSize='17' />}>
                        { isWideVersion ? 'Editar' : '' }
                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                   </Table> 
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}