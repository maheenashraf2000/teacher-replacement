// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const Stack = createStackNavigator();

const teachersList = ["Mr. Smith", "Mr. Lee", "Mr. Johnson"];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teacher Replacement App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function LoginScreen() {
  const [pendingReplacements, setPendingReplacements] = useState([]);

  const replaceTeacher = (teacher) => {
    // Example: Replace with "Mr. John"
    const newReplacement = `${teacher} will be replaced by Mr. John`;
    setPendingReplacements([...pendingReplacements, newReplacement]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1: List of teachers to replace</Text>

      <FlatList
        data={teachersList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.teacherRow}>
            <Text style={styles.teacherText}>{item}</Text>
            <Button title="Replace" onPress={() => replaceTeacher(item)} />
          </View>
        )}
      />

      <Text style={styles.title}>2: Pending replacements list</Text>
      {pendingReplacements.length === 0 ? (
        <Text>No replacements yet.</Text>
      ) : (
        pendingReplacements.map((r, index) => (
          <Text key={index} style={styles.replacementText}>{r}</Text>
        ))
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  teacherRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  teacherText: {
    fontSize: 18,
  },
  replacementText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
