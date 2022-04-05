import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWRInfinite from 'swr/infinite';
import Post from './Post';

const styles = StyleSheet.create({
  container: {
    height: '100vh',
  },
  loadMore: {
    // height: 'auto',
    //  padding: 10,
  },
  posts: {
    flex: 1,
    height: 'auto',
    marginHorizontal: 10,
    padding: 10,
    paddingBottom: 50,
  },
  scrollView: {
    flexGrow: 1,
  },
});

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
    return null;
  }

  const renderPage = (page) => {
    return (
      <>
        {page.map((post) => (
          <Post key={post.id} url={post.url} />
        ))}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.posts}>
          {pages.map((page) => (
            <View key={page[0].id}>{renderPage(page)}</View>
          ))}
          <Button title="Load More" onPress={() => setSize(size + 1)} style={styles.loadMore} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
