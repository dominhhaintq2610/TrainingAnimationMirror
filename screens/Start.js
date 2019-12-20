import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListFunctions from '../components/start/list';

export default class Start extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.page_title_area}>
                    <Text style={styles.page_title}>Animations</Text>
                </View>
                <ListFunctions />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    page_title_area: {
        display: "flex",
        alignItems: 'center',
        marginTop: 50,
    },
    page_title: {
        color: "blue",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "monospace",
    },
});