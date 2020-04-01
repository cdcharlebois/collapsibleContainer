import { Component, createElement } from "react";
import { View, TouchableOpacity } from 'react-native';

import Collapsible from 'react-native-collapsible';
import { HelloWorldSample } from "./components/HelloWorldSample";

export class CollapsibleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: !this.props.startOpen
        }

        this.toggleContent = this.toggleContent.bind(this);
    }

    toggleContent() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    render() {
        const { headerCollapsed, headerOpen, content, duration } = this.props;
        return (
            <View>
                <TouchableOpacity onPress={this.toggleContent}>
                    {this.state.isCollapsed ? headerCollapsed : headerOpen}
                </TouchableOpacity>
                <Collapsible collapsed={this.state.isCollapsed} duration={duration}>
                    {content}
                </Collapsible>
            </View>
        )
    }
}
