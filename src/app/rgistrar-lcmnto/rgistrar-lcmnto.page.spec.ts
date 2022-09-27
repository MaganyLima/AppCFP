import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RgistrarLcmntoPage } from './rgistrar-lcmnto.page';

describe('RgistrarLcmntoPage', () => {
  let component: RgistrarLcmntoPage;
  let fixture: ComponentFixture<RgistrarLcmntoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RgistrarLcmntoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RgistrarLcmntoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
