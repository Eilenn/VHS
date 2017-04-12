import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkStubDirective, RouterOutletStubComponent } from "./testing/router-stubs";


describe('AppComponent(templateUrl)', function () {
  let de: DebugElement;
   let debA: DebugElement[];
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,RouterLinkStubDirective, RouterOutletStubComponent]
      
    })
    .overrideComponent(AppComponent, {
        set: {
          templateUrl: '/base/src/app/templates/mainView.html',
          styleUrls: ['/base/src/app/styles.css'],
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    debA=fixture.debugElement.queryAll(By.css('a'));
    el = de.nativeElement;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.name);
  });
    it('should have expected home text', () => {
      let home:string='Home';
    fixture.detectChanges();
    expect(debA[0].nativeElement.textContent).toContain(home);
  });
      it('should have expected VHS Listing text', () => {
      let listing:string='VHS Listing';
    fixture.detectChanges();
    expect(debA[1].nativeElement.textContent).toContain(listing);
  });
        it('should have expected Subscribed customers text', () => {
      let customers:string='Subscribed customers';
    fixture.detectChanges();
    expect(debA[2].nativeElement.textContent).toContain(customers);
  });
          it('should have expected  text', () => {
      let rented:string='List of rented tapes';
    fixture.detectChanges();
    expect(debA[3].nativeElement.textContent).toContain(rented);
  });
    it('should display a different test name', () => {
    comp.name = 'Test name';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test name');
  });
});
