
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
import {SectionTop01} from 'components/Sections';
import {SectionEvent} from 'components/Sections';
            const Notification1 = createScreen(
              () => {
                const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES ,COMMON,CONSTANTS } = useTheme();
                
                                         const clickCounter = useRef(0);
                                            const onPress = () => {
                                              console.log(`Clicked! ${clickCounter.current}`);
                                              clickCounter.current = clickCounter.current + 1;
    };









                return (

             <View style={styles.Notification1}>
<ScrollView>

<SectionTop01 style ={COMMON.EleNotification122} />
<View style ={COMMON.SectionPaddingNotification123} >
<SectionEvent style ={COMMON.EleNotification128} />
<SectionEvent />
</View>
<MImage imageSource={IMAGES.image7641} style ={COMMON.imageloading29}  customWidth={scale(390)} customHeight ={scale(54)} />

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
            Notification1:{
            backgroundColor:COLORS.Color197,
height:'100%',

                                }
            });
            export default Notification1;
            