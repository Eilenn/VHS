import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'star',
    templateUrl: './templates/star.component.html',
    styleUrls: ['./templates/star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    starWidthInHtml: number = 140;
    numberOfStars: number = 5
    ngOnChanges(): void {
        this.starWidth = this.rating * (this.starWidthInHtml / this.numberOfStars);
    }
}