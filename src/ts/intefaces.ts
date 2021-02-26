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
  onSubmit: Function;
}
