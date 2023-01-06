import { JwtPayload } from "jsonwebtoken";

export interface IDecodeToken {
    id: string | JwtPayload | null;
    iat: number;
    exp: number;
}