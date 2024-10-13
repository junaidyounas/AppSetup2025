import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { widthRatio } from 'utils/responsive/pixelRatio';

type ImageProps = React.ComponentProps<typeof Image>;

type Props = {
  source: any;
  w?: number;
  h?: number;
} & ImageProps;

const ImageWidget = (props: Props) => {
  const {source, w=15, h=15} = props;
  return <Image source={source} style={{width: widthRatio(w), height: widthRatio(h)}} {...props} />;
};

export default ImageWidget;

const styles = StyleSheet.create({});
