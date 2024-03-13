import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
     <Title title={"Home 🏠"}/>

     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Category')}
      >
        <Title title={'Category '} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Title title={'Profile '} />
      </TouchableOpacity>
    </View>
  )
}