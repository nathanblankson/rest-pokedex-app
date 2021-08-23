import { Component, Input, OnInit } from '@angular/core';

export interface PokemonDetailCard {
    borderColor?: string;
    isExpanded?: boolean;
    isToggleHidden?: boolean;
    panelTitle?: string;
}

const defaultData: PokemonDetailCard = {
    borderColor: '',
    isExpanded: false,
    isToggleHidden: false,
    panelTitle: ''
};

@Component({
    selector: 'app-pokemon-detail-card',
    templateUrl: './pokemon-detail-card.component.html',
    styleUrls: ['./pokemon-detail-card.component.scss']
})
export class PokemonDetailCardComponent implements OnInit {

    @Input()
    public data: PokemonDetailCard = defaultData;

    public constructor() { }

    public ngOnInit(): void { }

}
