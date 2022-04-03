import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWRInfinite from 'swr/infinite';
import Post from './Post';

const POST_URL = 'https://dev.api.telescope.cdot.systems/v1/posts';

export default function Posts() {
  const {
    data: pages,
    size,
    setSize,
    error,
  } = useSWRInfinite(
    (index) => `${POST_URL}?page=${index + 1}`,
    (resource, init) => fetch(resource, init).then((res) => res.json())
  );

  if (error || !pages || !pages.length) {
    return <></>;
  }

  const renderPage = (page) => {
    return (
      <>
        {page.map((post) => (
          <Post key={post.id} url={post.url}></Post>
        ))}
      </>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ height: 1000 }}>
        <Button onPress={() => setSize(size + 1)}>get more</Button>
        <Text>{pages.length * 30}</Text>
        {pages.map((page, i) => (
          <View key={i}>{renderPage(page)}</View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
