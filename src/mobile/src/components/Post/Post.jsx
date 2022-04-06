import React from 'react';
import useSWR from 'swr';
import { useWindowDimensions, View, Text } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { tagsStyles, baseStyles, styles } from '../../styles/post';

export default function Post({ url }) {
  const { data: post, error } = useSWR(url);
  const { width } = useWindowDimensions();

  if (error) {
    console.error(error);
    return (
      <View style={styles.post}>
        <Text>Error Loading Post</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.post}>
        <Text>Loading</Text>
      </View>
    );
  }

  const source = {
    html: `
    ${post.html}
    `,
  };

  return (
    <View style={styles.post}>
      <Text style={styles.title}>{post.title}</Text>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
        baseStyle={baseStyles}
      />
    </View>
  );
}
