import React, { PureComponent } from "react";
import { View, Text, Button, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Step extends PureComponent {
    state = {}
    render() {
        return (
            <View>
                <Text>{this.props.children}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                    <TouchableOpacity
                        onPress={this.props.prevStep}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : '#fff',
                            }]}
                        disabled={this.props.currentIndex == 0}
                    >
                        <Icon name="ios-arrow-back-circle-outline" size={20}></Icon>
                    </TouchableOpacity>
                    <Text style={{paddingLeft: 8, paddingRight: 8}}>{this.props.currentIndex + 1} of 5</Text>
                    <TouchableOpacity
                        onPress={this.props.nextStep}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : '#fff',
                            }]}
                        disabled={this.props.isLast}
                    >
                        <Icon name="ios-arrow-forward-circle-outline" size={20}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


class Wizard extends PureComponent {
    static Step = (props) => <Step {...props} />
    state = {
        index: 0,
    };

    _nextStep = () => {
        if (this.state.index != this.props.children.length - 1) {
            this.setState(prevState => ({
                index: prevState.index + 1,
            }))
        }
    };

    _prevStep = () => {
        if (this.state.index != 0) {
            this.setState(prevState => ({
                index: prevState.index - 1,
            }))
        }
    };

    render() {
        return (
            <View>
                {React.Children.map(this.props.children, (el, index) => {
                    if (index == this.state.index) {
                        return React.cloneElement(el, {
                            currentIndex: this.state.index,
                            nextStep: this._nextStep,
                            prevStep: this._prevStep,
                            isLast: this.state.index == this.props.children.length - 1,
                        })
                    }

                    return null;
                })}
            </View>
        )
    }
}


export default Wizard;