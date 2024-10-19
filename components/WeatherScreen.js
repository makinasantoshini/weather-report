import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getWeatherByCity } from './weatherService';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const handleGetWeather = async () => {
    try {
      const data = await getWeatherByCity(city);
      setForecast(data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setForecast([]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>Date: {new Date(item.dt_txt).toLocaleDateString()}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.row}>Temperature</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.cell}>Min: {item.main.temp_min}°C</Text>
          <Text style={styles.cell}>Max: {item.main.temp_max}°C</Text>
        </View>
        <Text style={styles.row}>Pressure: {item.main.pressure} hPa</Text>
        <Text style={styles.row}>Humidity: {item.main.humidity}%</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in your city</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity onPress={handleGetWeather} style={styles.searchButton}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={forecast}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#E67E22',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#E67E22',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#E67E22',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#E67E22',
    borderRadius: 5,
    marginBottom: 10,
  },
  cardHeader: {
    backgroundColor: '#E67E22',
    padding: 10,
  },
  date: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardBody: {
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  row: {
    backgroundColor: '#d9d9d9',
    padding: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
  cell: {
    width: '45%',
    textAlign: 'center',
  },
});

export default WeatherScreen;
