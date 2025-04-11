export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
}
  
export interface Board {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}