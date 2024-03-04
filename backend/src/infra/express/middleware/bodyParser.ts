import * as BodyParser from 'body-parser';

export const bodyParserJson = (): any => BodyParser.json({ limit: '5mb' });

export const bodyParserUrlencoded = (): any => {
  const options: BodyParser.OptionsUrlencoded = {
    extended: true,
  };
  return BodyParser.urlencoded(options);
};
