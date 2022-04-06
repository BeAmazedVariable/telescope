import { StyleSheet } from 'react-native';

const baseStyles = {
  fontFamily: 'PT Serif, serif',
  fontSize: '1.8rem',
  letterSpacing: '0.5px',
  lineHeight: '1.6',
  textAlign: 'left',
};

const tagsStyles = {
  code: {
    fontSize: '1.2rem',
    fontFamily: "Menlo, Consolas, Monaco, 'Liberation Mono', 'Lucida Console', monospace",
    borderRadius: 3,
  },
  p: {
    margin: '1.2rem 0',
  },
  pre: {
    fontSize: '1.5rem',
    lineHeight: '1.5',
    maxWidth: '100%',
    overflow: 'auto',
    paddingHorizontal: '1em',
    paddingVertical: '0.5em',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  q: {
    lineHeight: 1.5,
    marginVertical: 10,
    marginLeft: '50px',
    paddingLeft: '15px',
    display: 'block',
    fontStyle: 'italic',
  },
  blockquote: {
    lineHeight: 1.5,
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '50px',
    paddingLeft: '15px',
    display: 'block',
    fontStyle: 'italic',
  },
  img: {
    margin: '0 auto',
    maxHeight: '80vh',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
    display: 'block',
    height: 'auto',
  },
  h1: {
    fontSize: '2em',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

const styles = StyleSheet.create({
  post: {
    minHeight: 300,
  },
  title: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    display: '-webkit-box',
    fontSize: '2em',
    fontWeight: 'bold',
    letterSpacing: '-1.5px',
    overflow: 'hidden',
    paddingVertical: '1rem',
    textAlign: 'start',
  },
});

export { tagsStyles, baseStyles, styles };
