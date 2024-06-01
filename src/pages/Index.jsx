import { Container, Box, VStack, HStack, Text, Button, IconButton, Image, Input, Textarea, FormControl, FormLabel, Grid, GridItem, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bg="gray.800" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            Zakoduj BMW
          </Text>
          <Text fontSize="xl">Profesjonalne kodowanie i personalizacja BMW</Text>
          <Button colorScheme="teal" size="lg">
            Skontaktuj się z nami
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={10}>
          Nasze Usługi
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <VStack spacing={4} p={5} borderWidth={1} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjb2Rpbmd8ZW58MHx8fHwxNzE3MjYyNzc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kodowanie BMW" />
              <Text fontSize="xl" fontWeight="bold">
                Kodowanie BMW
              </Text>
              <Text>Profesjonalne kodowanie funkcji w Twoim BMW.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} p={5} borderWidth={1} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1568636730593-743fda2c7596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjdXN0b21pemF0aW9ufGVufDB8fHx8MTcxNzI2Mjc3NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Personalizacja BMW" />
              <Text fontSize="xl" fontWeight="bold">
                Personalizacja BMW
              </Text>
              <Text>Indywidualne dostosowanie wyglądu i funkcji.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} p={5} borderWidth={1} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1679749176733-fa62972cc42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBkaWFnbm9zdGljc3xlbnwwfHx8fDE3MTcyNjI3NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Diagnostyka BMW" />
              <Text fontSize="xl" fontWeight="bold">
                Diagnostyka BMW
              </Text>
              <Text>Zaawansowana diagnostyka i naprawa usterek.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={10}>
          Opinie Klientów
        </Text>
        <VStack spacing={8}>
          <Box p={5} borderWidth={1} borderRadius="md" bg="white">
            <Text fontSize="lg" fontWeight="bold">
              Jan Kowalski
            </Text>
            <Text>"Świetna obsługa i profesjonalne podejście. Moje BMW działa teraz lepiej niż kiedykolwiek!"</Text>
          </Box>
          <Box p={5} borderWidth={1} borderRadius="md" bg="white">
            <Text fontSize="lg" fontWeight="bold">
              Anna Nowak
            </Text>
            <Text>"Kodowanie funkcji przebiegło szybko i bezproblemowo. Polecam!"</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box bg="gray.800" color="white" py={10}>
        <VStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Zakoduj BMW
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
          <Text>Kontakt: kontakt@zakodujbmw.pl | Tel: 123-456-789</Text>
          <Text>Adres: Ul. Przykładowa 1, 00-000 Miasto</Text>
          <Box as="form" w="full" maxW="md" mt={5}>
            <FormControl id="name" mb={3}>
              <FormLabel>Imię</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mb={3}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="subject" mb={3}>
              <FormLabel>Temat</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="message" mb={3}>
              <FormLabel>Wiadomość</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Wyślij
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
