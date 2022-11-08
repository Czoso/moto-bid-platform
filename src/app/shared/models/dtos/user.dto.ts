export interface User {
  email: string;
  photoURL: string;
  username: string;
  chats: Chat[];
}
export interface Chat {
  interlocutor: string;
  username: string;
  conversation: Message[];
}
export interface Message {
  interlocutor: string;
  message: string;
}
