import { ImageInfo, HandleUpload, Context } from '~/core/FormInputs/FormImagesInput/uploadContext';
export declare type OnAddImageInfo = (imageInfo: ImageInfo, options: {
    context: Context;
}) => any;
export declare type OnEditImageInfo = (imageInfo: ImageInfo, index: number, options: {
    context: Context;
}) => any;
export declare type GetContent = (imageInfo: ImageInfo, index: number) => any;
declare type Props = {
    id: string;
    value?: ImageInfo[];
    onChange: Function;
    onAdd: OnAddImageInfo;
    onEdit?: OnEditImageInfo;
    getContent?: GetContent;
    thumbSize: number;
    handleUpload: HandleUpload;
    lightboxZIndex?: number;
};
declare const _default: (props: Props) => JSX.Element;
export default _default;
