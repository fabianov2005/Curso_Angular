import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosdetalheComponent } from './pedidosdetalhe.component';

describe('PedidosdetalheComponent', () => {
  let component: PedidosdetalheComponent;
  let fixture: ComponentFixture<PedidosdetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosdetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosdetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
