import fs from 'fs-extra';
import jsYaml from 'js-yaml';

export const readmd = async <T extends object>(
  file: string,
): Promise<T | null> => {
  const pattern = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/;

  try {
    const content = await fs.readFile(file, 'utf8');
    const results = pattern.exec(content);

    return results !== null ? jsYaml.safeLoad(results[2]) : null;
  } catch (err) {
    if (err.name === 'YAMLException') {
      const error = Error(err.name);
      error.message = `${err.reason} found at line ${err.mark.line} in ${file}`;
      throw error;
    }
    throw err;
  }
};
