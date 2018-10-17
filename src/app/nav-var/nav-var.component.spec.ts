
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavVarComponent } from './nav-var.component';

describe('NavVarComponent', () => {
  let component: NavVarComponent;
  let fixture: ComponentFixture<NavVarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
