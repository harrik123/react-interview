import { ReactNode } from "react";

export interface ILanguageContextProps {
  children: ReactNode;
}

export interface ILanguageContext {
  currentLanguage: string;
  translations: { [key: string]: any };
  changeLanguage: Function;
}

export interface ITodoItem {
  id: number;
  name: string;
  complete: boolean;
}

export interface ITodosListProps {
  todos: ITodoItem[];
  onStatusChangeClick: Function;
  onRemoveClick: Function;
}

export interface ITodoProps {
  todo: ITodoItem;
  onStatusChangeClick: Function;
  onRemoveClick: Function;
}

export interface IInputBarProps {
  placeholder: string;
  submitButtonText: string;
  onSubmit: Function;
}
