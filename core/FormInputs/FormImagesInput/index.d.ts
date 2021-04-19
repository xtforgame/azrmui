/// <reference types="react" />
import { OnAddImageInfo, OnEditImageInfo, GetContent } from './ImagesInput';
import { ImageInfo, HandleUpload } from './uploadContext';
export * from './uploadContext';
export * from './array-helpers';
export { default as uploadContext } from './uploadContext';
export declare type Props = {
    id: string;
    value: ImageInfo[];
    onChange: Function;
    imagesInputProps: any;
    handleUpload: HandleUpload;
    onAdd: OnAddImageInfo;
    onEdit?: OnEditImageInfo;
    getContent?: GetContent;
    lightboxZIndex?: number;
    [s: string]: any;
};
declare const _default: ({ id, value, onChange, imagesInputProps, handleUpload, onAdd, onEdit, getContent, lightboxZIndex, ...props }: Props) => JSX.Element;
export default _default;
