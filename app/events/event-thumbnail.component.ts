import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'"> (Early start) </span>
            <span *ngSwitchCase="'10:00 am'"> (Late start) </span>
            <span *ngSwitchDefault> (Normal start) </span>
        </div>
        <div [ngStyle]="{'color': event?.time === '10:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '10:00 am' ? 'bold' : 'normal' }">Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location" [style.color]="event?.time === '9:00 am' ? '#003300' : '#bbb'">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            (Using ngIf is more expensive) online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color:#bbb; }
        `
    ]

})
export class EventThumbnailcomponent {
    @Input() event:IEvent

    getStartTimeClass() {
        if(this.event && this.event.time === '8:00 am') 
            return 'green bold'
         return ''
         
         // Diffrent type of  approaches
         
         //2st Approach
           //return ['green', 'bold']
         //return []

         // 3rd approach  
        //const isEarlyStart = this.event && this.event.time === '8:00 am'
        //return {green: isEarlyStart, bold: isEarlyStart}
    }

// Like ngClass approach
    //getStartTimeStyle():any {
        //if(this.event && this.event.time === '10:00 am') 
            //return { color: '#003300', 'font-weight': 'bold'}
         //return {}
    //}
    
}