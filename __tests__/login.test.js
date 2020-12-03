import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import Login from '../src/screen/login/login'

const wrapper = mount(<Login />);

describe('<Login />', () => {
  const wrapper = mount(<Login />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot;
  });

  it('reads input correctly', () => {
    
    wrapper.find('TextInput').at(0).simulate('change', { target: { valor: 'abc' }});
    expect(wrapper.find('TextInput').at(0)).toHaveText('abc');

  });

  

});