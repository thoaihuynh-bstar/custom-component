import React, { forwardRef, useRef, useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";
import { styled } from "nativewind";
import { View, Button, Text } from "../../component";
import { twMerge } from "tailwind-merge";

export interface ConfirmDialogProps {
    children: any;
    isVisible?: boolean;
    title?: string | React.ReactNode;
    submitText?: string;
    cancelText?: string;
    onSubmit?: () => void;
    onCancel?: () => void;
    onBackdropPress?: () => void;
    useExternalVisibility?: boolean;
    submitBtnStyle?: string;
    isDarkMode?: boolean;
    containerStyle?: string; // Nativewind className
}

const ConfirmDialog = forwardRef((props: ConfirmDialogProps, ref: any) => {
    const {
        children,
        isVisible = false,
        title,
        submitText = "Đồng ý",
        cancelText = "Huỷ",
        onSubmit = undefined,
        onCancel = undefined,
        onBackdropPress,
        useExternalVisibility = false,
        containerStyle = "",
    } = props;

    const refCallbacks = useRef<any>({});
    const [_isVisible, setVisible] = useState(false);
    const visible = useExternalVisibility ? isVisible : _isVisible;

    // Ref external
    React.useImperativeHandle(
        ref,
        () => ({
            // Ref toggle dialog show/hide
            toggle: (callbacks: () => void) => {
                toggleDialog(callbacks);
            },
            // Ref show dialog
            show: (callbacks: () => void) => {
                onShowDialog(callbacks);
            },
            // Ref hide dialog
            hide: () => {
                onHideDialog();
            },
        }),
        []
    );

    // Toggle dialog show/hide
    const toggleDialog = (refDialog: any) => {
        refCallbacks.current = refDialog;
        setVisible(!isVisible);
    };

    // Hide dialog
    const onHideDialog = () => {
        setVisible(false);
    };

    // Show dialog
    const onShowDialog = (refDialog: any) => {
        refCallbacks.current = refDialog;
        setVisible(true);
    };

    const onHideBackdrop = () => {
        onHideDialog();
        onBackdropPress && onBackdropPress();
    };

    const onSubmitPress = () => {
        onHideDialog();
        onSubmit && onSubmit();
        refCallbacks?.current?.onOK && refCallbacks?.current?.onOK();
    };

    const onCancelPress = () => {
        onHideDialog();
        onCancel && onCancel();
    };

    const containerClassName = twMerge("bg-white rounded-lg p-6 mx-2", containerStyle);

    if (!visible) return null;
    return (
        <KeyboardAvoidingView>
            <Modal
                isVisible={visible}
                useNativeDriver
                animationIn="fadeIn"
                animationOut="fadeOut"
                statusBarTranslucent
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
                onBackdropPress={onHideBackdrop}
            >
                <View viewStyle={containerClassName}>
                    {title && (
                        <Text bold size={"lg"}>
                            {title}
                        </Text>
                    )}
                    {children}
                    <View row center viewStyle="mt-2">
                        {onCancel && (
                            <Button
                                buttonStyle={`w-[45%]`}
                                type={"outline"}
                                onPress={onCancelPress}
                            >
                                {cancelText}
                            </Button>
                        )}
                        {!!onCancel && !!onSubmit && <View flex />}
                        {onSubmit && (
                            <Button
                                buttonStyle={!!onSubmit ? "w-[45%]" : "w-full"}
                                onPress={onSubmitPress}
                            >
                                {submitText}
                            </Button>
                        )}
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
});
export const styles = StyleSheet.create({
    blurModal: {
        minHeight: 20,
        borderRadius: 8,
        paddingVertical: 28,
        paddingHorizontal: 20,
        backgroundColor: "transparent",
    },
});

export default styled(ConfirmDialog);