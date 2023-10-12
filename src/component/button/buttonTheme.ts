import { Colors } from "../../themes";

export const SIZE_THEME = {
    sm: {
        btnHeight: `h-[26px]`,
        text: `text-sm`,
        indicator: 0.6,
    },
    md: {
        btnHeight: `h-[36px]`,
        text: `text-base`,
        indicator: 0.8,
    },
    lg: {
        btnHeight: `h-[48px]`,
        text: `text-lg`,
        indicator: 1,
    },
};

export const TYPES_THEME = {
    default: {
        bg: {
            enable: `bg-sky-700`,
            disable: `bg-sky-700/60`,
        },
        text: `text-white`,
        indicatorColor: Colors.white,
    },
    outline: {
        bg: {
            enable: `bg-white border border-sky-700`,
            disable: `bg-white border border-sky-700/60`,
        },
        text: `text-sky-700`,
        indicatorColor: Colors.systemColor.info,
    },
    alert: {
        bg: {
            enable: `bg-red-600`,
            disable: `bg-red-600/60`,
        },
        text: `text-white`,
        indicatorColor: Colors.white,
    },
};