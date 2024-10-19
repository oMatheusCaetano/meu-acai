import { Image, StyleSheet, Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.item}>Nova Venda</Text>
        <Text style={styles.item}>Listar Vendas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'lightgrey',
    padding: 10,
    paddingTop: 150,
    flex: 1,
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  item: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: 'white',
  }
});
