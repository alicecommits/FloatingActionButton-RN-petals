import { Image } from 'react-native';

function LogoTitle() {
    return (
      <Image
        style={{ width: 60, height: 60 }}
        source={require('../assets/food.png')}
      />
    );
  }

export default LogoTitle;