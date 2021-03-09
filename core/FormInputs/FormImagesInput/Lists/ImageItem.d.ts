import React from 'react';
import { ImageInfo, ObservableInfo } from '~/core/FormInputs/FormImagesInput/uploadContext';
export declare type Props = {
    imageInfo: ImageInfo;
    isDragging: boolean;
    thumbSize?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    observableInfo?: ObservableInfo;
};
declare const _default: (props: any) => JSX.Element;
export default _default;
