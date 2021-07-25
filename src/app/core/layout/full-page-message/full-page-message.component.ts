import { Component, Input, OnInit } from '@angular/core';

import { IFullPageMessage } from '@core/interfaces/full-page-message.interface';

@Component({
    selector: 'app-full-page-message',
    templateUrl: './full-page-message.component.html',
    styleUrls: ['./full-page-message.component.scss']
})
export class FullPageMessageComponent implements OnInit {

    @Input()
    public messageData: IFullPageMessage;

    public constructor() { }

    public ngOnInit(): void { }

}
