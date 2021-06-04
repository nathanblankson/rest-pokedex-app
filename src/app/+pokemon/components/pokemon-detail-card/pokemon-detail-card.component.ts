import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemon-detail-card',
    templateUrl: './pokemon-detail-card.component.html',
    styleUrls: ['./pokemon-detail-card.component.scss']
})
export class PokemonDetailCardComponent implements OnInit {

    @Input()
    public panelTitle: string;

    @Input()
    public hideToggle: boolean = false;

    @Input()
    public hasBorder: boolean = true;

    constructor() { }

    public ngOnInit(): void {
    }

}
