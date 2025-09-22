import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAccespectingMessages?: boolean;
    messages?: Array<Message>
}