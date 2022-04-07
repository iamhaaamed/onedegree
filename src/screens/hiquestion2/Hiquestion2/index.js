
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
import {SectionQuestion} from 'components/Sections';
            const Hiquestion2 = createScreen(
              () => {
                const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES ,COMMON,CONSTANTS } = useTheme();
                
                                         const clickCounter = useRef(0);
                                            const onPress = () => {
                                              console.log(`Clicked! ${clickCounter.current}`);
                                              clickCounter.current = clickCounter.current + 1;
    };









                return (

             <View style={styles.Hiquestion2}>
<ScrollView>

<MImage imageSource={IMAGES.image3013} style ={COMMON.image94}  customWidth={scale(390)} customHeight ={scale(494)} />

<SectionQuestion style ={COMMON.EleHiquestion2100} />
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
            Hiquestion2:{
            backgroundColor:COLORS.Color963,
height:'100%',

                                }
            });
            export default Hiquestion2;
            
