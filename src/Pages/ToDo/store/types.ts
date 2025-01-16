type TToDo = {
  id: number;
  todo: string;
  userId: boolean;
};

type TToDoResponse = {
  todos: TToDo[];
  skip: number;
  total: number;
};

export type { TToDo, TToDoResponse };
