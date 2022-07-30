import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Tbody, Text, useBreakpointValue, Spinner} from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar' 
import { RiAddLine } from 'react-icons/ri'
import { Pagination } from '../components/Pagination';
import Link from 'next/link'
import { useUsers } from '../../services/hooks/useUsers';

export default function UserList () {
    const { data, isLoading, isFetching, error } = useUsers()


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center' >
                        <Heading size='lg' fontWeight='normal' colorScheme='pink'>
                            Usuarios

                            {!isLoading && isFetching && <Spinner fontSize='sm' color='gray.500' ml='4'/>}
                        </Heading>

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
                { isLoading ? (
                    <Flex justify='center' >
                        <Spinner />
                    </Flex>
                ) : error ? (
                    <Flex>
                        <Text>Falha ao obter dados dos usuarios</Text>
                    </Flex>
                ) : (
                    <>
                    <Table colorScheme='whiteAlpha'>
                    <Thead >
                        
                    </Thead>
                    <Tbody > 
                        {data.map(user => {
                            return (
                                <Tr key={user.id} >
                            <Td px={['4', '4', '6']} >
                            <Checkbox colorScheme='pink' /> 
                            </Td>
                            <Td>
                            <Box>
                                <Text fontWeight='bold'>{user.name}</Text>
                                <Text fontSize='small' color='gray.300'>{user.email}</Text>
                            </Box> 
                            </Td>
                            { isWideVersion && <Td>{user.createdAt}</Td>}
                        </Tr>
                            )
                        })}
                    </Tbody>
                   </Table> 
                    <Pagination />
                    </>
                )}
                </Box>
            </Flex>
        </Box>
    );
}