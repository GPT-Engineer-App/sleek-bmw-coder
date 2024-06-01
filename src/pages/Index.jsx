import { Container, Box, VStack, HStack, Text, Button, IconButton, Image, Input, Textarea, FormControl, FormLabel, Grid, GridItem, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bgImage="url('https://images.unsplash.com/photo-1602524816075-1d0b6e3e1b9b')" bgSize="cover" bgPos="center" color="white" py={40} textAlign="center">
        <VStack spacing={6}>
          <Text fontSize="5xl" fontWeight="extrabold">
            Zakoduj BMW
          </Text>
          <Text fontSize="2xl">Profesjonalne kodowanie i personalizacja BMW</Text>
          <Button colorScheme="teal" size="lg" variant="solid">
            Skontaktuj się z nami
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box py={20} bg="gray.50">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={12}>
          Nasze Usługi
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem>
            <VStack spacing={6} p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="lg">
              <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjb2Rpbmd8ZW58MHx8fHwxNzE3MjYyNzc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kodowanie BMW" />
              <Text fontSize="2xl" fontWeight="bold">
                Kodowanie BMW
              </Text>
              <Text>Profesjonalne kodowanie funkcji w Twoim BMW.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="lg">
              <Image src="https://images.unsplash.com/photo-1568636730593-743fda2c7596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjdXN0b21pemF0aW9ufGVufDB8fHx8MTcxNzI2Mjc3NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Personalizacja BMW" />
              <Text fontSize="2xl" fontWeight="bold">
                Personalizacja BMW
              </Text>
              <Text>Indywidualne dostosowanie wyglądu i funkcji.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="lg">
              <Image src="https://images.unsplash.com/photo-1679749176733-fa62972cc42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBkaWFnbm9zdGljc3xlbnwwfHx8fDE3MTcyNjI3NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Diagnostyka BMW" />
              <Text fontSize="2xl" fontWeight="bold">
                Diagnostyka BMW
              </Text>
              <Text>Zaawansowana diagnostyka i naprawa usterek.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={12}>
          Opinie Klientów
        </Text>
        <VStack spacing={10}>
          <Box p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="lg">
            <Text fontSize="xl" fontWeight="bold">
              Jan Kowalski
            </Text>
            <Text mt={2}>"Świetna obsługa i profesjonalne podejście. Moje BMW działa teraz lepiej niż kiedykolwiek!"</Text>
          </Box>
          <Box p={6} borderWidth={1} borderRadius="lg" bg="white" boxShadow="lg">
            <Text fontSize="xl" fontWeight="bold">
              Anna Nowak
            </Text>
            <Text mt={2}>"Kodowanie funkcji przebiegło szybko i bezproblemowo. Polecam!"</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box bg="gray.900" color="white" py={12}>
        <VStack spacing={6}>
          <Text fontSize="2xl" fontWeight="bold">
            Zakoduj BMW
          </Text>
          <HStack spacing={6}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="outline" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="outline" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="outline" />
          </HStack>
          <Text>Kontakt: kontakt@zakodujbmw.pl | Tel: 123-456-789</Text>
          <Text>Adres: Ul. Przykładowa 1, 00-000 Miasto</Text>
          <Box as="form" w="full" maxW="md" mt={6}>
            <FormControl id="name" mb={4}>
              <FormLabel>Imię</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="subject" mb={4}>
              <FormLabel>Temat</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Wiadomość</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="teal" type="submit" size="lg">
              Wyślij
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
