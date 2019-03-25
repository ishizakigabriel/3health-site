import { Component, OnInit } from '@angular/core';
import { Treino } from '../models/treino.model';
import { Aluno } from '../models/aluno.model';

@Component({
    selector: 'app-treino',
    templateUrl: './treino.component.html',
    styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit{
    aluno: Aluno;
    displayedColumns: string[];
    constructor() {
        
    }
    ngOnInit() {
        this.displayedColumns = ['exercicio','series','repeticoes'];
        this.aluno = {
            id: 1,
            nome: "Gabriel Ishizaki Cardoso da Silva",
            cpf: "39717719802",
            plano: "12x 39,90",
            treinos: [{
                id: 1,
                nomeTreino: "A",
                professor: "Rodrigo Muranaka",
                exercicios: [{
                    exercicio: "Supino",
                    series: 2,
                    repeticoes: "12"
                },{
                    exercicio: "Supino inclinado",
                    series: 3,
                    repeticoes: "12"
                },{
                    exercicio: "Supino declinado",
                    series: 3,
                    repeticoes: "12"
                },{
                    exercicio: "Peck deck",
                    series: 3,
                    repeticoes: "12"
                }]
            },{
                id: 2,
                nomeTreino: "B",
                professor: "Rodrigo Muranaka",
                exercicios: [{
                    exercicio: "Puxador frente",
                    series: 2,
                    repeticoes: "12"
                },{
                    exercicio: "Puxador costas",
                    series: 3,
                    repeticoes: "12"
                },{
                    exercicio: "Remada baixa",
                    series: 3,
                    repeticoes: "12"
                }]
            },{
                id: 3,
                nomeTreino: "C",
                professor: "Rodrigo Muranaka",
                exercicios: [{
                    exercicio: "Leg press",
                    series: 2,
                    repeticoes: "12"
                },{
                    exercicio: "Cadeira extensora",
                    series: 3,
                    repeticoes: "12"
                },{
                    exercicio: "Mesa flexora",
                    series: 3,
                    repeticoes: "12"
                }]
            }]
        }
        console.log(this.aluno);
    }
}