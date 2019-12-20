import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class List extends React.Component {
    data = [
        {
            id: '1',
            title: 'Animate Color',
        }
    ];

    renderItem = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    render() {
        return (
            <FlatList
                data={this.data}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={item => item.id}
            >
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: 'white',
    }
});