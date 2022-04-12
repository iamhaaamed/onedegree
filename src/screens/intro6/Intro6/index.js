
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { View,Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale,height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import {DateTimePickerMod,}from 'components/common/MDateTimePicker';
import {DrawerItem,DrawerItemList,DrawerContentScrollView,DrawerToggleButton,}from '@react-navigation/drawer';
 
                       import {MIcon,MText,MTouchable,MButton,MInput,MImageBackground,MImage,MStatusBar,MSwitch,MCheckBox,MFlatList,MChip,MDropDown,MOnboarding,MDateTimePicker,MImagePicker,MLoading,MModal,MTab,MAccordion,MSnackbar,MSlider} from 'components/common';
            const intro6 = createScreen(
              () => {
                const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES ,COMMON,CONSTANTS } = useTheme();
                
                                         const clickCounter = useRef(0);
                                            const onPress = () => {
                                              console.log(`Clicked! ${clickCounter.current}`);
                                              clickCounter.current = clickCounter.current + 1;
    };









                return (

             <View style={styles.intro6}>
<ScrollView>

<MImage imageSource={IMAGES.image7436} style ={COMMON.imagelogo0}  customWidth={scale(391)} customHeight ={scale(52)} />

<MImage imageSource={IMAGES.image5606} style ={COMMON.imagevector1}  customWidth={scale(390)} customHeight ={scale(232)} />

<View style ={COMMON.SectionPaddingintro62} >
<MText  textStyle={COMMON.Txtintro63} >We help you explore careers that are high-paying and don't require college. </MText>
<MButton onPress={onPress} style ={COMMON.buttonRect5} containerStyle={COMMON.button4} 
 text="Get started" textStyle ={COMMON.Textsbutton6} 
 color={COLORS.Color611} 
/>
<MImage imageSource={IMAGES.image5327} style ={COMMON.imagepageination7}  customWidth={scale(326)} customHeight ={scale(16)} />

</View>
</ScrollView>
</View>


              );
            },
              {
                scrollView:false,
                paddingBottom: false,
                paddingTop: false,
            },
            );
            const styles = StyleSheet.create({
            intro6:{
            backgroundColor:COLORS.Color611,
height:'100%',

                                }
            });
            export default intro6;
            
