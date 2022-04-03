import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   telescopePostContent: {
//     '&:code': {
//       fontSize: '18%',
//     },
//     fontFamily: 'PT Serif, serif',
//     fontSize: '1.8rem',
//     hyphens: 'auto',
//     letterSpacing: '0.5px',
//     lineHeight: '1.6',
//     overflowWrap: 'break-word',
//     textAlign: 'left',
//     wordWrap: 'break-word',
//   },
// });

const tagsStyles = {
  code: {
    fontSize: '95%',
  },
  p: {
    margin: '1.2rem 0',
  },
};

const baseStyles = {
  fontFamily: 'PT Serif, serif',
  fontSize: '1.8rem',
  hyphens: 'auto',
  letterSpacing: '0.5px',
  lineHeight: '1.6',
  overflowWrap: 'break-word',
  textAlign: 'left',
  wordWrap: 'break-word',
};

export { tagsStyles, baseStyles };
