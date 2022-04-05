import React from 'react';
import useSWR from 'swr';
import { useWindowDimensions, View, Text } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { tagsStyles, baseStyles, styles } from '../../styles/post';

export default function Post({ url }) {
  const { data: post, error } = useSWR(url, (resource, init) =>
    fetch(resource, init).then((res) => res.json())
  );
  const { width } = useWindowDimensions();
  if (error || !post) {
    console.log(error);
    return null;
  }
  console.log(post.id);

  const source = {
    html: `
    ${post.html}
    `,
  };

  return (
    <View>
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
