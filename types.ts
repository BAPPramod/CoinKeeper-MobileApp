import React, { ReactNode } from "react";
import { TextInput, TextInputProps, TextProps, TextStyle, TouchableOpacityProps, ViewStyle, } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export type TypoProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
};

export interface CustomButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
};

export type BackButtonProps = {
  style?: ViewStyle;
  iconSize?: number;
};

export interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
  //   label?: string;
  //   error?: string;
};

export type UserType = {
  uid?: string;
  email?: string | null;
  name: string | null;
  image?: any;
} | null;


export type AuthContextType = {
  user: UserType;
  setUser: Function;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; msg?: string }>;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; msg?: string }>;
  updateUserData: (userId: string) => Promise<void>;
};



