import stylis from 'stylis';
import { plugin } from '../src';

stylis.use(plugin);

describe('stylis-plugin-mso', () => {
  it('returns styles with mso prefix', () => {
    expect(stylis('.foobar', `{ color: tomato; }`)).toMatchSnapshot();
  });
});
