import morgan from 'morgan';

export default () => {
  return morgan(':method :url :status :res[content-length] - :response-time ms');
};
