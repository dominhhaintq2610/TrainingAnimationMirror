import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class List extends React.Component {
    data = [
        {
            id: '1',
            title: 'Animate Color',
        },
        {
            id: '2',
            title: 'Animate Size',
        },
        {
            id: '3',
            title: 'Animate Position',
        },
        {
            id: '4',
            title: 'Demo',
        },
        {
            id: '5',
            title: 'Demo',
        },
    ];

    renderItem = ({ title }) => {
        const { navigation } = this.props;
        console.log(navigation);
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => { navigation.navigate('AnimationColor') }}>
                <Text style={styles.title}>{title}</Text>
                <Icon size={24} color="black" name="angle-right" />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <FlatList
                data={this.data}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item.id}
            >
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginHorizontal: 8,
    },
    title: {
        color: 'black',
        fontSize: 18,
    }
});