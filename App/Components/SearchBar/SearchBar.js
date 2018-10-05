import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

import styles from './styles'

class SearchBar extends Component {

  static propTypes = {
    onBtnCancelPress: PropTypes.func,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    placeholder: PropTypes.string,
    closeIconSize: PropTypes.number,
    closeIconStyle: PropTypes.object,
    searchIconSize: PropTypes.number,
    searchIconStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    searchBarStyle: PropTypes.object,
    txtSearchStyle: PropTypes.object,
    txtBtnStyle: PropTypes.object,
    cancelComponent: PropTypes.func,
    underlineColorAndroid: PropTypes.string,
    showCancelBtn:PropTypes.bool,
    onPress: PropTypes.func,
    focus: PropTypes.bool,
  }

  static defaultProps = {
    placeholderTextColor: styles.placeholderTextColor,
    placeholder: 'Search',
    closeIconSize: 24,
    searchIconSize: 14,
    underlineColorAndroid: 'transparent',
    showCancelBtn: true,
    focus: false,
  }

  constructor(props) {
    super(props)

    this.state = { text: null }
  }

  clearText = () => {
    this.setState({ text: '' })
    this.props.onChangeText('')
  }

  render() {
    const { cancelComponent,onBtnCancelPress, onChangeText, value, 
      placeholderTextColor, placeholder, searchIconSize,
      searchIconStyle, closeIconSize, closeIconStyle,
      containerStyle, searchBarStyle, txtSearchStyle,txtBtnStyle,
      underlineColorAndroid,onFocus, showCancelBtn, onPress, focus } = this.props
    let text = value
    if (this.state.text !== null) {
      text = this.state.text
    }

    return (
      <View style={[styles.container,containerStyle]}>
        <View style={styles.searchBarContainer}>
          <View style={[styles.searchBar,searchBarStyle]}>
            <Icon name='ios-search' style={[styles.btnSearch,searchIconStyle]} size={searchIconSize} />
            {onPress ? <TouchableOpacity onPress={onPress} style={styles.center}>
              <Text style={[styles.txtSearch,txtSearchStyle]} >{placeholder}</Text>
            </TouchableOpacity>
              :<TextInput
                ref={ref => this.input = ref}
                value={text}
                autoFocus={focus}
                autoCapitalize={'none'}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                style={[styles.txtSearch,txtSearchStyle]}
                onChangeText={(text) => {
                  this.setState({ text })
                  onChangeText && onChangeText(text)
                }}
                underlineColorAndroid={underlineColorAndroid}
                onFocus={() => onFocus && onFocus()}
              />}
            {text ? (
              <TouchableOpacity
                onPress={() => {
                  this.clearText()
                }}>
                <Icon name='ios-close' style={[styles.closeIconStyle,closeIconStyle]} size={closeIconSize} />
              </TouchableOpacity>
            ) : null}
          </View>
          {onBtnCancelPress && showCancelBtn && <TouchableOpacity
            style={{ padding: 10 }} onPress={() => {
              this.clearText()
              this.input && this.input.blur()
              onBtnCancelPress()
            }}>
            <Text style={[styles.txtBtnSearch,txtBtnStyle]}>Cancel</Text>
          </TouchableOpacity>}
          {cancelComponent && cancelComponent()}
        </View>
      </View>
    )
  }
}

export default SearchBar
