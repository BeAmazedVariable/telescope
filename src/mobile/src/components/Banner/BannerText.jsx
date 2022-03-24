import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import supabase from '../../api/supabase_client';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  studentQuote: {
    zIndex: 1000,
  },
  studentQuoteText: {
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 25,
  },
});

const BannerText = () => {
  const [studentQuote, setStudentQuote] = useState([]);

  // const x = fetch('', { headers: {
  //   apiKey: process.env.ANON_key;
  // }})
  // const quotes = await x.json()

  // async function fetchStudentQuotes() {
  //   console.log('starting');
  //   const { data, status, statusText, error } = await supabase.from('quotes').select('*');
  //   console.log('fetching supabase');
  //   if (error) {
  //     console.log('error', error);
  //     console.log('status', status);
  //     console.log('text', statusText);
  //   } else {
  //     console.log('data', data);
  //     setStudentQuote(data);
  //   }
  // }

  useEffect(() => {
    // fetchStudentQuotes();
    // setStudentQuote(studentQuote[Math.floor(Math.random() * studentQuote.length)]);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          zIndex: 1000,
          letterSpacing: 13,
          fontSize: 45,
          fontWeight: '600',
          color: '#A0D1FB',
        }}
      >
        Telescope
      </Text>
      {studentQuote.length ? (
        <Pressable
          style={styles.studentQuote}
          onPress={() => Linking.openURL(studentQuote[0].blog_url)}
        >
          <Text style={styles.studentQuoteText}> {studentQuote[0].author_name}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default BannerText;
