import { Container, VStack, Input, Textarea, Button, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [article, setArticle] = useState("");
  const toast = useToast();

  const handleGenerateArticle = () => {
    if (!topic || !keywords) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate article generation
    setArticle(`Generated research article on ${topic} with keywords: ${keywords}`);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>
          Research Article Generator
        </Text>
        <Input placeholder="Research Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <Textarea placeholder="Keywords (comma-separated)" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={handleGenerateArticle}>
          Generate Article
        </Button>
        {article && (
          <Text mt={4} p={4} borderWidth="1px" borderRadius="lg">
            {article}
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
