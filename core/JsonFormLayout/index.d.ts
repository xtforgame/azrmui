import { IFieldLink, IInputLinker } from '~/utils/InputLinker/core/interfaces';
import { JsonFormProps } from './interfaces';
import useJsonForm from './useJsonForm';
export * from './interfaces';
export { JsonFormLinker, RenderSession, } from './core';
export { useJsonForm, };
declare const JsonFormLayout: {
    <FieldLink extends IFieldLink<FieldLink>, LinkerType extends IInputLinker<FieldLink>>(p: JsonFormProps<FieldLink, LinkerType>): JSX.Element;
    displayName: string;
};
export default JsonFormLayout;
