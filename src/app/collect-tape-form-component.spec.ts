import { DebugElement } from "@angular/core";
import { CollectTapeFormComponent } from "./collect-tape-form-component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { By, BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { TapeService } from "./tape.service";

describe('CollectTapeFormComponent(templateUrl)', function () {
    let de: DebugElement[];
    let comp: CollectTapeFormComponent;
    let fixture: ComponentFixture<CollectTapeFormComponent>;
    let el: HTMLElement;
    let tapeService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule],
            declarations: [CollectTapeFormComponent],
            providers: [TapeService]

        })
            .overrideComponent(CollectTapeFormComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/collect-tape-form.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectTapeFormComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(By.css('div'));
        el = de[0].nativeElement;
        tapeService = fixture.debugElement.injector.get(TapeService);
        spyOn(tapeService, 'getDamages').and.returnValue(['broken']);
        spyOn(tapeService, 'getRatings').and.returnValue([1]);
    });

    it('should create component', () => expect(comp).toBeDefined());
    it('should get damages', () => {
        fixture.detectChanges();
        expect(comp.damages).toEqual(['broken']);
    });
it('should get ratings', () => {
        fixture.detectChanges();
        expect(comp.ratings).toEqual([1]);
    });

});
