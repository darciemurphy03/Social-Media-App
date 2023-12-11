import { Container, Flex, VStack, Box, Image} from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
    return (
        <Flex minH={"100vH"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            
            {/* Left-hand side */}
            <Box display={{ base: "none", md: "block" }}>
                <Image src='/public/auth.png' h={650} alt='Phone Image' />
            </Box>
            
            {/* Right-hand side */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm />
                <Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src='public/playstore.png' h={"10"} alt='Playstore Logo' />
                    <Image src='public/microsoft.png' h={"10"} alt='Microsoft Logo' />
                </Flex>
            </VStack>
            </Flex>
                
            </Container>

            
        </Flex>
    );
};

export default AuthPage;
