export interface User {
  userID: string;
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
  user: string;
  message: string;
}
