import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameMatchingPagePage } from './name-matching-page.page';

describe('NameMatchingPagePage', () => {
  let component: NameMatchingPagePage;
  let fixture: ComponentFixture<NameMatchingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameMatchingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NameMatchingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
