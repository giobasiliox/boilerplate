import { View } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View style={styles.container}>
     <Title title={"Home 🏠"}/>

     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Categori')}
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