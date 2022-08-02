import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Link, Tbody, Text, useBreakpointValue, Spinner} from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar' 
import { RiAddLine } from 'react-icons/ri'
import { Pagination } from '../components/Pagination';
import NextLink from 'next/link'
import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';
import { GetServerSideProps } from 'next';

export default function UserList ({ users }) {
    const [ page, setPage ] = useState(1)

    console.log(page)

    const { data, isLoading, isFetching, error } = useUsers(page, {
        initialData: users,
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    async function handlePrefetchUser(userId: string) {
       await queryClient.prefetchQuery(['user', userId ], async () => {
         const response = await api.get(`users/${userId}`)
        
         return response.data;
       }, {
        staleTime: 1000 * 60 * 10 //10 min
       })
    }

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

                        <NextLink href='/users/create' passHref >
                            <Button as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                                Criar novo usuario
                            </Button>
                        </NextLink>
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
                        {data.users.map(user => {
                            return (
                                <Tr key={user.id} >
                            <Td px={['4', '4', '6']} >
                            <Checkbox colorScheme='pink' /> 
                            </Td>
                            <Td>
                            <Box>
                                <Link color='pink.600' onMouseEnter={() => handlePrefetchUser(user.id)} >
                                    <Text fontWeight='bold'>{user.name}</Text>
                                </Link>
                                <Text fontSize='small' color='gray.300'>{user.email}</Text>
                            </Box> 
                            </Td>
                            { isWideVersion && <Td>{user.createdAt}</Td>}
                        </Tr>
                            )
                        })}
                    </Tbody>
                   </Table> 
                    <Pagination 
                    totalCountOfRegisters={data.totalCount}
                    currentPage={page}
                    onPageChange={setPage}
                    />
                    </>
                )}
                </Box>
            </Flex>
        </Box>
    );
}


export const getServerSideProps: GetServerSideProps = async () => {
    
    const {users, totalCount} = await getUsers(1)

    return {
        props: {

        }
    }
}