export interface Ticket {
    id: string;
    title: string;
    boardId: string;
    description: string;
    tag: "todo" | "in-progress" | "done";
}
  
export interface Board {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}