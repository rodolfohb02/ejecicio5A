import React, { useState } from 'react';
import { View } from 'react-native';
import { Boton, Caja } from './Atomicos';
import { estilos } from './Estilos';

export const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value) => {
    if (value == '=') {
      // Aquí puedes implementar la lógica para evaluar la expresión matemática
      // Por simplicidad, sumaremos dos números en este ejemplo
      const result = eval(displayValue); // Utilizamos eval() para evaluar la expresión
      setDisplayValue(result.toString()); // Actualizamos el valor mostrado en la caja con el resultado
    } else if(value == 'CE'){      
      setDisplayValue(displayValue.slice(0, -1)); // Concatenamos el valor del botón presionado al valor actual en la caja
    } else{
      setDisplayValue(displayValue + value); // Concatenamos el valor del botón presionado al valor actual en la caja
    }
  };

  return (
    <View>
      <View>
        <Caja valor={displayValue} />
      </View>
      <View style={estilos.botonescontainer}>
        <Boton texto={'%'} accion={() => handleButtonPress('%')} />
        <Boton texto={'CE'} accion={() => handleButtonPress('CE')} />
        <Boton texto={'C'} accion={() => handleButtonPress('CE')} />
        <Boton texto={'X'} accion={() => handleButtonPress('CE')} />

        <Boton texto={'1/x'} accion={() => handleButtonPress('1/x')} />
        <Boton texto={'x²'} accion={() => handleButtonPress('x²')} />
        <Boton texto={'R'} accion={() => handleButtonPress('R')} />
        <Boton texto={'/'} accion={() => handleButtonPress('/')} />

        <Boton texto={'7'} accion={() => handleButtonPress('7')} />
        <Boton texto={'8'} accion={() => handleButtonPress('8')} />
        <Boton texto={'9'} accion={() => handleButtonPress('9')} />
        <Boton texto={'*'} accion={() => handleButtonPress('*')} />

        <Boton texto={'4'} accion={() => handleButtonPress('4')} />
        <Boton texto={'5'} accion={() => handleButtonPress('5')} />
        <Boton texto={'6'} accion={() => handleButtonPress('6')} />
        <Boton texto={'-'} accion={() => handleButtonPress('-')} />

        <Boton texto={'1'} accion={() => handleButtonPress('1')} />
        <Boton texto={'2'} accion={() => handleButtonPress('2')} />
        <Boton texto={'3'} accion={() => handleButtonPress('3')} />
        <Boton texto={'+'} accion={() => handleButtonPress('+')} />

        <Boton texto={'+/-'} accion={() => handleButtonPress('+/-')} />
        <Boton texto={'0'} accion={() => handleButtonPress('0')} />
        <Boton texto={'.'} accion={() => handleButtonPress('.')} />
        <Boton texto={'='} accion={() => handleButtonPress('=')} />
      </View>
    </View>
  );
};  
