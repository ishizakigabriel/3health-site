import { User } from './user.model';
import { Treino } from './treino.model';

export interface Aluno extends User {
    plano: string;
    treinos: Treino[];
}