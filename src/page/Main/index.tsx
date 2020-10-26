import React, { useEffect, useState, KeyboardEvent } from "react";
import Loader from "../../components/Loader";
import PostContent from "../../components/Post";
import Search from "../../components/Search";
import api from "../../config/api";
import Post from "../../contracts/model/posts";
import { Body, Container, Header } from "./styles";

// import { Container } from './styles';

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [foundPosts, setFoundPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const response = await api.get<any>("/unimeds");
      setPosts(response.data);
      setFoundPosts(response.data);

      setLoading(false);
    }

    getPosts();
  }, []);

  const searchPost = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== "Enter") return;
    const regexp = new RegExp(searchInput, "gi");
    const foundPostsRegexp = posts.filter((post) => {
      const foundPostKeys = [
        "uf",
        "cidade",
        "bairro",
        "endereco",
        "nmUnimed",
        "telefone",
        "site",
      ].map((postKey) => regexp.test(post[postKey] as string));

      return foundPostKeys.some((foundKey) => foundKey);
    });

    setFoundPosts(foundPostsRegexp);
  };

  return (
    <Container>
      <Header>
        <Search
          onChange={(evt) => setSearchInput(evt.target.value)}
          onKeyPress={searchPost}
        />
        {!!foundPosts.length && (
          <h2>Total de resultados: {foundPosts.length}</h2>
        )}
      </Header>
      <Body>
        {loading ? (
          <Loader />
        ) : !!foundPosts.length ? (
          foundPosts.map((post) => (
            <PostContent
              cidade={post.cidade}
              endereco={post.endereco}
              nmUnimed={post.nmUnimed}
              site={post?.site}
              telefone={post.telefone}
              uf={post.uf}
              key={post.cdUnimed}
            />
          ))
        ) : (
          <h1> Posts não encontrados</h1>
        )}
      </Body>
    </Container>
  );
};

export default Main;
