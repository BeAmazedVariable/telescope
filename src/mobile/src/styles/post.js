import { StyleSheet } from 'react-native';

const tagsStyles = {
  code: {
    fontSize: '1.1rem',
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

const styles = StyleSheet.create({
  title: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    display: '-webkit-box',
    fontSize: '2em',
    fontWeight: 'bold',
    letterSpacing: '-1.5px',
    marginLeft: '3px',
    overflow: 'hidden',
    textAlign: 'start',
  },
});

export { tagsStyles, baseStyles, styles };
