import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from 'hooks/useTheme';
import { goBack } from 'navigation/methods';
import { scaleSpace } from 'utils';

export default function ArrowBackButton() {
    const { COLORS, GUTTERS, TYPOGRAPHY } = useTheme();
    return (
        <TouchableOpacity
            onPress={() => goBack()}
            style={{
                borderColor: COLORS.textOnPrimary,
                borderWidth: 2,
                padding: scaleSpace(20),
                borderRadius: scaleSpace(20),
            }}>
            <MaterialCommunityIcon
                name="arrow-left"
                color={COLORS.textOnPrimary}
                size={scaleSpace(20)}
            />
        </TouchableOpacity>
    );
}
