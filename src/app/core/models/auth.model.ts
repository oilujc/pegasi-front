export interface User {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    phone: string;
    birthDate: Date;
    maternity?: string;
}

export interface Auth {
    user: User | null;
}

export interface UserResponse {
    data: User;
    message: string;  
}