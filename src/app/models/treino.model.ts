import { Aluno } from './aluno.model';
import { Professor } from './professor.model';
import { Exercicio } from './exercicio.model';

export interface Treino {
    id: number;
    professor: string;
    nomeTreino: string;
    exercicios: Exercicio[];
}