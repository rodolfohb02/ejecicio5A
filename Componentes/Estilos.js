import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  // Estilos del boton
  boton: {
    backgroundColor: '#f0f8ff',
    borderRadius: 40,
    borderColor: '#f0f8ff',
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Añadido padding horizontal para el espacio dentro del botón
    paddingVertical: 10, // Añadido padding vertical para el espacio dentro del botón
    elevation: 5, // Sombra para un efecto 3D
  },
  textoB: {
    color: '#000000',
    fontSize: 30, // Tamaño de letra aumentado
    fontWeight: 'bold', // Texto en negrita
    textAlign: 'center', // Centrar el texto
  },
  logoB: {
    height: 15,
    width: 30,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilos de la caja
  boxContainer: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Fondo de la caja
  },
  TextBox: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  // Estilo de contenedor de los botones
  botonescontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly', // Espacio uniforme entre los botones
    alignItems: 'center',
    justifyContent: 'center',
  },
});
