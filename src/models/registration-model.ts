export interface registrationModel {
    userMail: string;
    status?: number | null
    tokens? : {
        accessToken: string;
        refreshToken: string;
    } | any
}